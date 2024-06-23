import React from 'react';
import './SignOut.css';

function SignOut({ onSignOut }) {
  return (
    <div className="sign-out">
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
