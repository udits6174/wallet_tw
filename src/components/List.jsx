import React from "react";
import send from "../assets/send.svg";
import receive from "../assets/receive.svg";

const List = ({ txnData, have, address }) => {

  return (
    <div className="flex items-center justify-center">
      <div>
        <table className="table-auto w-full">
          <tbody>
            {have &&
              txnData.data.result.map((ele, index) => {
                return (
                  <tr key={index} className="flex justify-between items-center">
                    <div className="w-[100vw] flex flex-row justify-between">
                      <div className="flex flex-row items-center mx-4">
                        {ele.from == address ? (
                          <img src={send} alt="send_btn" className="w-8 h-8 " />
                        ) : (
                          <img
                            src={receive}
                            alt="recieve_btn"
                            className="w-8 h-8 "
                          />
                        )}

                        <div>
                          <button onClick={()=>{
                            window.location.href = `https://etherscan.io/tx/${ele.hash}`;
                          }}>
                            {ele.to.slice(0, 10)}...
                          </button>
                          {ele.txreceipt_status ? (
                            <div className="text-green-600">-Confirmed</div>
                          ) : (
                            <div className="text-red-600">-Failed</div>
                          )}
                        </div>
                      </div>

                      <div className="w-1/2">
                        {(ele.value / 10 ** 18).toFixed(4)} ETH
                      </div>
                    </div>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
