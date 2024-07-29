import { debounce } from "lodash";

const Search = ({ handleChange, languages, selectLang }) => {

  const handleOnChange = (event) => {
    handleChange(event.target.value);
  };

  const handleSelectLang = (event) =>{
    selectLang(event.target.value);
    console.log(event.target.value);
  }

  const debounceOnChange = debounce(handleOnChange, 500);

  return (
    <div className="search">
      <label className="searchLabel" htmlFor="">
        Find the article
      </label>
      <input className="searchLine" onChange={debounceOnChange}/>
      <select className="selectLang" defaultValue="" onChange={handleSelectLang}>
        <option value="" disabled>
          EN
        </option>
        {languages != undefined
          ? languages.map((entry, index) => (
              <option key={index} value={entry.code} lang = {entry.code}>
                {entry.name}
              </option>
            ))
          : ""}
      </select>
      <i className="search-btn fa-solid fa-magnifying-glass"></i>
    </div>
  );
};
export default Search;
