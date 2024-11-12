import { handleErrorResponse } from '../../../errors';
import { getApiUrl } from '../../../configs/config.tsx';
import securityWrapper from '../../../wrapper/security.wrapper.ts';

const headers = {
  'Content-Type': 'application/json',
};
const getPage = async (page: number, paginationNumber: number, search = '') => {
  const response = await securityWrapper(getApiUrl('/work/quotation/get-page'), {
    method: 'POST',
    headers,
    body: JSON.stringify({
      page,
      paginationNumber,
      search,
    })
  });
  handleErrorResponse(response);
  return await response.json();
};

export const quoteService = {
  getPage,
}
