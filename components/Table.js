import React, { useState } from 'react';
import Landing from './Landing';
import Showbar from './Showbar';

export default function Table({ coins}) {
  const [activeTab, setActiveTab] = useState(0);
  const coinsPerPage = 5;
  const totalPages = Math.ceil(coins.length / coinsPerPage);
  const startIndex = activeTab * coinsPerPage;
  const visibleCoins = coins.slice(startIndex, startIndex + coinsPerPage);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="bg-gradient-to-b from-black via-purple-400 to-black ">
    <Landing />
    <div className='flex justify-center text-center text-3xl font-bold text-white mb-[40vh]'>
      <div>
        <img className='w-[150px] h-[150px] m-[3vh]' src={coins[0].image} alt="" />
        <p className='mb-[5px]'>{coins[0].name}</p>
        <p className='text-2xl font-semibold'>${coins[0].current_price}</p>
      </div>
      <div>
        <img className='w-[150px] h-[150px] m-[3vh]' src={coins[1].image} alt="" />
        <p className='mb-[5px]'>{coins[1].name}</p>
        <p className='text-2xl font-semibold'>${coins[1].current_price}</p>
      </div>
      <div>
        <img className='w-[150px] h-[150px] m-[3vh]' src={coins[2].image} alt="" />
        <p className='mb-[5px]'>{coins[2].name}</p>
        <p className='text-2xl font-semibold'>${coins[2].current_price}</p>
      </div>
      <div>
        <img className='w-[150px] h-[150px] m-[3vh]' src={coins[16].image} alt="" />
        <p className='mb-[5px]'>{coins[16].name}</p>
        <p className='text-2xl font-semibold'>${coins[16].current_price}</p>
      </div>
      
    </div>
        
    <div id="table" className="flex justify-center text-[#ffffff]">
      <table className="w-[70%]">
        <thead className="mb-[20px] h-20 ">
          <tr className='text-3xl text-left'>
            <th>Coin</th>
            <th>Value</th>
            <th>Change 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {visibleCoins.map((coin) => (
            <tr key={coin.id} className="border-t-2  text-2xl font-semibold">
              <td>
                <div className="flex items-center p-[1vh]">
                  <img className="w-[10vh]" src={coin.image} alt={coin.name} />
                  <div>
                    <span className="ml-[3vh]">{coin.name}</span>
                  </div>
                </div>
              </td>
              <td>${coin.current_price}</td>
              {coin.price_change_24>0 ? <td className='text-[#1F8A70] '>+{coin.price_change_24} %</td>:<td className='font-bold text-[#E21818]'>{coin.price_change_24} %</td>}
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
