import React from "react";
import "bulma/css/bulma.css";
import { useAuth0 } from "../src/contexts/auth0-context";
import Header from "./components/Header";
import Profile from "./components/profile";
import ChatPage from "./components/chatpage.component";

function App() {
  const { isLoading, user } = useAuth0();

  return (
    <>
      <Header />
      {!isLoading && user && (
    
      <Profile/>
      )}

      <div className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            {!isLoading && !user && <p>Welcome to ChatApp</p>}

            {!isLoading && user && (
              <>
                <ChatPage userId={user.sub} userEmail={user.email} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
