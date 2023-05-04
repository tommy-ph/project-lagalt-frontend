import React from "react";  
import {useGoogleLogin} from 'react-use-googlelogin';

const clientId = process.env.GOOGLE_CLIENT_ID;

function GoogleLogin() {
    const{ loading, signIn, signOut, user} = useGoogleLogin({
        clientId,
        onSuccess: (Response) => {
            console.log("Success:", Response);
        },
        onFailure: (error) => {
            console.log("Error:", error);
        },
    });

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div>
            {user ?(
                <div>
                    <p>
                        Logged in with Google.{''}
                        <button onClick={() => signOut()}>
                            Logout
                        </button>
                    </p>
                </div>
            ): (
                <button onClick= {() => signIn()}>
                    Login with Google
                </button>
            )}
        </div>
    );
}

export default GoogleLogin;