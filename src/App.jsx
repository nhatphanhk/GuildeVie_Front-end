import { CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <CssBaseline></CssBaseline>
            <Header></Header>
            <header className="App-header">Hello world</header>
        </div>
    );
}

export default App;
