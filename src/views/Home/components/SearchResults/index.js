import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({ results, isFetching, isSearching, message }) {
    return (
        <div className="search-results">
            <p className="title">
                { (isFetching && message) || (!results?.length && isSearching && "No existen resultados") }
            </p>
            {
                results?.map(result => (
                    <SearchResultsItem
                        key={result.id}
                        {...result}
                    />
                ))
            }
        </div>
    );
}