import React, { useState } from 'react';
import Landing from './Landing';
import styles from '../styles/table.module.css';


export default function Table({ coins}) {
  const [activeTab, setActiveTab] = useState(0);
  const coinsPerPage = 10;
  const totalPages = Math.ceil(coins.length / coinsPerPage);
  const startIndex = activeTab * coinsPerPage;
  const visibleCoins = coins.slice(startIndex, startIndex + coinsPerPage);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="sm:bg-gradient-to-b from-black via-purple-400 to-[#515db7] ">
    <Landing />
    <div className='flex justify-center text-center text-3xl font-bold text-white mb-[20vh]'>
      <div>
        <img className={styles.landingImage} src={coins[0].image} alt="" />
        <p className={styles.title}>{coins[0].name}</p>
        <p className={styles.price}>${coins[0].current_price}</p>
      </div>
      <div>
        <img className={styles.landingImage} src={coins[1].image} alt="" />
        <p className={styles.title}>{coins[1].name}</p>
        <p className={styles.price}>${coins[1].current_price}</p>
      </div>
      <div>
        <img className={styles.landingImage} src={coins[2].image} alt="" />
        <p className={styles.title}>{coins[2].name}</p>
        <p className={styles.price}>${coins[2].current_price}</p>
      </div>
      <div>
        <img className={styles.landingImage}  src={coins[16].image} alt="" />
        <p className={styles.title}>{coins[16].name}</p>
        <p className={styles.price}>${coins[16].current_price}</p>
      </div>
      
    </div>
        
    <div id="table" className="flex justify-center text-[#ffffff]">
      <table className="w-[80%]">
        <thead className="mb-[20px] h-20 ">
          <tr className='lg:text-3xl text-left'>
            <th>Coin</th>
            <th>Value</th>
            <th>Change 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {visibleCoins.map((coin) => (
            <tr key={coin.id} className="border-t-2 text-xs lg:text-2xl lg:font-semibold">
              <td>
                <div className="flex items-center lg:p-[1vh]">
                  <img className=" w-[5vh] lg:w-[10vh]" src={coin.image} alt={coin.name} />
                  <div>
                    <span className=" ml-[1vh] lg:ml-[3vh]">{coin.name}</span>
                  </div>
                </div>
              </td>
              <td>${coin.current_price}</td>
              {coin.price_change_24>0 ? <td className='font-semibold  text-[#03C988] '>+{coin.price_change_24}%</td>:<td className='font-semibold text-[#cf304a]'>{coin.price_change_24}%</td>}
              <td>${coin.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
    <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-2 mx-1 rounded-lg w-[4%] text-white font-semibold text-xl ${
                index === activeTab ? 'bg-gray-400' : ''
            }`}
            onClick={() => handleTabChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>
  );
}
