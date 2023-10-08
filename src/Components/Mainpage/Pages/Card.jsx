import { Link, NavLink } from "react-router-dom";


const Card = ({card}) => {
   const {name,id,img,des,price} = card;
    return (
        <div className="mt-5">
            <div className=" rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border rounded-xl">
                <div className="rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={img}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h4>

                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                    {des.length>200 ? <p>{des.slice(0,100)}<Link className="text-green-400 font-bold text-lg" to={`/cardde/${id}`}>See more..</Link></p>:<p>{des}</p>}
                    </p>
                    <p className="text-xl"> Price: {price}</p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                        <div
                            className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal btn-sm text-white focus:outline-none">
                            <NavLink to={`/cardde/${id}`}>destails</NavLink>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;