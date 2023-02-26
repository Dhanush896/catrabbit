import React, { useState } from 'react';
import axios from 'axios';

export function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`http://localhost:3000/search/${query}`);
    setResults(response.data);
  };

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(result => <li key={result.id}>{result}</li>)}
      </ul>
    </div>
  );
}

export default Search;