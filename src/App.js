import Header from "./components/Header/Header";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="Header">
                <Header />
            </div>
            <div className="Cards">
                <CardsGrid />
            </div>
        </div>
    );
}

export default App;
