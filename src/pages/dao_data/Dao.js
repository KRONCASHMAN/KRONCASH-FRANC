import React, { useState, useEffect } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Dao.scss";
// load nft assets
import BaronNFT from "../../assets/KRONCASH/BaronPro.png";
import ViscountNFT from "../../assets/KRONCASH/ViscountPro.png";
import MarqueeNFT from "../../assets/KRONCASH/MarquessPro.png";
import DukeNFT from "../../assets/KRONCASH/DukePro.png";
import VivienneNFT from "../../assets/KRONCASH/Dao/Vivienne/vivienne1.png"
import MichelineNFT from "../../assets/KRONCASH/Dao/Margott/Margott1.png";
import MediciNFT from "../../assets/KRONCASH/Dao/Medici/Medici1.png";
import IsoldeNFT from "../../assets/KRONCASH/Dao/Isolde/Isolde.png";

// Vivienne Assets
import VivienneNFT1 from "../../assets/KRONCASH/Dao/Vivienne/vivienne1.png";
import VivienneNFT2 from "../../assets/KRONCASH/Dao/Vivienne/vivienne2.png";
import VivienneNFT3 from "../../assets/KRONCASH/Dao/Vivienne/vivienne3.png";
import VivienneNFT4 from "../../assets/KRONCASH/Dao/Vivienne/vivienne4.png";

// Medici Assets
import MediciNFT1 from "../../assets/KRONCASH/Dao/Medici/Medici1.png";
import MediciNFT2 from "../../assets/KRONCASH/Dao/Medici/Medici2.png";
import MediciNFT3 from "../../assets/KRONCASH/Dao/Medici/Medici3.png";

// Baron Assets
import BaronNFT1 from "../../assets/KRONCASH/Dao/Baron/Baron1.png";
import BaronNFT2 from "../../assets/KRONCASH/Dao/Baron/Baron2.png";
import BaronNFT3 from "../../assets/KRONCASH/Dao/Baron/Baron3.png";
import BaronNFT4 from "../../assets/KRONCASH/Dao/Baron/Baron4.png";
import BaronNFT5 from "../../assets/KRONCASH/Dao/Baron/Baron5.png";
import BaronNFT6 from "../../assets/KRONCASH/Dao/Baron/Baron6.png";

// Viscount Assets
import Viscount1 from "../../assets/KRONCASH/Dao/Viscount/Viscount1.png";
import Viscount2 from "../../assets/KRONCASH/Dao/Viscount/Viscount2.png";
import Viscount3 from "../../assets/KRONCASH/Dao/Viscount/Viscount3.png";

// Marquess Assets
import Marquess1 from "../../assets/KRONCASH/Dao/Marquee/Marquee1.png";
import Marquess2 from "../../assets/KRONCASH/Dao/Marquee/Marquee2.png";
import Marquess3 from "../../assets/KRONCASH/Dao/Marquee/Marquee3.png";

// Duke Assets
import Duke1 from "../../assets/KRONCASH/Dao/Duke/Duke1.png";
import Duke2 from "../../assets/KRONCASH/Dao/Duke/Duke2.png";
import Duke3 from "../../assets/KRONCASH/Dao/Duke/Duke3.png";

const Dao = () => {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const [account, setAccounts] = useState("");

  const OpenModal = (nft_title, nft_story) => {
    setTitle(nft_title);
    setStory(nft_story);
    onOpenModal();
  };

  const CloseModal = () => {
    setTitle("");
    setStory("");
    onCloseModal();
  };

  const HandleVote = () => {
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

  useEffect(() => {
    // wallet connection part
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          setAccounts(accounts[0]);
        })
        .catch((error) => {
          alert(`Something went wrong: ${error}`);
          window.location.href = "/";
        });
    } else {
      alert("Please install Metamask wallet!");
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="main-background">
      <ToastContainer />
      <div className="dao_title">Governance Protocol 2.0 Kroncash-France DAO Titles</div>
      <div className="NFT_group">
        <div className="NFT_Container">
          <img className="summary_img" src={BaronNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Baron</div>
            <div className="NFT_price">Price: 500 USDT</div>
          </div>
          <div className="NFT_detail">
            The glorious Baron collection. 3,000 exist, with a tonne of value and utility packed inside, most notably in the 10 KCF tokens each Baron NFT yields per day, everyday.
          </div>
          <button onClick={() => OpenModal("The Mysterious Baron:", "There was a mysterious and feared Baron who lived in a castle in Normandy. Rumors spread that he practiced dark occult rituals and had supernatural powers, though no one really knew the truth.")} className="NFT_rent_btn">View More & Vote Now</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={ViscountNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Viscount</div>
            <div className="NFT_price">Price: 1000 USDT</div>
          </div>
          <div className="NFT_detail">
            The glorious Viscount collection. 1,500 exist, with a tonne of value and utility packed inside, most notably in the 50 KCF tokens each Viscount NFT yields per day, everyday.
          </div>
          <button onClick={() => OpenModal("The Viscount Story:", "The Viscount was a noble lord who ruled over a vast estate with an iron fist, demanding absolute obedience from his peasants and serfs. From his formidable castle, he presided over grand feasts and tournaments, surrounded by wealthy lords and ladies who sought his favor. Despite his opulent lifestyle, the Viscount was bound by duty to provide military service to the King, leading his knights and men-at-arms into battle whenever called upon to defend the realm.")} className="NFT_rent_btn">View More & Vote Now</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={MarqueeNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Marquee</div>
            <div className="NFT_price">Price: 2500 USDT</div>
          </div>
          <div className="NFT_detail">
            The glorious Marquee collection. 750 exist, with a tonne of value and utility packed inside, most notably in the 100 KCF tokens each Marquee NFT yields per day, everyday.
          </div>
          <button onClick={() => OpenModal("Marquess Story:", "A Marquess was a nobleman ranking above an Earl and below a Duke in the British peerage system. As a prestigious member of the aristocracy, a Marquess held vast lands and wealth passed down through generations. With their elevated status, Marquesses wielded significant power and influence, often serving as advisors to the monarch.")} className="NFT_rent_btn">View More & Vote Now</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={DukeNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Duke</div>
            <div className="NFT_price">Price: 5000 USDT</div>
          </div>
          <div className="NFT_detail">
            The glorious Duke collection. 300 exist, with a tonne of value and utility packed inside, most notably in the 200 KCF tokens each Duke NFT yields per day, everyday.
          </div>
          <button onClick={() => OpenModal("Duke Story:", "A Duke was the highest rank in the British peerage system, outranked only by the monarch. Dukes possessed immense wealth, lands, and power over their territories. As members of the royal court, Dukes served as close advisors to the King or Queen and played influential roles in government affairs.")} className="NFT_rent_btn">View More & Vote Now</button>
        </div>
      </div>
      <div className="NFT_group">
        <div className="NFT_Container">
          <img className="summary_img" src={VivienneNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Princess Vivienne</div>
            <div className="NFT_price">Price: 0.5 ETH</div>
          </div>
          <div className="NFT_detail">
            Here is amazing story!
            <br />
            If you want to read more about Princess Vivienne of Bordeaux, please click the View More & Vote Now button.
          </div>
          <button onClick={() => OpenModal("Princess Vivienne of Bordeaux:", "Princess Vivienne of Bordeaux, the enchanting guardian of the region's lush vineyards and historic chateaux, longed for a noble suitor to share her life and reign. With a kingdom alliance at the incredible deal 0.5 ETH, she awaits the arrival of a courageous and honorable Noble to fulfill her dreams of love and companionship.")} className="NFT_rent_btn">View More & Vote Now</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={MichelineNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Princess Micheline</div>
            <div className="NFT_price">Price: 0.6 ETH</div>
          </div>
          <div className="NFT_detail">
            Here is amazing story!
            <br />
            If you want to read more about Princess Micheline, please click the View More & Vote Now button.
          </div>
          <button onClick={() => OpenModal("Princess Micheline of Normandy: The Soldier's Muse 0.6 ETH", "Princess Micheline de Normandy, a fierce and noble guardian of the region's historic battlefields and coastal cliffs, held a deep admiration for the bravery of soldiers. Known for her unwavering support and affection for those who served, she cherished the tales of valor and courage, always ready to welcome a hero into her heart.")} className="NFT_rent_btn">View More & Vote Now</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={MediciNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Princess Medici</div>
            <div className="NFT_price">Price: 0.3 ETH</div>
          </div>
          <div className="NFT_detail">
            Here is amazing story!
            <br />
            If you want to read more about Princess Catherine Medici, please click the View More & Vote Now button.
          </div>
          <button onClick={() => OpenModal("Princess Catherine Medici of Burgundy: The Renaissance Jewel", "Princess Catherine Medici of Burgundy, a patroness of the arts and a lover of Renaissance beauty, ruled over the rolling hills and prestigious vineyards of her region.Available title for 0.3 ETH, she seeks a kindred spirit who shares her passion for art, culture, and the timeless elegance of Burgundy.")} className="NFT_rent_btn">View More & Vote Now</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={IsoldeNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Princess Isolde</div>
            <div className="NFT_price">Price: 0.1 ETH</div>
          </div>
          <div className="NFT_detail">
            Here is amazing story!
            <br />
            <br />
            If you want to read more about Princess Isolde, please click the View More & Vote Now button.
          </div>
          <button onClick={() => OpenModal("Princess Isolde of Rainosek: The Enchanted Dreamer", "Princess Isolde of Rainosek, a mystical and serene land nestled within the heart of France, is known for her ethereal beauty and gentle spirit. Ruling over the lush forests and shimmering lakes of Rainosek, she dreams of a love as enchanting and magical as her beloved homeland, waiting for the one who will share her realm and heart. Amazing price of 0.1 ETH")} className="NFT_rent_btn">View More & Vote Now</button>
        </div>
      </div>
      <Modal open={open} onClose={CloseModal} center>
        <div className="Vote_container">
          <div className="Vote_modal">{title}</div>
          {title == "Duke Story:" && (
            <div className="Vote_nft_picture_group">
              <img className="Vote_picture" src={Duke1} alt="" />
              <img className="Vote_picture" src={Duke2} alt="" />
              <img className="Vote_picture" src={Duke3} alt="" />
            </div>
          )}
          {title == "Marquess Story:" && (
            <div className="Vote_nft_picture_group">
              <img className="Vote_picture" src={Marquess1} alt="" />
              <img className="Vote_picture" src={Marquess2} alt="" />
              <img className="Vote_picture" src={Marquess3} alt="" />
            </div>
          )}
          {title == "The Viscount Story:" && (
            <div className="Vote_nft_picture_group">
              <img className="Vote_picture" src={Viscount1} alt="" />
              <img className="Vote_picture" src={Viscount2} alt="" />
              <img className="Vote_picture" src={Viscount3} alt="" />
            </div>
          )}
          {title == "The Mysterious Baron:" && (
            <div className="Vote_nft_picture_group">
              <img className="Vote_picture" src={BaronNFT1} alt="" />
              <img className="Vote_picture" src={BaronNFT2} alt="" />
              <img className="Vote_picture" src={BaronNFT3} alt="" />
              <img className="Vote_picture" src={BaronNFT4} alt="" />
              <img className="Vote_picture" src={BaronNFT5} alt="" />
              <img className="Vote_picture" src={BaronNFT6} alt="" />
            </div>
          )}
          {title == "Princess Vivienne of Bordeaux:" && (
            <div className="Vote_nft_picture_group">
              <img className="Vote_picture" src={VivienneNFT1} alt="" />
              <img className="Vote_picture" src={VivienneNFT2} alt="" />
              <img className="Vote_picture" src={VivienneNFT3} alt="" />
              <img className="Vote_picture" src={VivienneNFT4} alt="" />
            </div>
          )}
          {title == "Princess Micheline of Normandy: The Soldier's Muse 0.6 ETH" && (
            <div className="Vote_nft_picture_group">
              <img className="Vote_picture" src={MichelineNFT} alt="" />
            </div>
          )}
          {title == "Princess Catherine Medici of Burgundy: The Renaissance Jewel" && (
            <div className="Vote_nft_picture_group">
              <img className="Vote_picture" src={MediciNFT1} alt="" />
              <img className="Vote_picture" src={MediciNFT2} alt="" />
              <img className="Vote_picture" src={MediciNFT3} alt="" />
            </div>
          )}
          {title == "Princess Isolde of Rainosek: The Enchanted Dreamer" && (
            <div className="Vote_nft_picture_group">
              <img className="Vote_picture" src={IsoldeNFT} alt="" />
            </div>
          )}
          <div className="Vote_story">{story}</div>
          <button onClick={() => HandleVote()} className="NFT_rent_btn">Vote Now</button>
        </div>
      </Modal>
    </div>
  );
};

export default Dao;
