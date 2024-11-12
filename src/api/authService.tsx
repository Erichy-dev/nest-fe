import { SessionResponse } from '../types';

import { handleErrorResponse } from '../errors';
import { getApiUrl } from '../configs/config.tsx';

const login = async (username: string, password: string): Promise<SessionResponse> => {
  const response = await fetch(getApiUrl('/auth/login'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  handleErrorResponse(response);
  return await response.json();
};

export const authService = {
  login,
};
