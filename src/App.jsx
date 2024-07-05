import { useEffect, useState } from "react";
import Search from "./components/Search";
import wikiService from "./services/wikiService";
import AllResults from "./components/AllResults";
import { DarkModeProvider } from "./DarkModeContext";

const App = () => {
  const [searchW, setSearchW] = useState("");
  const [results, setResult] = useState();

  useEffect(() => {
    try {
      if (searchW.length > 0) {
        wikiService.getArticles(searchW).then((res) => {
          console.log(res);
          setResult(res);
        });
      }
    } catch (error) {
      return console.error();
    }
  }, [searchW]);

  const handleOnChange = (searchWord) => {
    setSearchW(searchWord.toLowerCase());
  };

  return (
    <DarkModeProvider>
      {/* <main> */}
        <h1>Wiki</h1>
        <Search handleChange={handleOnChange} />
        {searchW.length > 0 ? <AllResults results={results} /> : <div></div>}
      {/* </main> */}
    </DarkModeProvider>
  );
};

export default App;
