import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Tabs from "./components/Tabs";
import Transition from "./components/Transition";
function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <Button/>
            <Tabs/>
            <Transition/>
        </div>
    );
}

export default App;
