import Link from "next/link";

export default function Landing(){
    return(
        <div className="text-center lg:p-[20px] lg:mr-[10vh] lg:ml-[10vh] mb-[2vh]">
            <div className="text-center text-[#FFFFFF] lg:text-7xl text-2xl p-[4vh] font-mono">
                <h1>TRACK CRYPTO MARKET AND  DEVELOPMENTS IN BLOCKCHAIN</h1>
            </div>
            <div className="flex justify-center lg:text-xl lg:font-semibold ">
                <button className="bg-[#FFFFFF] sm:h-[50px] lg:p-3 m-2 rounded p-[3px]" type="button"><Link href="#table">SEE THE MARKET</Link></button>
                <button className="border-[1px] border-[#FFFFFF] sm:h-[50px] lg:p-3 m-2 rounded text-[#ffffff] p-[3px]" type="button">VISIT OUR BLOG</button>
            </div>
        </div>
    )
}