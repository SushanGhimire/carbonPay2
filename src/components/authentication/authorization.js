<<<<<<< HEAD
export const baseUrl = "http://127.0.0.1:8000";
//export const baseUrl = "https://api.joincarbonpay.com";
=======

// export const baseUrl = "http://127.0.0.1:8000";
export const baseUrl = "https://api.joincarbonpay.com";
>>>>>>> cbb4637c01013db22a069dea8e06709c57cf8e88

export const headers = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  } else {
    return null;
  }
};
