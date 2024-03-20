import React, { useState } from 'react';
import DeskUpperMainPic from '.././images/pattern-bg-desktop.png'; // 确保路径是正确的

function UpperPart({updateIpData}) {
    const [ip, setIp] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://ip-address-tracker-master-main.vercel.app/get-ip-info?ip=${ip}`);
            const text = await response.text(); // 首先获取响应文本
            try {
                const data = JSON.parse(text); // 尝试解析文本为 JSON
                console.log(data);
                updateIpData(data);
            } catch (error) {
                // 如果 JSON 解析失败，说明响应可能不是有效的 JSON
                console.error('Error parsing JSON:', error);
                console.error('Response received:', text);
                updateIpData({ error: 'Received invalid JSON.' });
            }
        } catch (error) {
            console.error('Request failed', error);
            updateIpData({ error: error.message });
        }
    };

    return (
        <section className="upperBackground" style={{background: `url(${DeskUpperMainPic})`, backgroundSize: 'cover'}}>
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
                    </
