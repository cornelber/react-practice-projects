import Header from './components/Header/Header'
import CardsContainer from './components/CardsContainer/CardsContainer'
import './App.css'

function App() {
	return (
		<div className='App'>
			<div className='Header'>
				<Header />
			</div>
			<div className='Cards'>
				<CardsContainer />
			</div>
		</div>
	)
}

export default App
