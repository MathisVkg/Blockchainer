

const APIURLBITCOIN = 'https://api.blockchair.com/bitcoin/stats';
let price = document.getElementById('priceTarget');
let stockBitcoin;
let convertedPriceBitcoin;
let priceBitcoin;


function getBitcoin() {
    fetch(APIURLBITCOIN)
    .then((res) => res.json())
    .then((bitcoin) => {
        stockBitcoin = bitcoin;
        console.log('bitcoin', bitcoin);
        getConvertBitcoin();
        price.innerHTML = priceBitcoin + ' EUR';
    });
}


function getConvertBitcoin() {
    convertedPriceBitcoin = stockBitcoin.data.market_price_usd;
    convertedPriceBitcoin *= currentEur;
    Math.floor(convertedPriceBitcoin * 100) / 100;
    priceBitcoin = convertedPriceBitcoin.toFixed(2);
}

getBitcoin();
