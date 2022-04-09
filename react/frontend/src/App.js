import React from 'react';
import './App.css';
import PageCheckCategory from "./PageCheckCategory/PageCheckCategory";
import PageTextControlNeuron from "./PageControlTextNeuron/PageTextControlNeuron";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/text-control-neuron" element={
                        <PageTextControlNeuron/>
                    }/>

                    <Route path="/page-check-category"  element={
                        <PageCheckCategory/>
                    }/>

            </Routes>
        </div>
</BrowserRouter>
)
    ;
}

export default App;
