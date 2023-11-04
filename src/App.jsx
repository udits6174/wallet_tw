import { ConnectWallet, useAddress} from "@thirdweb-dev/react";
import "./styles/Home.css";
import Txnlist from './pages/Txnlist'
import { useEffect } from "react";
export default function Home() {
  const userAddress = useAddress();

  useEffect(()=>{

    
  },[userAddress])
  
  return (
        <>
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                wallet.
              </a>
            </span>
          </h1>
          <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>

          <ConnectWallet
            theme={"dark"}
            modalSize={"compact"}
          />
          </div>

          <Txnlist address={userAddress}/>
        </>
  );
}
