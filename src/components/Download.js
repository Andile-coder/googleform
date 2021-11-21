import React, { useState } from "react";

function Download() {
  const [state, setState] = useState([{ option: "option1", id: "" }]);
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(state)], {
      type: "json/plain;charset-utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "newFile.json";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <button onClick={() => handleDownload()}>Download</button>
    </div>
  );
}

export default Download;
