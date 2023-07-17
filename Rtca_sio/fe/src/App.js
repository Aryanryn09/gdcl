import io from "socket.io-client";
import { nonoid } from "nanoid";
import useState from "react";
import "./App.css";
const socket = io.connect("http://localhost:3000");
function App() {
  // const [message, setMessage] = useState("");
  // const [chat, setChat] = useState([]);
  // const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  return (
    <div className="App" style={{ backgroundColor: "purple" }}>
      <h1
        style={{
          backgroundColor: "#282c34",
          color: "white",
          padding: "20px",
          fontSize: "45px",
        }}
      >
        Chatty application
      </h1>
      <header className="App-header">
        <form action="">
          <input
            type="text"
            name="chat"
            placeholder="send text"
            // value={msg}
            onChange={(e) => {
              // setMsg(e.target.value);
            }}
          />
          <button>Send </button>
        </form>
      </header>
    </div>
  );
}

export default App;
