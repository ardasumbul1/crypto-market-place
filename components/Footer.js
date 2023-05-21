import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div className="lg:flex justify-center bg-white">
            <div className="flex justify-center w-full">
                <img className="w-[200px] lg:w-[400px]" src="/on_chain.jpg" alt="" />
            </div>
           
            <div className="w-full">
                <div className=" flex justify-center items-center pt-[10vh]">
                    <div>
                        <img class="w-[40px] lg:w-[80px] mr-[3vh] ml-[3vh]" src="/facebook.jpg" alt="" />
                    </div>
                    <div >
                        <img class="w-[40px] lg:w-[80px] mr-[3vh] ml-[3vh]" src="/twitter.jpg" alt="" />
                    </div>
                    <div >
                        <img class="w-[40px] lg:w-[80px] mr-[3vh] ml-[3vh]" src="/instagram.jpg" alt="" />
                    </div>
                    <div >
                        <img class="w-[40px] lg:w-[80px] mr-[3vh] ml-[3vh]" src="/linkedin.jpg" alt="" />
                    </div>
                </div>
                <div className='lg:flex justify-center pt-[3vh]'>
                    <p className='text-center font-extrabold text-xl mr-[2vh]'>Privacy</p>
                    <p className='text-center font-extrabold text-xl ml-[2vh]'>Term of Use</p>
                </div>
           

            </div>
            <div className="flex justify-center w-full">
                <img className="w-[200px] lg:w-[400px]" src="/blockchain.jpg" alt="" />
            </div>
        </div>
    )
}