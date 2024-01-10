import { useState } from "react";

export default function App() {
  return (
    <div className="wrapper">
      <div className="component">
        <div className="images__box">
          <img className="logo" src="../public/images/logo.svg" />
          <div className="icons">
            <img className="icon" src="../public/images/icon-document.svg" />
            <img className="icon" src="../public/images/icon-folder.svg" />
            <img className="icon" src="../public/images/icon-upload.svg" />
          </div>
        </div>
        <Input />
      </div>
    </div>
  );
}

function Input() {
  const [value, setValue] = useState(0);

  const storageUsed = value;
  const storageLeft = 1000 - value;

  return (
    <div className="input__box">
      <p className="input__text">
        You’ve used <span>{storageUsed}</span> of your storage
      </p>
      <div className="input__range">
        <input
          type="range"
          id="storage"
          name="storage"
          min="0"
          max="1000"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="labels">
          <label htmlFor="storage">0 GB</label>
          <label htmlFor="storage">1000 GB</label>
        </div>
      </div>
      <div className="display">
        <p className="display__number">{storageLeft}</p>
        <p className="display__text">gb left</p>
      </div>
    </div>
  );
}
