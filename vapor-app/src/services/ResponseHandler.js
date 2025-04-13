const responseHandler = async (response, login) => {
  const data = await response.json();
  if (response.ok) {
    if (login) {
      localStorage.setItem("accessToken", data.data.tokens);
      localStorage.setItem("username", data.data.username);
    }
    return {
      success: true,
      data: data.data,
    };
  }
  const errorText = Object.values(data.errors).flat().pop();

  return {
    success: false,
    errorText: errorText,
  };
};

export default responseHandler;
