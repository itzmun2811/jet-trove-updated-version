import React from 'react';
import FeaturedPackage from '../pages/FeaturedPackage';
import Banner1 from './Banner1';
import TopDestination from '../pages/TopDestination';
import Reviews from '../pages/Reviews';

const Home = () => {
    return (
        <>
        <Banner1></Banner1>
       
    <FeaturedPackage></FeaturedPackage>
     <TopDestination></TopDestination>
    <Reviews></Reviews>
    
        </>
    );
};

export default Home;