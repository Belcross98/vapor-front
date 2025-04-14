const responseHandler = async (response, login) => {
  const data = await response.json();
  if (data.success && login) {
    localStorage.setItem("accessToken", data.data.tokens);
    localStorage.setItem("username", data.data.username);
  }
  return {
    success: data.success,
    errorText: data.message,
    data: data.data,
  };
};

export default responseHandler;
