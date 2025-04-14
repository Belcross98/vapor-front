const responseHandler = async (response) => {
  const data = await response.json();
  return {
    success: data.success,
    errorText: data.message,
    data: data.data,
  };
};

export default responseHandler;
