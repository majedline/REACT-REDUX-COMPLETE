import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Todo from "./components/todo/TodoHome";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/todo' component={Todo} />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;