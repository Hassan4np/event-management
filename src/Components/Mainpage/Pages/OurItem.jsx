
import book from "./../../../assets/books.jpg"
import charity from "./../../../assets/Charity Gala party.jpg"
import dance from "./../../../assets/Danceparty.jpg"
import sport from "./../../../assets/sports party.jpg"
const OurItem = () => {
    return (
        <div>
            <h1 className="text-center text-4xl p-8 font-bold">Our Spcial item</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="border ">
                    <img src={book} alt="" />
                    <p className="text-center text-xl font-medium mt-2 p-3 ">Book party</p>
                </div>
                <div className="border">
                    <img src={charity} alt="" />
                    <p  className="text-center text-xl font-medium mt-2 p-3 ">Charity party</p>
                </div>
                <div className="border">
                    <img src={dance} alt="" />
                    <p  className="text-center text-xl font-medium mt-2 p-3 ">Dance party</p>
                </div>
                <div className="border">
                    <img src={sport} alt="" />
                    <p  className="text-center text-xl font-medium mt-2 p-3 ">Sport patry</p>
                </div>
            </div>
        </div>
    );
};

export default OurItem;