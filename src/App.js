import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import React, { useEffect ,useState } from 'react';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  //state
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected  = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('phantom wallet found!');

          const response = await solana.connect();
          console.log('Connected with publick key:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
        }
      } 
    } catch (error) {
      console.log(error);
    }
  }
  const connectWallet = async () => {};

  const renderNotConnectedContainer = () => (
    <button 
    className="cta-button connect-wallet-button" 
    onClick={connectWallet}>
      Connect to Wallet
    </button>
  );
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load',onLoad);
    return () => window.removeEventListener('load', onLoad);
  },[]);

  return (
    <div className="App">
      <div className={walletAddress? 'auth-container' :"container"}>
        <div className="header-container">
          <p className="header">🖼 GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
          {!walletAddress && renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
