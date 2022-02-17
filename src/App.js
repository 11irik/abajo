import React from 'react';
import logo from './logo.svg';
import soundfile from './sound.mp3'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Arriba</p>
                <audio controls>
                    <source src={soundfile} type="audio/mpeg"/>

                </audio>
            </header>
        </div>
    );
}

export default App;
