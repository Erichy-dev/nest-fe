const formatCurrency = (value: any, currencyType: string = 'CLP'): string => {
  // Determinar si el valor tiene formato de moneda.
  const hasCurrencySymbol = /[$]|US[$]|UF/.test(value.toString());
  let cleanedValue = value
    .toString()
    .replace(/[^\d,.-]/g, '')
    .trim();
  let numericValue;
  let formattedValue;

  if (!hasCurrencySymbol) {
    // Si no tiene símbolo de moneda, asumir que el punto es el separador decimal.
    cleanedValue = cleanedValue.replace(/,/g, ''); // Eliminar posibles comas (miles).
    numericValue = parseFloat(cleanedValue);
  } else {
    // Si tiene símbolo de moneda, aplicar reglas específicas según el tipo de moneda.
    switch (currencyType) {
    case 'CLP':
    case 'UF':
      // Para CLP, el punto es separador de miles y la coma es separador decimal.
      // Reemplazar comas por puntos (decimales) y eliminar puntos (miles).
      cleanedValue = cleanedValue.replace(/\./g, '').replace(/,/g, '.');
      break;
    case 'USD':
      // Para USD, la coma es separador de miles y el punto es separador decimal.
      // Eliminar comas (miles) y mantener puntos (decimales).
      cleanedValue = cleanedValue.replace(/,/g, '');
      break;
    default:
      throw new Error('Tipo de moneda no soportado.');
    }

    // Convertir el valor a número.
    numericValue = parseFloat(cleanedValue);
  }

  // Verificar si el valor es un número válido.
  if (isNaN(numericValue)) {
    return '$0';
  }

  // Formatear el número según el tipo de moneda.
  switch (currencyType) {
  case 'CLP':
    // Para CLP, no se usan decimales y se usa el signo $.
    formattedValue =
        '$' +
        numericValue.toLocaleString('es-CL', { maximumFractionDigits: 0 });
    break;
  case 'USD':
    // Para USD, se usan dos decimales y se usa el prefijo US$.
    formattedValue =
        'US$' +
        numericValue.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    break;
  case 'UF':
    // Para UF, se usan dos decimales y se añade el sufijo UF.
    formattedValue =
        numericValue.toLocaleString('es-CL', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + ' UF';
    break;
  default:
    // Por defecto, se formatea con dos decimales.
    formattedValue = numericValue.toLocaleString('es-CL', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return formattedValue;
};

const formatPercentage = (value: string) => {
  const number = parseFloat(value);
  return isNaN(number) ? '' : `${number.toFixed(1)}%`;
};

const unFormatCurrency = (value: string | number) => {
  const cleaned = Number.parseInt(value.toString().replace(/[^\d,.-]/g, ''));
  if (isNaN(cleaned)) {
    return 0;
  }
  return cleaned;
};


export const numericUtil = {
  formatCurrency,
  formatPercentage,
  unFormatCurrency,
};
