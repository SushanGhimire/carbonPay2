export const baseUrl = "http://127.0.0.1:8000";

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
