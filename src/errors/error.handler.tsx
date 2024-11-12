export const handleErrorResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};
