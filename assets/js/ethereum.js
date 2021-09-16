

const APIURLETHEREUM = 'https://api.blockchair.com/ethereum/stats';
let ethereum = document.getElementById('ethereumTarget');
let stockEthereum;
let convertedPriceEthereum;
let priceEther;


function getEthereum() {
    fetch(APIURLETHEREUM)
    .then((res) => res.json())
    .then((ethereum) => {
        stockEthereum = ethereum;
        console.log('ethereum', stockEthereum);
        getConvertEther()
        writeNamePriceEther();
        writeBlockEther();
        writeBockchainEther();
        writeTransacEther();
    });
}


function writeNamePriceEther() {
    let container = document.createElement('div');
    container.classList.add('square');

    let logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = 'assets/img/ethereum.svg';

    let squareName = document.createElement('div');
    squareName.classList.add('namePrice');

    let name = document.createElement('p');
    name.classList.add('nameCrypto');
    name.innerHTML = 'Ethereum';

    let price = document.createElement('p');
    price.classList.add('priceCrypto');
    price.innerHTML = '<i class="fas fa-euro-sign"></i>' + priceEther + ' EUR';

    squareName.appendChild(name);
    squareName.appendChild(price);
    container.appendChild(logo);
    container.appendChild(squareName);
    ethereum.appendChild(container);
}


function writeBlockEther() {
    let squareName = document.createElement('div');
    squareName.classList.add('blocksInfo');

    let name = document.createElement('p');
    name.classList.add('block');
    name.innerHTML = 'Blocks';

    let value = document.createElement('p');
    value.classList.add('valueBlock');
    value.innerHTML = stockEthereum.data.blocks;

    squareName.appendChild(name);
    squareName.appendChild(value);
    ethereum.appendChild(squareName);
}

function writeTransacEther() {
    let squareName = document.createElement('div');
    squareName.classList.add('transacInfo');

    let name = document.createElement('p');
    name.classList.add('transac');
    name.innerHTML = 'Transactions';

    let value = document.createElement('p');
    value.classList.add('valueTransac');
    value.innerHTML = stockEthereum.data.transactions;

    squareName.appendChild(name);
    squareName.appendChild(value);
    ethereum.appendChild(squareName);
}

function writeBockchainEther() {
    let squareName = document.createElement('div');
    squareName.classList.add('blockchainSize');

    let name = document.createElement('p');
    name.classList.add('blockSize');
    name.innerHTML = 'Blockchain Size';

    let value = document.createElement('p');
    value.classList.add('valueBlockchainSize');
    value.innerHTML = stockEthereum.data.blockchain_size;

    squareName.appendChild(name);
    squareName.appendChild(value);
    ethereum.appendChild(squareName);
}

function getConvertEther() {
    convertedPriceEthereum = stockEthereum.data.market_price_usd;
    convertedPriceEthereum *= currentEur;
    Math.floor(convertedPriceEthereum * 100) / 100;
    priceEther = convertedPriceEthereum.toFixed(2);
}


getEthereum();