import axios from "axios";

const langArrayUrl = "https://commons.wikimedia.org/w/api.php?action=sitematrix&smtype=language&format=json&origin=*";

const url =".wikipedia.org";
const endpoint = '/w/rest.php/v1/search/page';


const fetchWithTimeout = (url, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error("Request timed out")),
      timeout
    );

    axios
      .get(url)
      .then((response) => {
        clearTimeout(timer);
        resolve(response.data);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
};

const getArticles = async (lang, title) => {

  let finalUrl = `https://${lang}${url}${endpoint}`;
  let linkUrl = `https://${lang}${url}/wiki/`

  console.log(finalUrl);

  // const res = await axios.get(`${finalUrl}/summary/${encodeURIComponent(title)}`);
  try {
    const res = await axios.get(finalUrl, { params:{'q': title, 'limit': 5}})
    console.log(res.data);
    return { 
      data:res.data,
      linkUrl: linkUrl
    }
  } catch (error) {
    console.error(error);
    return null;
  }
 

};

const getLanguagesArray = async () => {
  const res = await axios.get(langArrayUrl)

  const {sitematrix } = {...res.data}
  return sitematrix;
}

export default { getArticles, getLanguagesArray };
