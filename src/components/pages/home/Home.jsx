import React from 'react';
// @ts-ignore
import Banner from './Banner';
import HowItWork from './HowItWork';
import OurServices from './OurServices';
import OurSponsors from './OurSponsors';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <OurSponsors></OurSponsors>
        </div>
    );
};

export default Home;

