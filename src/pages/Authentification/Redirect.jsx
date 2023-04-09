import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_ROUTE from "../../routes/ApiRoute";
import Loading from "./Loading";

const Redirect = () => {
  return <Navigate to="/landing" />;
};

export default Redirect;
