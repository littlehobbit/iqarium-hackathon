import React from 'react';
import './App.css';
import PageCheckCategory from "./PageCheckCategory/PageCheckCategory";
import PageTextControlNeuron from "./PageControlTextNeuron/PageTextControlNeuron";
import PageUserForm from "./PageUserForm/PageUserForm";
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

                    <Route path="/page-user-form"  element={
                        <PageUserForm />
                    }/>

            </Routes>
        </div>
</BrowserRouter>
)
    ;
}

export default App;
