import Result from "./Result";

const AllResults = ({ res }) => {
    if (!res) {
        return <p>Loading...</p>;
      }
    const { data, linkUrl } = {...res}
    const { pages } = { ...data}

    if(pages && pages.length > 0){
        return (
            <section>
             { pages.map((page, index ) => (
              <Result 
                key = {index}
                title={page.title}
                description={page.description =! isNaN ? page.description : page.extract}
                link={`${linkUrl}${page['key']}`}
              />
            ))
            }
          </section>
          )
    }else{
        return(
            <p>No results found.</p>
        )
    }
};

export default AllResults;
