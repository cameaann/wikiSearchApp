import Result from "./Result";

const AllResults = ({ results = []}) => {
  console.log(results);
  return (
    <section>
      { (results.length > 0) ? (
        results.map((res, index ) => (
        <Result 
          key = {index}
          title={res.title}
          description={res.description ? res.description : res.extract}
          link={res.content_urls}
        />
      ))
      ) : ( <p>No results found.</p>)
      }
    </section>
  );
};

export default AllResults;
