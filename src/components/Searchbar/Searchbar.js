export const Searchbar = ({ onSubmit,handleChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <button type="button" >
              Search
            </button>
        <input
          type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
        />
        </form>
    );
  };