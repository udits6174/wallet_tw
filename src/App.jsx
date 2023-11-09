import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import "./App.css"
import Txnlist from "./components/Txnlist";
export default function Home() {

  const userAddress = useAddress();

  return (
    <div className="px-2">

    <div className="">

    <div className="">
      <h1 className="title py-5">
        Wallet
        <span className="gradient-text-0">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            tw.
          </a>
        </span>
      </h1>
      </div>

      <div className='flex items-center justify-center pb-4'>
        <ConnectWallet theme={"dark"} modalSize={"compact"} />
      </div>

      <div className="flex items-center justify-center">
      <div>
      {userAddress &&
        <Txnlist address={userAddress} />
      }
      
      </div>
      </div>

</div>
    </div>
  );
}
