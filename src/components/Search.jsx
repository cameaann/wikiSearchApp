import { debounce } from "lodash";

const Search = ({ handleChange, languages }) => {
  if (languages) {
    console.log(languages.length);
  }

  const handleOnChange = (event) => {
    handleChange(event.target.value);
  };

  const debounceOnChange = debounce(handleOnChange, 500);

  return (
    <div className="search">
      <label className="searchLabel" htmlFor="">
        Find the article
      </label>
      <select defaultValue="">
        <option value="" disabled>
          EN
        </option>
        {languages != undefined
          ? languages.map((entry, index) => (
              <option key={index} value={entry.code}>
                {entry.name}
              </option>
            ))
          : ""}
      </select>
      <input className="searchLine" onChange={debounceOnChange} />
    </div>
  );
};
export default Search;
