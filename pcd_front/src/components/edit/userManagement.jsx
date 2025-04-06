import React, { useState } from 'react';
import { FaUserPlus, FaTrash } from 'react-icons/fa';
import '../../assets/css/edit/userManagement.css';

// Function to generate a random 8-character password
const generatePassword = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const UserManagement = () => {
  // State for managing users and form inputs
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Placeholder function to add a user (replace with API call later)
  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]); // Temporary ID using timestamp
  };

  // Placeholder function to delete a user (replace with API call later)
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!name.trim() || !email.trim()) {
      setError('Please enter both name and email');
      return;
    }

    
    const password = generatePassword();
    const newUser = { name, email, password };
    addUser(newUser);

    
    setName('');
    setEmail('');
    alert(`User added with password: ${password}`); 
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>

      {/* Form to add new users */}
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="add-button">
          <FaUserPlus /> Add User
        </button>
      </form>

      {/* List of existing users */}
      <div className="user-list">
        <h2>Existing Users</h2>
        {users.length === 0 ? (
          <p>No users added yet.</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <span>{user.name} ({user.email})</span>
                <button onClick={() => deleteUser(user.id)} className="delete-button">
                  <FaTrash /> Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserManagement;