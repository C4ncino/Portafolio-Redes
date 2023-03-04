import React, {useState} from 'react';
import Home from './home/Home';
import Nabvar from './Navbar';
import Footer from './Footer';
import T1 from './homework/hws1-2/T1';
import T2 from './homework/hws1-2/T2';
import '../styles/normalize.css';
import Homework from './homework/Homework';

const App = () => {
    const [page, setPage] = useState('home');
    const [localPage, setLocalPage] = useState('main');

    return(
        <>
            {localPage === 'main' ? (
                <div className='main'>
                    <Nabvar page={page} setPage={setPage}/>

                    {page === 'home'? (
                        <Home setPage={setPage}/>
                    ):(
                        <Homework setLocalPage={setLocalPage}/>
                    )}

                    <Footer/>
                </div>
            ):(
                <>
                    {localPage === 't1' ? (
                        <T1 setLocalPage={setLocalPage}/>
                    ):(
                        <>
                            {localPage === 't2' ? (
                                <T2 setLocalPage={setLocalPage}/>
                            ):(
                                <></>
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default App;