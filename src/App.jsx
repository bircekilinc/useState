import { useState } from "react";

function App() {
  let [status, setStatus] = useState(false);
  let [image, setImage] = useState("./person.jpg");
  let [buttonContent, setButtonContent] = useState("Remove Background");
  function change() {
    if (status) {
      setImage("./removed.png");
      setButtonContent("Clear");
    } else {
      setImage("./person.jpg");
      setButtonContent("Remove Background");
    }

    setStatus(!status);
  }
  return (
    <div className="container">
      <img src={image} alt="" />
      <button className="remove" onClick={change}>
        {buttonContent}
      </button>
    </div>
  );
}

export default App;
