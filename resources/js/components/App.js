import react from "react";
import ReactDOM from "react-dom";
import { Clasico } from "./Clasico";
function App() {
    return (
        <div className="container">
           <h1>React Component</h1>
           <Clasico/>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}