import React from 'react';
import Bannar from './Bannar';
import Card from './Card';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const cards = useLoaderData()
    return (
        <div>
            <Bannar></Bannar>
            <div>
                <h1 className='text-center text-4xl p-5'>Out Service</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        cards.map((cards, idx) => <Card key={idx} card={cards}></Card>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;