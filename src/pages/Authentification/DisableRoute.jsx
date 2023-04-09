import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const DisableRoute = ({ children, user }) => {
  if (user) {
    return <Navigate to="/landing" />;
  }

  return children;
};

export default DisableRoute;
