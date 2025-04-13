const responseHandler = async (response) => {
  if (response.ok) {
    const data = await response.json();
    return {
      success: true,
      data: data.data,
    };
  }

  const errorText = await response.text();
  return {
    success: false,
    errorText: errorText,
  };
};

export default responseHandler;
