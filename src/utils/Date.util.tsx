import dayjs from 'dayjs';

const formatDate = (date: any): string => {
  // Si la fecha ya es un objeto Date
  if (date instanceof Date) {
    return dayjs(date).format('DD/MM/YYYY');
  }

  // Si la fecha es una instancia de dayjs
  if (dayjs.isDayjs(date)) {
    return date.format('DD/MM/YYYY');
  }

  // Si la fecha es un string
  if (typeof date === 'string') {
    // Intentamos parsear el string como una fecha
    const parsedDate = dayjs(date);
    if (parsedDate.isValid()) {
      return parsedDate.format('DD/MM/YYYY');
    } else {
      console.error('Invalid date string');
      return '';
    }
  }

  // Si el formato no es compatible
  console.error('Unsupported date format');
  return '';
};

export const dateUtil = {
  formatDate,
};
