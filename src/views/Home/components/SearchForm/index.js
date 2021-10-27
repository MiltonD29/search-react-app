import { useState } from "react";

import "./style.css";

export default function SearchForm({ onSearch, onClear, isSearching, isFetching }) {
    const [searchText, setSearchText] = useState("");

    const handleClearClick = () => {
        setSearchText("");
        onClear();
    };

    return (
        <div className="box">
            <div className="field">
                <label className="label">
                    <div className="control">
                        <input
                            className="input"
                            placeholder="Escribe para buscar Estados de la República Mexicana..."
                            value={searchText}
                            onChange={({ target: { value } }) => setSearchText(value)}
                        />
                    </div>
                </label>
            </div>
            <div className="columns">
                <div className="column is-6 is-offset-6 has-text-right">
                    <button
                        className="button is-white"
                        disabled={!isSearching || !searchText.length}
                        onClick={handleClearClick}
                    >
                        Limpiar
                    </button>
                    <button
                        className={`button is-primary ml-5 has-text-right ${isFetching ? "is-loading" : ""}`}
                        disabled={!searchText.length}
                        onClick={() => onSearch(searchText)}
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}