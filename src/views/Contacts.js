import React from "react";
import "../css/Contacts.min.css";

function Contacts() {
  return (
    <div className="contacts">
      Telegram:
      <div className="contactContainer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/nespoli"
        >
          @Nespoli
        </a>
      </div>
    </div>
  );
}

export default Contacts;
