import React from 'react';
import './App.css';
import PageCheckCategory from "./PageCheckCategory/PageCheckCategory";
import PageTextControlNeuron from "./PageControlTextNeuron/PageTextControlNeuron";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PageManualFix from "./PageManualFix/PageManualFix";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/page-text-control-neuron" element={
                        <PageTextControlNeuron/>
                    }/>

                    <Route path="/page-check-category"  element={
                        <PageCheckCategory/>
                    }/>

                    <Route path="/page-manual-fix"  element={
                        <PageManualFix/>
                    }/>

            </Routes>
        </div>
</BrowserRouter>
)
    ;
}

export default App;
