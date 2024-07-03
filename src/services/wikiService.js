import axios from "axios";

const getArticles = async (title, lang) => {
console.log(lang);
const url = "https://en.wikipedia.org/api/rest_v1/page";

  try {
//     console.log(title);
    const res = await axios.get(`${url}/summary/${encodeURIComponent(title)}`, {
//       headers: {
//         "User-Agent": "wikiSearchApp/1.0 (cameaann@gmail.com)",
//       },
    });
//     console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching article:", error);
  }
};
export default { getArticles };
