import { useCallback, useState } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const openSearch = useCallback((query) => {
    const trimmed = query?.trim();
    if (!trimmed) {
      return;
    }

    window.open(`https://www.bing.com/search?q=${encodeURIComponent(trimmed)}`, '_blank', 'noopener,noreferrer');
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event?.preventDefault();
      openSearch(value);
    },
    [openSearch, value]
  );

  return (
    <div className="searchBarWrapper">
      <form className="searchBar" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Bing Search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoFocus
        />
        <button className="searchButton" type="submit" aria-label="Search Bing">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
