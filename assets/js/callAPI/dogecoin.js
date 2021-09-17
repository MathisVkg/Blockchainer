

const APIURLDOGECOIN = 'https://api.blockchair.com/dogecoin/stats';
let dogecoin = document.getElementById('dogecoinTarget');
let convertedPriceDogecoin;
let priceDogecoin;
let stockDogecoin;
let resultPriceDoge;

function getDogecoin() {
    fetch(APIURLDOGECOIN)
    .then((res) => res.json())
    .then((dogecoin) => {
        stockDogecoin = dogecoin;
        console.log('dogecoin', stockDogecoin);
        getConvertDogecoin()
        writeNamePriceDogecoin();
        writeBlockDogecoin();
        writeBockchainDogecoin();
        writeTransacDogecoin();
    });
}


function writeNamePriceDogecoin() {
    let container = document.createElement('div');
    container.classList.add('square');

    let logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = 'assets/img/dogecoin.svg';

    let squareName = document.createElement('div');
    squareName.classList.add('namePrice');

    let name = document.createElement('p');
    name.classList.add('nameCrypto');
    name.innerHTML = 'Dogecoin';

    let price = document.createElement('p');
    price.classList.add('priceCrypto');
    price.innerHTML = '<i class="fas fa-euro-sign"></i>' + resultPriceDoge + ' EUR';

    squareName.appendChild(name);
    squareName.appendChild(price);
    container.appendChild(logo);
    container.appendChild(squareName);
    dogecoin.appendChild(container);
}


function writeBlockDogecoin() {
    let squareName = document.createElement('div');
    squareName.classList.add('blocksInfo');

    let name = document.createElement('p');
    name.classList.add('block');
    name.innerHTML = 'Blocks';

    let value = document.createElement('p');
    value.classList.add('valueBlock');
    value.innerHTML = stockDogecoin.data.blocks;

    squareName.appendChild(name);
    squareName.appendChild(value);
    dogecoin.appendChild(squareName);
}

function writeTransacDogecoin() {
    let squareName = document.createElement('div');
    squareName.classList.add('transacInfo');

    let name = document.createElement('p');
    name.classList.add('transac');
    name.innerHTML = 'Transactions';

    let value = document.createElement('p');
    value.classList.add('valueTransac');
    value.innerHTML = stockDogecoin.data.transactions;

    squareName.appendChild(name);
    squareName.appendChild(value);
    dogecoin.appendChild(squareName);
}

function writeBockchainDogecoin() {
    let squareName = document.createElement('div');
    squareName.classList.add('blockchainSize');

    let name = document.createElement('p');
    name.classList.add('blockSize');
    name.innerHTML = 'Blockchain Size';

    let value = document.createElement('p');
    value.classList.add('valueBlockchainSize');
    value.innerHTML = stockDogecoin.data.blockchain_size;

    squareName.appendChild(name);
    squareName.appendChild(value);
    dogecoin.appendChild(squareName);
}

function getConvertDogecoin() {
    convertedPriceDogecoin = stockDogecoin.data.market_price_usd;
    convertedPriceDogecoin *= currentEur;
    Math.floor(convertedPriceDogecoin * 100) / 100;
    priceDogecoin = convertedPriceDogecoin.toFixed(2);
    resultPriceDoge = new Intl.NumberFormat().format(priceDogecoin);
}


getDogecoin();
