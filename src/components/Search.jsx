import { debounce } from 'lodash';

const Search = ({ handleChange}) => {

  const handleOnChange = (event) => {
    handleChange(event.target.value)
  };

  const debounceOnChange = debounce(handleOnChange, 500);


  return (
    <>
      <label htmlFor="">Find the article</label>
      <input className="searchLine" onChange={debounceOnChange} />
    </>
  );
};
export default Search;
