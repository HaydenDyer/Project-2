import React from 'react';
import Home from './Home';
import Artists from './Artists';
import Tracks from './Tracks';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function Nav(props) {
    return (
        <Router>
            <div>
                <nav className='nav'>

                        <Link to='/home'
                        className='link'
                        >
                            <h1>Home</h1>
                        </Link>

                        <Link to='/artists'
                        className='link'
                        >
                            <h1>Artists</h1>
                        </Link>

                        <Link to='/tracks'
                        className='link'
                        >
                            <h1>Tracks</h1>
                        </Link>
                </nav>
                <main>
                    <Route 
                    path='/home' 
                    component={Home}
                    />
                    <Route 
                    path='/artists' 
                    component={Artists}
                    />
                    <Route 
                    path="/tracks/" 
                    component={Tracks} 
                    />
                </main>
            </div>
        </Router>
    );
}

export default Nav;