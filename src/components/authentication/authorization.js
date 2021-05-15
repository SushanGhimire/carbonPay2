export const baseUrl = "http://127.0.0.1:8000";
// export const baseUrl = "http://api.joincarbonpay.com";

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

export const handleLogout = () => {
  fetch(`${baseUrl}/user/logout/`, {
    method: "POST",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: localStorage.getItem("refresh") }),
  })
    .then((response) => {
      if (response.ok) {
        localStorage.clear();
        window.location = "/";
      }
    })
    .catch((error) => localStorage.clear());
};
