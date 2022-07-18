import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import SideBar from './components/SideBar.js';

function App() {
	return (
		<div className="App">
			<Header/>
    		<div class="blank"></div>
      		<div class="body_section">
        		<Body/>
        		<SideBar/>
      		</div>
    	</div>
  	);
}

export default App;
