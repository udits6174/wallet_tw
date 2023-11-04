import React, { useEffect, useState } from "react";
import axios from "axios";
const Txnlist = ({ address }) => {
  const [data, setData] = useState([]);
  const [have, setHave] = useState(false);
  const etherscanApi = import.meta.env.VITE_TEMPLATE_ETHERSCAN_APIKEY;
  const ADD = "0x2F734c10a16126238B768Fb60d51Bc0cD4479bBB";
  const ethUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${ADD}&startblock=0&endblock=999999999&sort=desc&apikey=${etherscanApi}`;

  useEffect(() => {
    axios
      .get(ethUrl)
      .then(function (res) {
        setData(res);
        setHave(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [address]);

  // useEffect(()=>{
  //   console.log("yes")
  //   console.log(data);
  // },data)

  return (
    <>
      {have &&
        data.data.result.map((ele, index) => {
          return (
            <>
            <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
              <div style={{display: "flex", alignItem: "center", justifyContent: "space-between", padding:"50px", width:"50vw"}}>
                <div key={index} style={{}}>{ele.to.slice(0, 10)}...</div>
                <div key={index}>{ele.value}</div>
              </div>
            </div>
            </>
          );
        })}
    </>
  );
};

export default Txnlist;
