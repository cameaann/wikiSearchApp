import { useEffect, useState } from "react";
import Search from "./components/Search";
import wikiService from "./services/wikiService";
import AllResults from "./components/AllResults";
import { DarkModeProvider } from "./DarkModeContext";
import Header from "./components/Header";

const App = () => {
  const [searchW, setSearchW] = useState("");
  const [languages, setLanguages ] = useState();
  const [ lang, setLang ] = useState('en');
  const [results, setResult] = useState();

  useEffect(() => {

    wikiService.getLanguagesArray().then(res => {
      setLanguages(Object.values(res));
    }).catch(err => console.error(err));
    
    try {
      if (searchW.length > 0) {
        wikiService.getArticles(lang, searchW).then((res) => {
          console.log("Result", res);
          setResult(res);
        });
      }
    } catch (error) {
      return console.error();
    }
  }, [searchW, lang]);

  const handleSelectLang = (lang) =>{
    setLang(lang);
  }

  const handleOnChange = (searchWord) => {
    setSearchW(searchWord.toLowerCase());
  };

  return (
    <DarkModeProvider >
      <Header />
      <main className="main">
        <Search languages = {languages} handleChange={handleOnChange} selectLang = { handleSelectLang} />
        {searchW.length > 0 ? <AllResults res={results} /> : <div></div>}
      </main>
    </DarkModeProvider>
  );
};

export default App;
