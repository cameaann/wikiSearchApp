import { debounce } from 'lodash';

const Search = ({ handleChange}) => {

  const handleOnChange = (event) => {
    handleChange(event.target.value)
  };

  const debounceOnChange = debounce(handleOnChange, 500);


  return (
    <div className='search'>
      <label className='searchLabel' htmlFor="">Find the article</label>
      <input className="searchLine" onChange={debounceOnChange} />
    </div>
  );
};
export default Search;
