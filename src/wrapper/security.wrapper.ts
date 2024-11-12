const securityWrapper = async (url: string, options : RequestInit) => {
  try {
    const access_token = sessionStorage.getItem('access_token');

    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${access_token}`,
    };
    const response = await fetch(url, options);

    if (response.status === 401) {
      console.error('Unauthorized');
      const event = new Event('logout');
      window.dispatchEvent(event);
    }

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default securityWrapper;
