import React from 'react'
import './App.css'
import Header from "./Header/Header";
import Main from "./Main/Main";
import Works from "./Works/Works";
import Skills from "./Skills/Skills";
import ContactReduxForm from "./Contact/Contacts";
import Footer from "./Footer/Footer";


const App = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    };

    return (
        <div className='App'>
                <Header />
                <Main />
                <Works />
                <Skills />
                <ContactReduxForm onSubmit={onSubmit}/>
                <Footer />
            </div>
    )
};

export default App