import { useOidcAccessToken, useOidc, useOidcIdToken } from '@axa-fr/react-oidc'
import React from 'react'
import { Link } from 'react-router-dom'
import Authenticating from '../callbacks/Authenticating'
import AuthenticationError from '../callbacks/AuthenticationError'
import SessionLost from '../callbacks/SessionLost'
import UserInfo from '../UserInfo'

const Admin = () => {
    // important hooks
    // const { accessTokenPayload } = useOidcAccessToken()   // this contains the user info in raw json format
    // const userInfo = accessTokenPayload as UserInfo       // 
    // const { idToken, idTokenPayload } = useOidcIdToken()  // this is how you get the users id token
    // const { login, logout, isAuthenticated } = useOidc()  // this gets the functions to login and logout and the logout state

    return (
        
        <div>
            <h1 className="display-3">testing stuff</h1>
            <p className="lead"></p>
            
            
        </div>
    )
}

export default Admin