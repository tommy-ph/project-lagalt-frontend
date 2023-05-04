import React, {useEffect, useState} from "react";
import keycloak from "../../keycloak";

function KeycloakLogin () {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        keycloak
        .init({onLoad: 'check-sso', silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'})
        .then((auth) => {
            if(!auth){
                keycloak.login();
            }else{
                setAuthenticated(true);
                console.log('Authenticated with keycloak');
            }
        })
        .catch(() => {
            console.log('Faile to initialize Keycloak');
        });
        return () => {
            keycloak.onAuthLogout = null;
        };
    }, []);

    return (
        <div>
            {authenticated? (
                <p>
                    Logged in with Keycloak.{' '}
                    <button onClick={() => keycloak.logout()}>
                        Logout
                    </button>
                </p>
            ): (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default KeycloakLogin;