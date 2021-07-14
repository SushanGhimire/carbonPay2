// export const baseUrl = "http://127.0.0.1:8000";
export const baseUrl = "https://api.joincarbonpay.com";

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
