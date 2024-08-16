export const handleHttpError = (res, error) => {
  res.status(error._statusCode).json(error);
};
