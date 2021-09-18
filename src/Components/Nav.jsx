import React from 'react';
import Home from './Home';
import Results from './Results';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function Nav(props) {
    return (
        <Router>

            <div>
                
                <nav className='nav'>

                        <Link to='/home'>
                            <h1>Home</h1>
                        </Link>

                        <Link to='/artists'>
                            <h1>Artists</h1>
                        </Link>

                </nav>

                <main>

                    <Route 
                    path='/home' 
                    component={Home}
                    />

                    <Route 
                    path='/artists' 
                    component={Results}
                    />

                </main>

            </div>

        </Router>
    );
}

export default Nav;