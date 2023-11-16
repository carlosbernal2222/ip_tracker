import React from "react";
import { useState } from "react";

import SearchBar from "./ui/SearchBar"
import SearchResult from "./ui/SearchResult";
import MapView from "./ui/MapView"

export default function Header(){
    
    //json object fetched from api 
    const [apiData, setApiData] = useState({
        ipAddress: "8.8.8.8",
        region: "California",
        country: "US",
        postalCode: "",
        timeZone: "-07:00",
        isp: "Google LLC",
        lng: -122.0785141,
        lat: 37.4059906
    });

    

    console.log(JSON.stringify(apiData));

    // Function to handle change in API data
    function handleChange(data) {
        setApiData({
            ipAddress: data.ip,
            region: data.location?.region,
            country: data.location?.country,
            timeZone: data.location?.timezone,
            isp: data.isp,
            lng: data.location?.lng,
            lat: data.location?.lat
        });
    }


    return(
        <section className="header">
            <div className="header--content">
                <h1>IP Address Tracker</h1>
                <SearchBar
                    onResultChange={handleChange}
                />
                <SearchResult
                    data={apiData}
                />
                {/* <MapView
                    data={apiData}
                /> */}
            </div>
        </section>
    )
}