import axios from "axios";

const getArticles = async (title) => {
const url = "https://en.wikipedia.org/api/rest_v1/page";

  try {
    const res = await axios.get(`${url}/summary/${encodeURIComponent(title)}`, {
    });
//     console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching article:", error);
  }
};
export default { getArticles };
