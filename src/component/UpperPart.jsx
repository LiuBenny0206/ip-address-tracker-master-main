import React, { useState } from 'react';
import DeskUpperMainPic from '.././images/pattern-bg-desktop.png'; // 确保路径是正确的

function UpperPart({updateIpData}) {
    const [ip, setIp] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/get-ip-info?ip=${ip}`);
            if (response.ok) {
              const data = await response.json();
              console.log(data);
              updateIpData(data);
            } else {
              // 如果響應狀態碼不是2xx, 將錯誤打印到控制台
              console.error('Server response not OK:', response.statusText);
              updateIpData({ error: response.statusText });
            }
          } catch (error) {
            console.error('Request failed', error);
            updateIpData({ error: error.message });
          }
    };

    return (
        <section className="upperBackground" style={{background: `url(${DeskUpperMainPic})`}}>
            <p>IP Address Tracker</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for any IP address"
                    value={ip} // 绑定输入框的值到状态变量
                    onChange={(e) => setIp(e.target.value)} // 更新状态变量的值
                />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                        <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/>
                    </svg>
                </button>
            </form>
        </section>
    );
}

export default UpperPart;
