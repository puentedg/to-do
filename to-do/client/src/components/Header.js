import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div className="container">
        <div className="header__container">
          <Link className="" to="/">
            <h1>To-do List</h1>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hi, {Auth.getProfile().data.username}!</span>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn-primary" to="/login">
                Login
              </Link>
              <Link className="btn-primary" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
