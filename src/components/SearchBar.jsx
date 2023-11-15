import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        position: 'static',
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 2,
        boxShadow: 'none',
        marginRight: { sm: 5 },
      }}
    >
      <InputBase
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
