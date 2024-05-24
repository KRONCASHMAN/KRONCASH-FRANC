import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import 'react-responsive-modal/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Presale.scss";
import ChatBrowser from "../../assets/webroot/img/index/chart_browser_scaled.svg";
import Clients from "../../assets/webroot/img/index/Clients.png";
import Gloval from "../../assets/webroot/img/index/Group.png";
import LinerChat from "../../assets/webroot/img/index/liner_chat.png";
import KF from "../../assets/webroot/img/index/name-logo.png";
import KCF from "../../assets/webroot/img/index/KCF.png";
import DocImage from "../../assets/webroot/img/index/doc_image.png";
import Doc from "./Doc";
import FaqPage from "./FaqPage";
// load nft assets

const Presale = () => {

  const [open, setOpen] = useState(false);
  const [account, setAccounts] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [price, setPrice] = useState(0);

  const [selectedNFT, setSelectedNFT] = useState();

  useEffect(() => {
    getAssets();
  }, [account]);

  const getAssets = () => {
    // wallet connection part
    if ((window).ethereum) {
      (window).ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          setAccounts(accounts[0])
        })
        .catch((error) => {
          alert(`Something went wrong: ${error}`);
          window.location.href = "/";
        });
    } else {
      alert("Please install Metamask wallet!");
      window.location.href = "/";
    }
  };

  const openModal = (NFT_title) => {
    setPrice(0);
    handleOpen();
    setSelectedNFT(NFT_title);
  }

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [accounts, setAccount] = useState("");

  const [usdtBalance, setUsdtBalance] = useState("");

  useEffect(() => {
    if (accounts) {
      getAssets();
    }
  }, [accounts]);

  const handlePlus1 = () => {
    let c = count1;
    setCount1(c + 1);
  };

  const handleMinus1 = () => {
    let c = count1;
    if (c <= 0) {
      setCount1(0);
      return;
    } else {
      setCount1(c - 1);
    }
  };

  const handlePlus2 = () => {
    let c = count2;
    setCount2(c + 1);
  };

  const handleMinus2 = () => {
    let c = count2;
    if (c <= 0) {
      setCount2(0);
      return;
    } else {
      setCount2(c - 1);
    }
  };
  const PurchaseKCFTokenWithUSDT = async () => {
    // const ethereum = (window).ethereum;
    // const provider = new ethers.providers.Web3Provider(ethereum);
    // const signer = provider.getSigner();
    // const PreSaleContract = new ethers.Contract(PresaleAddr, PreSaleABIJson, signer);
    // const USDTContract = new ethers.Contract(USDTAddr, USDTABIJson, signer);

    // try {
    //   const USDTAmount = count2*0.1; 
    //   const ApproveTx = await USDTContract.approve(PresaleAddr, ethers.utils.parseUnits(String(USDTAmount), 6), {from: accounts});
    //   await ApproveTx.wait();

    //   try {
    //     const BuyToken = await PreSaleContract.purchase_KCF_Tokens_By_USDT(
    //       String(count2),
    //       { from: accounts }
    //     );
    //     await BuyToken.wait();
    //     toast("Success !");
    //   } catch (error) {
    //     console.log(error)
    //   }

    // } catch (error) {
    //   console.log(error)
    // }

  };

  const HandleBuyKF = () => {
    if (count1 < 100) {
      toast.warn('The minimum price is $100 !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (accounts === undefined) {
      toast.warn('Connect Wallet!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

  };

  const HandleBuyKCF = () => {
    if (count2 < 1000) {
      toast.warn('The minimum price is $100 !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    else if (accounts === undefined) {
      toast.warn('Connect Wallet!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    else {
      PurchaseKCFTokenWithUSDT();
    }
  }

  return (
    <div className="main-background">
      <ToastContainer />
      <div className="KronLetIndexContainer">
        <div className="LeftPart">
          <div className="SummaryPart">
            <p>{`The Kronlet Franc is a stablecoin whose value is pegged to the exchange rate of the French franc against the US dollar in 2001, the year before the franc was replaced by the euro. Specifically, 1 KF is initially valued at 6.04 French francs to 1 US dollar, reflecting the franc's strength at that time. However, what makes the Kronlet Franc truly innovative is its built-in inflation adjustment mechanism. The value of 1 KF is dynamically adjusted over time to account for inflation rates, ensuring it maintains its real purchasing power. So while traditional fiat currencies lose value due to inflation, the Kronlet Franc is designed to increase in value proportionally to offset inflation's eroding effects. This provides investors with a stable digital asset that not only preserves but potentially enhances its economic value over time.`}</p>
          </div>
        </div>
        <div className="CenterPart">
          <img className="StyledGlobalImage" src={Gloval} />
        </div>
        <div className="CoinGroup">
          <img className="SummaryImg_avatar" src={KCF} />
          <img className="SummaryImg_avatar" src={KF} />
        </div>
      </div>
      <div className="Container_sell">
        <div className="PresaleSection">
          <div className="PresaleMainCard">
            <div className="CoinGroup">
              <img className="SummaryImg" src={KF} />
              <div className="RoundRightTitle">Presale KF Token</div>
            </div>
            <div className="RoundRightSmTitle">
              $KF 1 - <div className="RoundRightSmcolTitle">$1</div>
            </div>
            <div className="RoundRightSmTitle">
              The Price will be - <div className="RoundRightSmcolTitle">$ {(1 * count1).toFixed(2)}</div>
            </div>
            {((1 * count1) < 100) && (
              <div className="ErrorMessage">
                <div className="ErrorMessageTitle">*required: minimum amount is $100</div>
              </div>)}
            <div className="RoundButtonGroup">
              <div className="CountNumberBox">
                <div className="Countnumberminus" onClick={handleMinus1}>-</div>
                <input className="Countnumber"
                  value={count1}
                  onChange={(e) => setCount1(parseInt(e.target.value))}
                />
                <div className="Countnumberplus" onClick={handlePlus1}>+</div>
              </div>
              <div className="RoundButton" onClick={() => HandleBuyKF()} >BUY {count1} $KF</div>
            </div>
          </div>
          <div className="PresaleMainCard">
            <div className="CoinGroup">
              <img className="SummaryImg" src={KCF} />
              <div className="RoundRightTitle">Presale KCF Token</div>
            </div>
            <div className="RoundRightSmTitle">
              $KCF 1 - <div className="RoundRightSmcolTitle">$0.1</div>
            </div>
            <div className="RoundRightSmTitle">
              The Price will be - <div className="RoundRightSmcolTitle">$ {(0.1 * count2).toFixed(2)}</div>
            </div>
            {((0.1 * count2) < 100) && (<div className="ErrorMessage">
              <div className="ErrorMessageTitle">*required: minimum amount is $100</div>
            </div>)}

            <div className="RoundButtonGroup">
              <div className="CountNumberBox">
                <div className="Countnumberminus" onClick={handleMinus2}>-</div>
                <input className="Countnumber"
                  value={count2}
                  onChange={(e) => setCount2(parseInt(e.target.value))}
                />
                <div className="Countnumberplus" onClick={handlePlus2}>+</div>
              </div>
              <div className="RoundButton" onClick={() => HandleBuyKCF()}>BUY {count2} $KCF</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ClientsPart">
        <img src={Clients} />
      </div>
      <div className="Container">
        <div className="StyledDiv">
          <h1 className="StyledHeader">{`READ OUR DOCUMENTS`}</h1>
          <p className="StyledDescription">
            {`Here is our full docments that help you to understand`}{" "}
            {`deeply about us and our operation`}
          </p>
        </div>
        <div className="MainTips">
          <Doc icon={DocImage} title={`WHITEPAPER`} source={`https://docs.google.com/document/d/10T4c5PsdOE4Da9hQPkfvsBQXStFv8S77DZ3Nm9_OqsU/edit?usp=drive_open&ouid=102120219920992724945`} />
          <Doc icon={DocImage} title={`TOKEN SALE TERMS`} source={`https://docs.google.com/document/d/10T4c5PsdOE4Da9hQPkfvsBQXStFv8S77DZ3Nm9_OqsU/edit?usp=drive_open&ouid=102120219920992724945`} />
          <Doc icon={DocImage} title={`PRESENTATION`} source={`https://www.beautiful.ai/player/-NyIZkwSRQfw_5D7Fqpb`} />
          <Doc icon={DocImage} title={`LIGHTPAPER`} source={`https://docs.google.com/document/d/19pYFmlV6gCB1ubHmspzVSl60Qf1ivmGeOC4AT7Ob0hQ/edit?usp=sharing`} />
        </div>
        <div className="StyledButton">{`Download all`}</div>
      </div>
      <FaqPage />
    </div>
  );
};

export default Presale;
