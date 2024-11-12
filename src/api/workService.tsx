import securityWrapper from '../wrapper/security.wrapper.ts';
import { getApiUrl } from '../configs/config.tsx';
import { handleErrorResponse } from '../errors';

const getWorkOrders = async (page = 1, paginationNumber: number, search = '') => {
  const response = await securityWrapper(getApiUrl('/work/order/get-page'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      page,
      paginationNumber,
      search,
    })
  });
  handleErrorResponse(response);
  return await response.json();
};
const getQuotations = async (page = 1, paginationNumber: number, search = '') => {
  const response = await securityWrapper(getApiUrl('/work/quotation/get-page'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      page,
      paginationNumber,
      search,
    })
  });
  handleErrorResponse(response);
  return await response.json();
}

export const workService = {
  getWorkOrders,
  getQuotations,
}
