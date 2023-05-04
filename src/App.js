import React from "react";
import KeycloakLogin from "./components/Login/KeycloakLogin";
import GoogleLogin from "./components/Login/GoogleLogin";

import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = process.env.GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h1>React app with Keycloak and Google Login</h1>
        <KeycloakLogin />
        <GoogleLogin />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
