import React from 'react';

import accentureLogo from '../images/accenture-logo.png';
import space from '../images/wp.jpg';

const Home = () => {
    return (
        <div className="space" style={{height: "calc(100vh - 86px)", backgroundSize: "100%", backgroundImage: `url(${space})`}}>
        </div>
    );
}

export default Home;
