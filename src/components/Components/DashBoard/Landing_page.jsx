import React, { useEffect, useState } from 'react'
import {
    ObamaInuCoinAddress,
    ObamaInuCoin_ABI,
    dividendCoinABI,
    dividendCoinAdress,
  } from "../../Utils/Contact";
import { loadWeb3 } from '../apis/api';


  

export default function Landing_page() {
    const [getAlldata, setgetAlldata] = useState({});
    const [IsLoading, setIsLoading] = useState(false)
    const [date_show, setdate_show] = useState(0)

//   const webSupply = new Web3("https://bsc-mainnet.public.blastapi.io");

// useEffect(() => {
//     const connect=async()=>{
//         let acc= await loadWeb3()
//         console.log("Acc",acc);
//     }
//     connect()

// }, [])

  
  return (
    <div>
          {
         IsLoading === true ? <>
         
         <div className="d-flex justify-center" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <img src="./Assets/images/trumpcoin-dtc.a9b07609.png" width="40%" />
         </div>
          </>

         :
         <>
          <main className="h-full overflow-y-auto">
        <div className="container grid px-6 mx-auto">
          <div className="pb-10">
            <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 text-3xl">
              Obama Inu Coin Earnings Manager
            </h1>
            <div className="hidden lg:block">
            {/* {getAddress===""?"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple":"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple bg_box"} */}
              <span className="">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {/* <span>{getAddress==="" ? "Please enter your address above" :getAddress} </span> */}
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Obama Inu Coin <span>→</span>
                </a>
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-md text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Your Obama Inu Coin Holdings
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      {getAlldata.ObamaInuCoin} Obama Inu Coin{" "}
                      <span className="italic font-light text-md text-green-400">
                        {" "}
                        ~$0.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-md text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      BUSD Paid
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      <span className="text-yellow-300">
                        {getAlldata.BUSD_Paid} BUSD
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-md text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Last Payout Time
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      {/* Never */}
                      {date_show}
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-md text-yellow-500 dark:text-yellow-100 bg-yellow-100 dark:bg-yellow-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Payout Loading
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      <span className="text-yellow-300">Processing</span> |{" "}
                      {getAlldata.withdrawableDividendOf}$
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-md text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Token Price
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      Comming Soon
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-md text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Dividend Holders
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      {getAlldata.getNumberOfTokenHolders}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-md text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Your dividend %
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      ~(0.0000%)
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-md text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Obama Inu Coin Burned
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      ~(0.0000%)
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 col-span-2">
                <div className="p-4 flex flex-col text-center items-center">
                  <img
                    className="w-32 h-32 mb-4 mt-4"
                    alt="Obama Inu Coin-reward-token"
                    src="./Assets/images/BUSD.png"
                  />
                  <p className="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">
                    Total BUSD Paid To Obama Inu Coin Holders
                  </p>
                  <br />
                  <p className="text-green-400 dark:text-green-400 text-4xl md:text-6xl text-center mb-8">
                    {getAlldata.totalDividendsDistributed} <span className="text-yellow-300">BUSD</span>
                    <br />
                  </p>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 col-span-2">
                <div className="p-4 flex flex-col text-center items-center">
                  <p className="text-gray-600 dark:text-gray-400 text-xl text-center -mt-2">
                    Estimations are based on a default of the last 24h of
                    trading volume
                    <br />
                    Change the volume to predict earnings based on other volume
                    figures
                    <br />
                    Trading Volume ={" "}
                    <input className="text-black" defaultValue="0" /> $
                  </p>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 col-span-2 lg:col-span-1">
                <div className="p-4 flex flex-col text-center items-center">
                  <img
                    alt="rewards"
                    className="w-32 h-32 mb-4 mt-4"
                    src="./Assets/images/money.d301ec34.png"
                  />
                  <p className="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">
                    Your 0 Obama Inu Coin Earns:
                  </p>
                  <br />
                  <div className="flex">
                    <p className="text-green-400 dark:text-green-400 text-2xl text-center">
                      <span className="text-yellow-300">NaN BUSD</span>
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">
                      Per Day
                    </span>
                  </div>
                  <div className="flex">
                    <p className="text-green-400 dark:text-green-400 text-2xl text-center">
                      <span className="text-yellow-300">NaN BUSD</span>{" "}
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">
                      Per Week
                    </span>
                  </div>
                  <div className="flex">
                    <p className="text-green-400 dark:text-green-400 text-2xl text-center">
                      <span className="text-yellow-300">NaN BUSD</span>
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">
                      Per Month
                    </span>
                  </div>
                  <div className="flex">
                    <p className="text-green-400 dark:text-green-400 text-2xl text-center">
                      <span className="text-yellow-300">NaN BUSD</span>
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">
                      Per Year
                    </span>
                  </div>
                  <br />
                  {/* <p className="text-gray-600 dark:text-gray-400 text-xl text-center -mt-2">
                    Dynamic estimations based on trading volume of $5,594
                  </p> */}
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800 col-span-2 lg:col-span-1">
                <div className="p-4 flex flex-col text-center items-center">
                  <img
                    alt="rewards"
                    className="w-32 h-32 mb-4 mt-4"
                    src="./Assets/images/money.d301ec34.png"
                  />
                  <p className="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">
                    By Reinvesting Dividends Every Day, Your 0 Obama Inu Coin
                    Becomes:
                  </p>
                  <br />
                  <div className="flex">
                    <p className="text-green-400 dark:text-green-400 text-2xl text-center">
                      <span className="text-yellow-300">
                        0 Obama Inu Coin <br />
                      </span>{" "}
                      (0x Earnings)
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1">
                      In a Week
                    </span>
                  </div>
                  <div className="flex">
                    <p className="text-green-400 dark:text-green-400 text-2xl text-center">
                      <span className="text-yellow-300">
                        0 Obama Inu Coin <br />
                      </span>{" "}
                      (0x Earnings)
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1">
                      In a Month
                    </span>
                  </div>
                  <div className="flex">
                    <p className="text-green-400 dark:text-green-400 text-2xl text-center">
                      <span className="text-yellow-300">
                        0 Obama Inu Coin <br />
                      </span>{" "}
                      (0x Earnings)
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1">
                      In 6 Months
                    </span>
                  </div>
                  <div className="flex">
                    <p className="text-green-400 dark:text-green-400 text-2xl text-center">
                      <span className="text-yellow-300">
                        0 Obama Inu Coin <br />
                      </span>{" "}
                      (0x Earnings)
                    </p>
                    <span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-1">
                      In 1 Year
                    </span>
                  </div>
                  <br />
                  {/* <p className="text-gray-600 dark:text-gray-400 text-xl text-center -mt-2">
                    Estimations are based on current $Obama Inu Coin price
                    ($0.00000002603)
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
         </>
      }
    </div>
  )
}
