
import { NavLink } from 'react-router-dom';
const Errorpage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-center text-2xl font-bold mt-[100px] mb-10'>Opps data not fount</h1>
            <NavLink t="/"><button className='btn btn-success text-center'>Go home</button></NavLink>
        </div>
    );
};

export default Errorpage;