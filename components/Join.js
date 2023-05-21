import styles from "../styles/join.module.css"

export default function Join(){
    return(
        <div >
            <div id="join" className="text-center text-white sm:bg-gradient-to-b from-[#4551a5] via-purple-500 to-[#ffffff]">
                <div className="lg:text-6xl text-2xl font-bold mb-[10vh] pt-[20vh]">
                    <h1>JOIN OUR</h1> 
                    <h1>DISCORD AND BLOG</h1>
                    <p className="lg:text-4xl font-semibold mt-[5vh]">Join our community and start to learn </p>
                </div>
         
                <div className="lg:flex lg:justify-center lg:items-center lg:text-xl font-semibold pb-[20vh]">
                    <button className={styles.button}type="button">DISCORD</button>
                    <button className={styles.button} type="button">BLOG</button>
                </div>
            </div>
        </div>
    )
}