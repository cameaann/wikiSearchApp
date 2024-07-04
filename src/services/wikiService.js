import axios from "axios";

const urls = [
  "https://en.wikipedia.org/api/rest_v1/page",
  "https://ru.wikipedia.org/api/rest_v1/page",
  "https://de.wikipedia.org/api/rest_v1/page",
  "https://fr.wikipedia.org/api/rest_v1/page",
];

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

const getArticles = async (title) => {
  const res = Promise.allSettled(
    urls.map((url) =>
      fetchWithTimeout(`${url}/summary/${encodeURIComponent(title)}`)
    )
  )
    .then((results) => {
      if (results.length > 1) {
        const successfulResults = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);
        console.log("First successful results:", successfulResults);
        return successfulResults;
      }
      else{
        return results;
      }
    })
    .catch((error) => {
      console.error("All requests failed:", error);
    });
  return res;
};

export default { getArticles };
