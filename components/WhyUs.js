import styles from '../styles/whyUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

export default function WhyUs(){
    return(
        <div className="sm:bg-[#515db7] ">
            <h1 className="pt-[30vh] text-6xl text-white font-bold text-center font-sans">WHY CHOOSE US ?</h1>
            <div className="lg:flex lg:justify center lg:p-[10vh]  pt-[10vh]">
                <div className="lg:w-[30%]">
                    <div>
                        <p className={styles.myParagraph}><span className="font-bold ">CONNECT YOUR WALLET</span><br/>Use Trust Wallet, Metamask or to connect to the app directly easily.</p>
                        <p className={styles.myParagraph}><span className="font-bold ">RECEIVE YOUR OWN NFTS</span><br/>Invest all your crypto at one place on one platform. Trade fastly and easily.</p>
                        <p className={styles.myParagraph}><span className="font-bold ">CHOOSE YOUR QUANTITY</span><br/>Upload your cryptocurrency and specify a title, description, and price.</p>
                    </div>
                </div>
                <div className="lg:w-[60%] hidden sm:flex justify-center">
                    <img className="rounded-full object-cover"src="/whyUs.jpg" alt="" />
                </div>
                <div className="lg:w-[30%]">
                    <div>
                        <p className={styles.myParagraph}><span className="font-bold ">FINALIZE TRANSACTION</span><br/>Profit from your cryptocurrency by selling it on our marketplace.</p>
                        <p className={styles.myParagraph}><span className="font-bold ">TAKE A MARKET TO SELL</span><br/>Explore the perfect cryptocurrency collections for buying or selling.</p>
                        <p className={styles.myParagraph}><span className="font-bold ">POWER YOUR COLLECTION</span><br/>Experience effortless exploration, investment, and management.</p>
                    </div>
                </div>
            </div>  
        </div>
        
    )
}