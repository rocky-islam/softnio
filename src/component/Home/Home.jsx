import image1 from '../../assets/image1.png'
import vector from '../../assets/Vector.png'
import FoodItems from '../FoodItems/FoodItems';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Review from '../Review/Review';
import Tabs from '../Tabs/Tabs';

const Home = () => {
    return (
        <div>
        <section className='mb-14'>
            <div className="bg-[linear-gradient(123.4deg,_#BD1F17_40.8%,_#A61D13_76.4%,_#8E1B0F_120.69%)] w-full h-[940px] flex items-center ">
                <div className='flex justify-center items-center w-full'>
                    <div className="flex flex-col  items-center justify-center ">
                        <div className='z-10 absolute lg:left-[275px]'>
                        <h1 className="lg:text-[90px]  text-white font-bold uppercase backdrop-blur-sm bg-[#BD1F17]/30 p-1">Taste the authentic <br />
                        Saudi cuisine</h1>
                        <p className='text-white'>Among the best Saudi chefs in the world, serving <br /> you something beyond flavor. </p>
                        <div>
                        <button className="btn btn-warning mt-9">EXPLORE MENU</button>
                        </div>
                        </div>
                    </div>
                    <div className='absolute right-36 '>
                        <div className='relative'>
                            <div >
                                <img src={image1} alt="" className='rounded-xl'/>
                                <div className='absolute -top-5 -right-5'>
                                    <img src={vector} alt="" />
                                </div>
                                <div className='rounded-full border-2 h-20 w-20 flex items-center justify-center bg-warning font-medium absolute -right-10 -bottom-3'>
                                    <p className='uppercase'>Today <br /> offer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <Tabs></Tabs>        
        </section>
        <section>
            <FoodItems></FoodItems>
        </section>
        <section>
            <Form></Form>
        </section>
        <section>
            <Review></Review>
        </section>
        <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default Home;