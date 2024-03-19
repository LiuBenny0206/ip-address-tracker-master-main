import React, {useState} from "react";
import UpperPart from "./UpperPart";
import MiddlePart from "./MiddlePart";
import LowerPart from "./Lower";

function App(){
    // Save the API data
    const [ipData, setIpData] = useState({
        ip: "",
        location: {
            country: "",
            region: "",
            city: "",
            postalCode: "",
            lat: "",
            lng: "",
            timezone: ""
        },
        isp: ""
    });
    
    const updateIpData = (newData) => {
        setIpData(newData);
    };
    

    return (
        <div className="mainPart">
            <UpperPart updateIpData={updateIpData} /> {/* 传递函数给 UpperPart */}
            <MiddlePart data={ipData} /> {/* 传递数据给 MiddlePart */}
            <LowerPart data={ipData} />
        </div>
    );
}

export default App;