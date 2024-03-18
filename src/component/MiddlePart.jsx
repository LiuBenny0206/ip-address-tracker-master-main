import React, {useState} from "react";

function MiddlePart({ data }){
    return(
        <div className="infoPart">
            <div className="row">
                <p className="title">IP ADDRESS</p>
                <p className="info">{data.ip || '0.0.0.0'}</p>
            </div>
            <hr></hr>
            <div className="row">
                <p className="title">LOCATION</p>
                <p className="info">
                    {data.location && data.location.city && data.location.region && data.location.postalCode
                    ? `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
                    : <p>Taichung, Taiwan <br />12345</p>}
                </p>
            </div>
            <hr></hr>
            <div className="row">
                <p className="title">TIMEZONE</p>
                <p className="info">{data.location && data.location.timezone ? `UTC ${data.location.timezone}` : 'UTC 00:00'}</p>
            </div>
            <hr></hr>
            <div className="row">
                <p className="title">ISP</p>
                <p className="info">{data.isp || 'Benny House'}</p>
            </div>
        </div>
    );
}

export default MiddlePart;