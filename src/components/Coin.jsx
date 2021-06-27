import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin" />
          <h2>{name}</h2>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}</p>
          <p className="coin-volume">{volume.toLocaleString()}</p>
          <p className={`price-change ${priceChange < 0 ? `red` : `green`}`}>
            {priceChange.toFixed(2)}
          </p>
          <p className="coin-marketcap">Mkt Cap: {marketcap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
