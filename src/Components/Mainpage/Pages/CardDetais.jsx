import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetais = () => {
    const cardss = useLoaderData()
    const {id} = useParams()
    const [card,setCard] = useState({})

    useEffect(()=>{
     const card = cardss.find(card=>card.id===parseInt(id))
     setCard(card)
    },[cardss,id])
    console.log(card)
    return (
        <div>
            <div className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={card.img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {card.price}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {card.name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                       {card.des}
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default CardDetais;