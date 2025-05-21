import React from "react";
import "./styles/popup.css";

const Popup: React.FC = () => {
  const handleUnsubscribe = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (tab.id) {
      await chrome.tabs.update(tab.id, {
        url: "https://m.notify.naver.com/channel",
      });
    }
  };

  return (
    <div className="popup-container">
      <h1 className="popup-title">네이버 채널 : 알림 한번에 끄기</h1>
      <button onClick={handleUnsubscribe} className="popup-button">
        시작하기
      </button>
      <p className="popup-description">
        <span>{new Date().toLocaleDateString()}</span>
        <span>v1.0.0</span>
      </p>
    </div>
  );
};

export default Popup;
