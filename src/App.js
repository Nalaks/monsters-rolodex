import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/CardList';
import './App.css';
import fetchRobots from './API';
import SearchBox from './components/search-box/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');
  const filteredMonsters = () =>
    monsters.filter((monster) => monster.name.toLowerCase().includes(search.toLowerCase()));
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetchRobots().then((data) => setMonsters(data));
  }, []);
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox handleSearch={handleSearch} />
      {search.length > 0 ? (
        <CardList monsters={filteredMonsters()} />
      ) : (
        <CardList monsters={monsters} />
      )}
    </div>
  );
};

export default App;
