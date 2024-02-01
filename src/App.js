import './App.css';
import GitRepoName from './GitRepoName';
import { useEffect, useState } from 'react';

function App() {
  const [repos, setRepos] = useState([]);

  async function getGithubRepos() {
    try
    {
      const response = await fetch("https://localhost:7093/api/Repo");
      const result = await response.json();
      setRepos(result);
    }
    catch(error)
    {
      console.log('There was an error', error)
    }
  }

  useEffect(() => {
    getGithubRepos();
  }, []);

  return (
    <div className="App">
      {repos?.length > 0 ? (
        <div>
          {repos.map((repo) =>
          <GitRepoName repo={repo}></GitRepoName> 
          )}
        </div>
      ):
      (
        <div>
          <p>There's nothing here.</p>
        </div>
      )}
    </div>
  );
}

export default App;
