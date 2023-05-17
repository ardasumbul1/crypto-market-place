import styles from "../styles/join.module.css"

export default function Join(){
    return(
        <div >
            <div id="join" className="text-center text-white sm:bg-gradient-to-b from-[#515db7] via-purple-500 to-[#ffffff]">
                <div className="text-6xl font-bold mb-[10vh] pt-[20vh]">
                    <h1>JOIN OUR</h1> 
                    <h1>DISCORD AND BLOG</h1>
                    <p className="text-4xl font-semibold mt-[5vh]">Join our community and start to learn </p>
                </div>
         
                <div className="lg:flex lg:justify-center lg:items-center text-xl font-semibold pb-[20vh]">
                    <button className={styles.button}type="button">DISCORD</button>
                    <button className={styles.button} type="button">BLOG</button>
                </div>
            </div>
        </div>
    )
}