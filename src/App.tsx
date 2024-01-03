import React from 'react';
import LogIn from './LogIn';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Perform authentication logic here (e.g., send credentials to a server)
    // For simplicity, just log the credentials for now
    console.log('Login with:', { username, password });
  };

  return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Login Page</h1>
      <LogIn onLogin={handleLogin} onSignupLinkClick={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </div>
    </div>
  );
};

export default App;