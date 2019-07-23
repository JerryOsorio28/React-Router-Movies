import React from 'react';
import {Link} from 'react-router-dom'

function Home () {
    return (
        <div class ='Home'>
            <h1>Movie Collection</h1>
            <button><Link to ='/movies'>Watch Here</Link></button>
        </div>
    )
    
};

export default Home;