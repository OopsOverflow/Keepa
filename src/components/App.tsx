import React from 'react';
import './App.css';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes"

function App() {
    return (
        <div className="App">
            <Header />
            {notes.map(item => (
                <Note
                    key = {item.key}
                    title={item.title}
                    content={item.content}
                />
            ))}
            <Footer/>
        </div>
    );
}

export default App;
