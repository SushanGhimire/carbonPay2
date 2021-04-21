import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../authentication/authorization";
function EmailVerify() {
  const { token } = useParams();
  // let token = window.location.pathname.split("/")[3];
  useEffect(() => {
    axios
      .get(`${baseUrl}/user/email-verify/?${token}`)
      .then(() => {
        window.location = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  return <div></div>;
}

export default EmailVerify;
