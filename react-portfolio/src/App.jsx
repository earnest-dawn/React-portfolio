import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Project from './pages/Project';

function App() {
    const [page, setPage] = useState('Home');

    function displayPage() {
        if (page === 'Home') {
            return <About />;
        } else if (page === 'projects') {
            return <Project />;
        } else if (page ===)
    }

    return (
        <>
            <Header setPage={setPage} />
            {displayPage()}
        </>
    );
}

export default App;
