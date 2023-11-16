import React, { useState } from "react";
import submitIcon from "../../images/icon-arrow.svg"

export default function SearchBar({ onResultChange }) {
    const [input, setInput] = useState("");
    const [result, setResult] = useState({});

    // Function to fetch data from the API
    const fetchData = (ipAddress) => {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_kXnBsGaxAmZSvM7T1S41qdEiXWcP9&ipAddress=${ipAddress}`)
        .then(res => res.json())
        .then((data) => {
            setResult(data); // Update state with API results
            onResultChange(data); // Pass data to parent component
        })
        .catch(err => console.error('Error fetching data:', err));
    };

    // Handle input change
    const handleChange = (value) => {
        setInput(value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            fetchData(input);
        }
    };

    return (
    
        <form onSubmit={handleSubmit} className="searchBar">
            <input
                type="text"
                placeholder="Type IP address"
                className="searchBar--input"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            
            <button 
            type="submit"
            className="submit--btn"
            >
                <img src={submitIcon} alt="Icon"/>
            </button>
        </form>
      
    );
}
