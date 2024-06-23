import React from 'react';
import './SignIn.css';

function SignIn({ onSignIn }) {
  return (
    <div className="sign-in">
      <h2>Please Sign In</h2>
      <button onClick={onSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
