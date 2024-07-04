import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import wikiService from "./services/wikiService";
import AllResults from "./components/AllResults";

const App = () => {
  const [searchW, setSearchW] = useState("book");
  const [results, setResult] = useState();

  useEffect(() => {
    try {

      wikiService.getArticles(searchW).then((res) => {
        console.log(res);
        setResult(res);
      });
    } catch (error) {
      return console.error();
    }
  }, [searchW]);

  
  const handleOnChange = (searchWord) => {
    setSearchW(searchWord.toLowerCase());
  };


  return (
    <>
      <h1>Wiki</h1>
      <Search handleChange={handleOnChange} />
      <AllResults results = {results}/>
    </>
  );
};

export default App;
