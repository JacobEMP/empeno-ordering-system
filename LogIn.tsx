import React, { useState, ChangeEvent, FormEvent } from 'react';

interface LogInProps {
  onLogin: (username: string, password: string) => void;
  onSignupLinkClick:()=>void;
}

const LogIn: React.FC<LogInProps> = ({ onLogin, onSignupLinkClick }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Clear any previous error
    setError('');

    // Pass the credentials to the parent component
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}className="form">
      <div className="formGroup">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="input"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="input"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
      <p className="signupLink"onClick={onSignupLinkClick}>Don't have an account? Sign up here</p>
    </form>
  );
};

export default LogIn;
