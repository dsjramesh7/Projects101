import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
  };

  return (
    <div className="qr-container">
      <div className="qr-box">
        <h1 className="qr-title">QR Code Generator</h1>

        <div className="qr-input-group">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your value here"
            className="qr-input"
          />
          <button
            disabled={!input.trim()}
            onClick={handleGenerateQRCode}
            className="qr-button"
          >
            Generate
          </button>
        </div>

        {qrCode && (
          <div className="qr-output">
            <QRCode
              id="qr-code-value"
              value={qrCode}
              size={256}
              bgColor="#ffffff"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
