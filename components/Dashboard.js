import React from 'react';
import DataTable from './DataTable';
import SignIn from './SignIn';
import SignOut from './SignOut';
import './Dashboard.css';

function Dashboard() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="dashboard">
      <h1>Car Inventory Dashboard</h1>
      {isSignedIn ? (
        <>
          <SignOut onSignOut={handleSignOut} />
          <DataTable />
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default Dashboard;
