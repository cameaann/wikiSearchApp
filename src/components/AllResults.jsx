import Result from "./Result";

const AllResults = ({ results }) => {
  console.log(results);
  return (
    <section>
      { results && results.length > 0 ? (
        results.map((res, index ) => (
        <Result 
          key = {index}
          title={res.title}
          description={res.description.lenth>0 ? res.description : res.extract}
          link={res.desktop}
        />
      ))
      ) : ( <p>No results found.</p>)
      }
    </section>
  );
};

export default AllResults;
