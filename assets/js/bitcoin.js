

const APIURLBITCOIN = 'https://api.blockchair.com/bitcoin/stats';
let bitcoin = document.getElementById('bitcoinTarget');
let stockBitcoin;
let convertedPriceBitcoin;
let currentEur = 0.84;


function getBitcoin() {
    fetch(APIURLBITCOIN)
    .then((res) => res.json())
    .then((data) => {
        stockBitcoin = data;
        console.log('bitcoin', data);
        getConvertBitcoin()
        writeNamePriceBitcoin();
        writeBlockBitcoin();
        writeBockchainBitcoin();
        writeTransacBitcoin();
    });
}


function writeNamePriceBitcoin() {
    let container = document.createElement('div');
    container.classList.add('square');

    let logo = document.createElement('p');
    logo.innerHTML = '<i class="fab fa-btc"></i>';

    let squareName = document.createElement('div');
    squareName.classList.add('namePrice');

    let name = document.createElement('p');
    name.classList.add('nameCrypto');
    name.innerHTML = 'Bitcoin';

    let price = document.createElement('p');
    price.classList.add('priceCrypto');
    price.innerHTML = '<i class="fas fa-euro-sign"></i>' + Math.round(convertedPriceBitcoin) + ' EUR';

    squareName.appendChild(name);
    squareName.appendChild(price);
    container.appendChild(logo);
    container.appendChild(squareName);
    bitcoin.appendChild(container);
}


function writeBlockBitcoin() {
    let squareName = document.createElement('div');
    squareName.classList.add('blocksInfo');

    let name = document.createElement('p');
    name.classList.add('block');
    name.innerHTML = 'Blocks';

    let value = document.createElement('p');
    value.classList.add('valueBlock');
    value.innerHTML = stockBitcoin.data.blocks;

    squareName.appendChild(name);
    squareName.appendChild(value);
    bitcoin.appendChild(squareName);
}

function writeTransacBitcoin() {
    let squareName = document.createElement('div');
    squareName.classList.add('transacInfo');

    let name = document.createElement('p');
    name.classList.add('transac');
    name.innerHTML = 'Transactions';

    let value = document.createElement('p');
    value.classList.add('valueTransac');
    value.innerHTML = stockBitcoin.data.transactions;

    squareName.appendChild(name);
    squareName.appendChild(value);
    bitcoin.appendChild(squareName);
}

function writeBockchainBitcoin() {
    let squareName = document.createElement('div');
    squareName.classList.add('blockchainSize');

    let name = document.createElement('p');
    name.classList.add('blockSize');
    name.innerHTML = 'Blockchain Size';

    let value = document.createElement('p');
    value.classList.add('valueBlockchainSize');
    value.innerHTML = stockBitcoin.data.blockchain_size;

    squareName.appendChild(name);
    squareName.appendChild(value);
    bitcoin.appendChild(squareName);
}

function getConvertBitcoin() {
    convertedPriceBitcoin = stockBitcoin.data.market_price_usd;
    convertedPriceBitcoin *= currentEur;
}


getBitcoin();