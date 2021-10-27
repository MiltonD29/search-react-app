import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

import { getStates } from '../../data/fakeAPI';
import logo from '../../assets/logo.png'

export default function Home() {
    const [isSearching, setIsSearching] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [message, setMessage] = useState("");
    const [results, setResults] = useState([]);

    const handleClearSearch = () => {
        setIsSearching(false);
        setResults([]);
    };
    const handleSearchClick = (searchText) => {
        setResults([]);
        setIsSearching(true);
        setIsFetching(true);
        setMessage("Buscando resultados...");
        getStates()
            .then(data => {
                if (data?.length) {
                    const searchTextMinus = searchText.toLowerCase();
                    const filteredStates = data.filter(state => (
                        state.name.toLowerCase().includes(searchTextMinus)
                    ));

                    setResults(filteredStates);
                }
            })
            .catch(null)
            .finally(() => {
                setIsFetching(false);
                setMessage("");
            })
    };

    return (
        <section className="hero has-background-white-ter is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="has-text-centered">
                        <img
                            width="400"
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <div>
                        <SearchForm
                            isFetching={isFetching}
                            isSearching={isSearching}
                            onSearch={handleSearchClick}
                            onClear={handleClearSearch}
                        />
                        <SearchResults
                            results={results}
                            isFetching={isFetching}
                            isSearching={isSearching}
                            message={message}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}