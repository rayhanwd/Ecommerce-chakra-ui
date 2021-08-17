import React from 'react'
import { Fragment } from 'react';
import Footer from './../components/Footer/Footer';
import Products from './../components/Products/Products';
import Header from './../components/Header/Header';

function Home() {
    return (
        <Fragment>
           <Header/>
           <Products/>
           <Footer/>
        </Fragment>
    )
}

export default Home
