const apiUrl = import.meta.env.VITE_APP_API_URL;
const localUrl = 'http://localhost:';
const env = import.meta.env.VITE_APP_ENV;
export const isLocalEnv = env === 'local';


export const getApiUrl = (path: string)=> {
  if(!isLocalEnv) {
    return apiUrl + path;
  }
  if(path.includes('/auth')) {
    return localUrl + '8080' + path;
  }
  if(path.includes('/work')) {
    return localUrl + '8081' + path;
  }
  return path;
};
