const SearchResult = ({title, description, articleLink}) => {

    const { desktop } = {...articleLink}
    return(
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            {/* <a href={desktop.page != undefined ? desktop.page : ''} target='blank'>See the link</a> */}
        </section>
    )
}

export default SearchResult