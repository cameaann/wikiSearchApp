import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import wikiService from "./services/wikiService";
import SearchResult from "./components/SearchResult";

const App = () => {
  const [searchW, setSearchW] = useState("book");
  const [result, setResult] = useState();

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
    setSearchW(searchWord);
  };

  const { title, description, content_urls } = { ...result };

  return (
    <>
      <h1>Wiki</h1>
      <Search handleChange={handleOnChange} />
      <SearchResult
        title={title}
        description={description}
        articleLink={content_urls}
      />
    </>
  );
};

export default App;
