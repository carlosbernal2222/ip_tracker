import React from "react";

export default function SearchResult({data}){
    return(
        <section className="result--container">
            <div className="result--item" id="result--ip">
                <p>IP ADDRESS</p>
                <h4 className="apiData">{data.ipAddress}</h4>
            </div>
            <div className="result--item" id="result--Location">
                <p>LOCATION</p>
                <h4 className="apiData">{`${data.region}${data.region !== "" ? "," : ""} ${data.country}`}</h4>
            </div>
            <div className="result--item" id="result--timezone">
                <p>TIMEZONE</p>
                <h4 className="apiData">{data.timeZone}</h4>
            </div>
            <div className="result--item" id="result--isp">
                <p>ISP</p>
                <h4 className="apiData">{data.isp}</h4>
            </div>
        </section>
    )
}