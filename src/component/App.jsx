import React, {useState} from "react";
import UpperPart from "./UpperPart";
import MiddlePart from "./MiddlePart";
import LowerPart from "./Lower";

function App(){
    // 创建状态来存储API数据
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

    // 创建一个函数来更新状态，你会在获取API数据后调用这个函数
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