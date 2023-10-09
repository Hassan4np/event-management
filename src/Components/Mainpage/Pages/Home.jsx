import React, { useEffect } from 'react';
import Bannar from './Bannar';
import Card from './Card';
import { useLoaderData } from 'react-router-dom';
import OurItem from './OurItem';
import Aboutus from './Aboutus';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    const cards = useLoaderData()
    return (
        <div>
            <Bannar></Bannar>
            <div >
                <h1 className='text-center text-4xl p-5 font-bold' data-aos="flip-left">Out Service</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        cards.map((cards, idx) => <Card key={idx} card={cards}></Card>)
                    }
                </div>
            </div>
            <OurItem></OurItem>
            <Aboutus></Aboutus>

        </div>
    );
};

export default Home;