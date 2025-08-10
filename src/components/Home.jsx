import React from 'react';
import FeaturedPackage from '../pages/FeaturedPackage';
import Banner1 from './Banner1';
import TopDestination from '../pages/TopDestination';
import Reviews from '../pages/Reviews';
import Partners from '../pages/Partners';

const Home = () => {
    return (
        <>
        <Banner1></Banner1>
         <TopDestination></TopDestination>
    <FeaturedPackage></FeaturedPackage>
    <Partners></Partners>
   
    <Reviews></Reviews>
    
        </>
    );
};

export default Home;