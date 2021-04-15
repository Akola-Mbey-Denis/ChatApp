import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import './Header.css'

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-menu is-active">
            {/* logo */}
            <div className="navbar-brand" style={{display:'flex',justifyContent:'center'}}>
              <button className="navbar-item">ChatApp</button>
                {!isLoading && user && (
  <p style={{color:'white'}}>Welcome {user.given_name}</p>)}
            </div>

            {/* menu items */}
            <div className="navbar-end">
              {/* if there is no user. show the login button */}
              {!isLoading && !user && (
                <button onClick={loginWithRedirect} className="navbar-item">
                  Login
                </button>
              )}

              {/* if there is a user. show user name and logout button */}
              {!isLoading && user && (
                <>
                  <button className="navbar-item">{user.id}</button>
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt="My Avatar"
                      style={{ borderRadius: "50%",height:50,width:50 }}
                    />
                  )}
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="navbar-item"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}