import { useEffect, useState } from "react";
import Search from "./components/Search";
import wikiService from "./services/wikiService";
import AllResults from "./components/AllResults";
import { DarkModeProvider } from "./DarkModeContext";
import Header from "./components/Header";

const App = () => {
  const [searchW, setSearchW] = useState("");
  const [languages, setLanguages ] = useState();
  const [results, setResult] = useState();

  useEffect(() => {

    wikiService.getLanguagesArray().then(res => {
      setLanguages(Object.values(res));
      console.log(languages);
    })
    // try {
    //   if (searchW.length > 0) {
    //     wikiService.getArticles(searchW).then((res) => {
    //       console.log(res);
    //       setResult(res);
    //     });
    //   }
    // } catch (error) {
    //   return console.error();
    // }
  }, [searchW]);

  const handleOnChange = (searchWord) => {
    setSearchW(searchWord.toLowerCase());
  };

  return (
    <DarkModeProvider>
      <Header />
      <main className="main">
        <Search languages = {languages} handleChange={handleOnChange} />
        {searchW.length > 0 ? <AllResults results={results} /> : <div></div>}
      </main>
    </DarkModeProvider>
  );
};

export default App;
