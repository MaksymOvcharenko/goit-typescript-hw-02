import s from "./SearchBar.module.css";
const SearchBar = ({ handleSubmit }) => {
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
