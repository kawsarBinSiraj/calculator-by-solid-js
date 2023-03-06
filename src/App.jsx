import Calculator from "./components/Calculator";
import logo from "./logo.svg";

function App() {
    return (
        <div class="app">
            <header class={"header"}>
                <img src={logo} class={"logo"} alt="logo" />
                <h1 class="title">Calculator app by solid.js</h1>
                <p class="credit"><var>Developed by kawsar bin siraj</var></p>
                <Calculator />
            </header>
        </div>
    );
}

export default App;
