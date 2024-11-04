import image1 from '../../assets/image1.png'
import vector from '../../assets/Vector.png'
import Tabs from '../Tabs/Tabs';

const Home = () => {
    return (
        <div>
        <section className='mb-14'>
            <div className="bg-[linear-gradient(123.4deg,_#BD1F17_40.8%,_#A61D13_76.4%,_#8E1B0F_120.69%)] w-full h-[1080px] flex items-center ">
                <div className='flex justify-center items-center'>
                    <div className="flex flex-col  items-center justify-center ">
                        <div className='z-10 absolute left-80'>
                        <h1 className="text-[80px] text-white font-bold uppercase backdrop-blur-sm bg-[#BD1F17]/30 p-1">Taste the authentic <br />
                        Saudi cuisine</h1>
                        <p className='text-white'>Among the best Saudi chefs in the world, serving <br /> you something beyond flavor. </p>
                        <div>
                        <button className="btn btn-warning mt-9">EXPLORE MENU</button>
                        </div>
                        </div>
                    </div>
                    <div className='absolute right-[150px]'>
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
        </div>
    );
};

export default Home;