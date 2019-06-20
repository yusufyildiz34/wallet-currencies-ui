import React, {Component} from 'react';
import './App.css';
import Currencies from './components/Currencies'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Currencies</h1>
                </header>
                <Currencies></Currencies>
            </div>
        )
    }
}

export default App;
