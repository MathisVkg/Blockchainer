

const APIURLBITCOIN = 'https://api.blockchair.com/bitcoin/stats';
let price = document.getElementById('priceTarget');
let containerOne = document.getElementById('containerTargetOne');
let moon = document.getElementById('darkModeMoon');
let title = document.getElementById('title');
let menu = document.getElementById('menuTarget');
let menuClose = document.getElementById('menuClose');
let nav = document.getElementById('navTarget');
let currentEur = 0.85;
let stockBitcoin;
let convertedPriceBitcoin;
let priceBitcoin;
let resultBeginPrice;
let resultEndPrice;
let state = 1;


moon.addEventListener('click', () => {
    setTimeout(function(){
        if(state === 1) {
            getColorOn();
            state = 2;
        } else {
            getColorOff();
            state = 1;
        }

    }, 100);
})


menu.addEventListener('click', () => {
    nav.classList.remove('off');
    nav.classList.add('on');
})
menuClose.addEventListener('click', () => {
    nav.classList.remove('on');
    nav.classList.add('off');
})
function getColorOn() {
    document.body.style.backgroundColor = '#303030';
    title.style.color = 'white';
    moon.classList.remove('blackHover');
    moon.classList.add('whiteHover');

    menu.classList.remove('blackHover');
    menu.classList.add('whiteHover');

    nav.classList.remove('navDark');
    nav.classList.add('navWhite');
}
function getColorOff() {
    document.body.style.backgroundColor = 'white';
    title.style.color = 'black';
    moon.classList.remove('whiteHover');
    moon.classList.add('blackHover');

    menu.classList.remove('whiteHover');
    menu.classList.add('blackHover');

    nav.classList.remove('navWhite');
    nav.classList.add('navDark');
}





function getBitcoin() {
    fetch(APIURLBITCOIN)
    .then((res) => res.json())
    .then((bitcoin) => {
        stockBitcoin = bitcoin;
        console.log('bitcoin', bitcoin);
        getConvertBitcoin();
        getBlockchainSize();
        getNodes();
        getLastestBlock();
        getDifficulty();
        getNextDifficulty();
        // price.innerHTML = priceBitcoin + ' EUR';
        price.innerHTML = resultBeginPrice + ' ' + resultEndPrice + ' EUR';
    });
}


function getConvertBitcoin() {
    convertedPriceBitcoin = stockBitcoin.data.market_price_usd;
    convertedPriceBitcoin *= currentEur;
    Math.floor(convertedPriceBitcoin * 100) / 100;
    priceBitcoin = convertedPriceBitcoin.toFixed(2);
    let stockString = priceBitcoin.toString();
    resultBeginPrice = Number(stockString.slice(0, 2));
    resultEndPrice = Number(stockString.slice(2, 10));
}

function getBlockchainSize() {
    let block = document.createElement('p');
    block.classList.add('blockSize');
    let stockSize = stockBitcoin.data.blockchain_size;
    let stockString = stockSize.toString();
    let resultBegin = Number(stockString.slice(0, 2));
    let resultEnd = Number(stockString.slice(2, 5));
    
    block.innerHTML = resultBegin + '.' + resultEnd + ' GB';
    containerOne.appendChild(block);
}

function getNodes() {
    let node = document.createElement('p');
    node.classList.add('node');
    let stockSize = stockBitcoin.data.nodes;
    let stockString = stockSize.toString();
    let resultBegin = Number(stockString.slice(0, 1));
    let resultEnd = Number(stockString.slice(1, 4));
    node.innerHTML = resultBegin + ',' + resultEnd;

    containerOne.appendChild(node);
}

function getLastestBlock() {
    let lastestBlock = document.createElement('p');
    lastestBlock.classList.add('lastestBlock');
    let stockSize = stockBitcoin.data.blocks;
    let stockString = stockSize.toString();
    let resultBegin = Number(stockString.slice(0, 3));
    let resultEnd = Number(stockString.slice(3, 6));

    lastestBlock.innerHTML = resultBegin + ',' + resultEnd;
    containerOne.appendChild(lastestBlock);
}

function getDifficulty() {
    let difficulty = document.createElement('p');
    difficulty.classList.add('difficulty');
    let stockSize = stockBitcoin.data.difficulty;
    let stockString = stockSize.toString();
    let result1 = Number(stockString.slice(0, 2));
    let result2 = Number(stockString.slice(2, 5));
    let result3 = Number(stockString.slice(5, 8));
    let result4 = Number(stockString.slice(8, 11));
    let result5 = Number(stockString.slice(11, 14));

    difficulty.innerHTML = result1 + ',' + result2 + ',' + result3 + ',' + result4 + ',' + result5;
    containerOne.appendChild(difficulty);
}

function getNextDifficulty() {
    let nextDifficulty = document.createElement('p');
    nextDifficulty.classList.add('nextDifficulty');
    let stockSize = stockBitcoin.data.next_difficulty_estimate;
    let stockString = stockSize.toString();
    let result1 = Number(stockString.slice(0, 2));
    let result2 = Number(stockString.slice(2, 5));
    let result3 = Number(stockString.slice(5, 8));
    let result4 = Number(stockString.slice(8, 11));
    let result5 = Number(stockString.slice(11, 14));

    nextDifficulty.innerHTML = result1 + ',' + result2 + ',' + result3 + ',' + result4 + ',' + result5;
    containerOne.appendChild(nextDifficulty);
}


getBitcoin();






