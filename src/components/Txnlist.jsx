import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

const Txnlist = ({ address }) => {
  const [txnData, setTxnData] = useState([]);
  const [have, setHave] = useState(false);
  
  //const etherscanApi = import.meta.env.VITE_TEMPLATE_ETHERSCAN_APIKEY;
  const etherscanApi2 = import.meta.env.VITE_TEMPLATE_ETHERSCAN_APIKEY2;
  //const dummyAddress = "0xb807e910628d370551413857E7516452899cF499";
  const ethUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=999999999&sort=desc&apikey=${etherscanApi2}`;

  useEffect(() => {
    axios
      .get(ethUrl)
      .then(function (res) {
        setTxnData(res);
        console.log(res);
        setHave(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [address]);

  return (
    <List txnData={txnData} have={have} address={address}/>
  );
};

export default Txnlist;
