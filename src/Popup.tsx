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
      <h1 className="popup-title">네이버 알림톡 구독 해제</h1>
      <button onClick={handleUnsubscribe} className="popup-button">
        구독 해제 시작하기
      </button>
    </div>
  );
};

export default Popup;
