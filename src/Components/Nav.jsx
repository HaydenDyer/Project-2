import React from 'react';
import About from './About';
import Artists from './Artists';
import Tracks from './Tracks';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function Nav(props) {
    return (
        <Router>
            <div>
                <nav className='nav'>

                    <Link to='/artists'
                    className='navLink'
                    >
                        <h1>Artists</h1>
                    </Link>

                    <Link to='/tracks'
                    className='navLink'
                    >
                        <h1>Tracks</h1>
                    </Link>

                    <Link to='/'
                    className='navLink'
                    >
                        <h1>About</h1>
                    </Link>
                </nav>
                <main>
                    <Route 
                    exact path='/' 
                    component={About}
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