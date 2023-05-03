import Keycloak from "keycloak-js";

const keycloak = new Keycloak("/keycloak.json");

/**
 * Initialize Keycloak and silently checking for an existing login.
 * @description Should be called before render() of app.
 * @returns { Promise<void> } Promise
 */

export const initialize = () => {
    const config = {
        checkLoginIframe: false,
        silentChSsoRedirectUri:
        window.location.origin,
    };
    return keycloak.init(config);
};

/**@type {keycloak} Keycloak */
export default keycloak;