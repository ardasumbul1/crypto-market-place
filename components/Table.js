import React, { useState } from 'react';
import Landing from './Landing';
import Showbar from './Showbar';

export default function Table({ coins, fourcoins }) {
  const [activeTab, setActiveTab] = useState(0);
  const coinsPerPage = 8;
  const totalPages = Math.ceil(coins.length / coinsPerPage);
  const startIndex = activeTab * coinsPerPage;
  const visibleCoins = coins.slice(startIndex, startIndex + coinsPerPage);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="bg-gradient-to-b from-black to-purple-500 to-pink-500 ">
    <Landing />
    <Showbar coins={fourcoins} />
        
    <div id="table" className="flex justify-center text-[#ffffff]">
      <table className="w-[50%]">
        <thead className="mb-[20px] h-20 ">
          <tr className='text-3xl text-left'>
            <th>Coin</th>
            <th>Value</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {visibleCoins.map((coin) => (
            <tr key={coin.id} className="border-t-2  text-2xl">
              <td>
                <div className="flex items-center p-[1vh]">
                  <img className="w-[10vh]" src={coin.image} alt={coin.name} />
                  <div>
                    <span className="ml-[3vh]">{coin.name}</span>
                  </div>
                </div>
              </td>
              <td>${coin.current_price}</td>
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
