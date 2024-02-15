import React from 'react';
import './login.css';

const Login = () => {
    return (
        <loginn id='login'>
<div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider" />
          <span className="card-side" />
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" action="">
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className="flip-card__btn">Let`s go!</button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" action="">
                <input
                  className="flip-card__input"
                  placeholder="Name"
                  type="name"
                />
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
</loginn>
    );

}

export default Login;