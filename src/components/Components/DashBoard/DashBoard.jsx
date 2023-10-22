import React, { useEffect, useState } from "react";
import {
  ObamaInuCoinAddress,
  ObamaInuCoin_ABI,
  dividendCoinABI,
  dividendCoinAdress,
} from "../../Utils/Contact";

import Web3 from "web3";

export default function DashBoard({ getAddress }) {
 
  const [getAlldata, setgetAlldata] = useState({});
  const [IsLoading, setIsLoading] = useState(false)
  const [date_show, setdate_show] = useState(0)

  // const webSupply = new Web3("https://bsc-mainnet.public.blastapi.io");

  // const Earnings = async () => {
  //   try {
  //     let obj = {
  //       ObamaInuCoin: 0,
  //       BUSD_Paid: 0,
  //       lastClaimTimes: 0,
  //       withdrawableDividendOf: 0,
  //       getNumberOfTokenHolders: 0,
  //       totalDividendsDistributed:0
  //     };
  //     setIsLoading(true)
  //     const web3 = window.web3;  

  //     let contractOf_ObamaInu = new webSupply.eth.Contract(
  //       ObamaInuCoin_ABI,
  //       ObamaInuCoinAddress
  //     );

  //     let contractOf_dividendCoin = new webSupply.eth.Contract(
  //       dividendCoinABI,
  //       dividendCoinAdress
  //     );

  //     //// Your Obama Inu Coin Holdings///////
  //     let ObamaInuCoinBallance = await contractOf_ObamaInu.methods
  //       .balanceOf(getAddress)
  //       .call();
  //     ObamaInuCoinBallance = Number(ObamaInuCoinBallance);
  //     ObamaInuCoinBallance = ObamaInuCoinBallance / 1000000000;
  //     ObamaInuCoinBallance = parseFloat(ObamaInuCoinBallance).toFixed(4);
  //     obj = { ...obj, ObamaInuCoin: ObamaInuCoinBallance };

  //     //----- BUSD Paid----------

  //     let BUSD_Paid = await contractOf_dividendCoin.methods
  //       .withdrawnDividendOf(getAddress)
  //       .call();
  //     BUSD_Paid = Number(BUSD_Paid);
  //     BUSD_Paid = BUSD_Paid / 1000000000000000000;
  //     BUSD_Paid = parseFloat(BUSD_Paid).toFixed(4);
  //     obj = { ...obj, BUSD_Paid: BUSD_Paid };

  //     //-----Last Payout Time---------

  //     let lastClaimTimes = await contractOf_dividendCoin.methods
  //       .lastClaimTimes(getAddress)
  //       .call();
  //       lastClaimTimes = Number(lastClaimTimes);
  //        lastClaimTimes = new Date(lastClaimTimes *1000);
  //        setdate_show(lastClaimTimes.toGMTString())
  //       console.log("totalDividendsDistributed",lastClaimTimes );
        
  //     // obj = { ...obj, lastClaimTimes: lastClaimTimes };

  //     //--------------Payout Loading-------------

  //     let withdrawableDividendOf = await contractOf_dividendCoin.methods
  //       .withdrawableDividendOf(getAddress)
  //       .call();
  //     withdrawableDividendOf = Number(withdrawableDividendOf);
  //     withdrawableDividendOf = withdrawableDividendOf / 1000000000000000000;
  //     withdrawableDividendOf = parseFloat(withdrawableDividendOf).toFixed(4);
  //     obj = { ...obj, withdrawableDividendOf: withdrawableDividendOf };

  //     //----------------Dividend Holders-------------------

  //     let getNumberOfTokenHolders = await contractOf_dividendCoin.methods
  //       .getNumberOfTokenHolders()
  //       .call();
  //     getNumberOfTokenHolders = Number(getNumberOfTokenHolders);


  //     obj = { ...obj, getNumberOfTokenHolders: getNumberOfTokenHolders };



  //     //--------------Total BUSD Paid-----------------
  //     let totalDividendsDistributed = await contractOf_dividendCoin.methods
  //     .totalDividendsDistributed()
  //     .call();
  //   totalDividendsDistributed = Number(totalDividendsDistributed);
  //   totalDividendsDistributed = totalDividendsDistributed / 1000000000000000000;
  //   totalDividendsDistributed = parseFloat(totalDividendsDistributed).toFixed(4);

  //   obj = { ...obj, totalDividendsDistributed: totalDividendsDistributed };



  //     setgetAlldata(obj);
  //     setIsLoading(false)

  //   } catch (e) {
  //     console.log("Erroe while Call Earnings Fuction", e);
  //     setIsLoading(false)

  //   }
  // };

  // useEffect(() => {
  //   if (getAddress !== "") {
  //     Earnings();
      

  //   }
  // }, [getAddress]);

  // console.log("getAlldata", getAlldata.withdrawableDividendOf);
  return (
    <>

    
     
    </>
  );
}
