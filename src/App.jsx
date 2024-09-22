// App.jsx
import { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubServices';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <h2>{userData.name}</h2>
          <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a></p>
        </div>
      )}
    </div>
  );
};

export default App;
