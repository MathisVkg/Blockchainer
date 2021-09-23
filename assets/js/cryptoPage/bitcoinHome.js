

const APIURLBITCOIN = 'https://api.blockchair.com/bitcoin/stats';
let price = document.getElementById('priceTarget');
let containerOne = document.getElementById('containerTargetOne');
let containerTwo = document.getElementById('containerTargetTwo');
let moon = document.getElementById('darkModeMoon');
let title = document.getElementById('title');
let menu = document.getElementById('menuTarget');
let menuClose = document.getElementById('menuClose');
let nav = document.getElementById('navTarget');
let blockTextData = document.getElementById('textData');
let titleBlock = document.getElementById('titleBlockTarget');
let titleBlock2 = document.getElementById('titleBlockTarget2');
let blockMeenpoolData = document.getElementById('textMeenpool');
let input = document.getElementById('inputTarget');
let inputValue = document.getElementById('inputValue');
let walletTag = document.getElementById('containerWallet');
let currentEur = 0.85;
let stockBitcoin;
let convertedPriceBitcoin;
let priceBitcoin;
let resultPriceBitcoin;
let state = 1;

input.addEventListener('keypress', (event) => {
    let stockPriceConverter;
    if(event.key > 47 || event.key < 58) {
        setInterval(() => {
            stockPriceConverter = input.value / priceBitcoin;
            stockPriceConverter = stockPriceConverter.toFixed(8);
            inputValue.innerHTML = stockPriceConverter + ' Bitcoin';
        }, 500);  
    }
})


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
    document.body.style.marginLeft = '120px';
})
menuClose.addEventListener('click', () => {
    nav.classList.remove('on');
    nav.classList.add('off');
    document.body.style.marginLeft = '0';
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

    input.classList.remove('inputDarkOff');
    input.classList.add('inputDarkOn');
    walletTag.classList.remove('containerWalletOff');
    walletTag.classList.add('containerWalletOn');
    getColorInfoOn();
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

    input.classList.remove('inputDarkOn');
    input.classList.add('inputDarkOff');
    walletTag.classList.remove('containerWalletOn');
    walletTag.classList.add('containerWalletOff');
    getColorInfoOff();
}

function getColorInfoOn() {
    price.classList.remove('priceDark');
    price.classList.add('priceWhite');

    titleBlock.classList.remove('titleBlockDark');
    titleBlock.classList.add('titleBlockWhite');
    titleBlock2.classList.remove('titleBlockDark');
    titleBlock2.classList.add('titleBlockWhite');

    containerOne.classList.remove('containerBlockWhite');
    containerOne.classList.add('containerBlockDark');
    containerTwo.classList.remove('containerBlockWhite');
    containerTwo.classList.add('containerBlockDark');
}
function getColorInfoOff() {
    price.classList.remove('priceWhite');
    price.classList.add('priceDark');

    titleBlock.classList.remove('titleBlockWhite');
    titleBlock.classList.add('titleBlockDark');
    titleBlock2.classList.remove('titleBlockWhite');
    titleBlock2.classList.add('titleBlockDark');

    containerOne.classList.remove('containerBlockDark');
    containerOne.classList.add('containerBlockWhite');
    containerTwo.classList.remove('containerBlockDark');
    containerTwo.classList.add('containerBlockWhite');
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
        getMeenpoolTransac();
        getMeenpoolPerSec();
        getMeenpoolOutput();
        getMeenpoolFeez();
        getMeenpoolSize();
        price.innerHTML = resultPriceBitcoin + ' EUR';
    });
}


function getConvertBitcoin() {
    convertedPriceBitcoin = stockBitcoin.data.market_price_usd;
    convertedPriceBitcoin *= currentEur;
    Math.floor(convertedPriceBitcoin * 100) / 100;
    priceBitcoin = convertedPriceBitcoin.toFixed(2);
    resultPriceBitcoin = new Intl.NumberFormat().format(priceBitcoin);
}

function getBlockchainSize() {
    let block = document.createElement('p');
    block.classList.add('textData');
    let stockSize = stockBitcoin.data.blockchain_size;
    let stockString = stockSize.toString();
    let resultBegin = Number(stockString.slice(0, 2));
    let resultEnd = Number(stockString.slice(2, 5));
    
    block.innerHTML = resultBegin + '.' + resultEnd + ' GB';
    blockTextData.appendChild(block);
}

function getNodes() {
    let node = document.createElement('p');
    node.classList.add('textData');
    let stockSize = stockBitcoin.data.nodes;
    let stockResult = new Intl.NumberFormat().format(stockSize);

    node.innerHTML = stockResult;
    blockTextData.appendChild(node);
}

function getLastestBlock() {
    let lastestBlock = document.createElement('p');
    lastestBlock.classList.add('textData');
    let stockSize = stockBitcoin.data.blocks;
    let stockResult = new Intl.NumberFormat().format(stockSize);

    lastestBlock.innerHTML = stockResult;
    blockTextData.appendChild(lastestBlock);
}

function getDifficulty() {
    let difficulty = document.createElement('p');
    difficulty.classList.add('textData');
    let stockSize = stockBitcoin.data.difficulty;
    let stockResult = new Intl.NumberFormat().format(stockSize);

    difficulty.innerHTML = stockResult;
    blockTextData.appendChild(difficulty);
}

function getNextDifficulty() {
    let nextDifficulty = document.createElement('p');
    nextDifficulty.classList.add('textData');
    let stockSize = stockBitcoin.data.next_difficulty_estimate;
    let stockResult = new Intl.NumberFormat().format(stockSize);

    nextDifficulty.innerHTML = stockResult;
    blockTextData.appendChild(nextDifficulty);
}



function getMeenpoolTransac() {
    let meenTransac = document.createElement('p');
    meenTransac.classList.add('textData');
    let stockSize = stockBitcoin.data.mempool_transactions;
    let stockResult = new Intl.NumberFormat().format(stockSize);

    meenTransac.innerHTML = stockResult;
    blockMeenpoolData.appendChild(meenTransac);
}

function getMeenpoolPerSec() {
    let meenPerSec = document.createElement('p');
    meenPerSec.classList.add('textData');
    let stockSize = stockBitcoin.data.mempool_tps;
    let stockResult = new Intl.NumberFormat().format(stockSize);

    meenPerSec.innerHTML = stockResult;
    blockMeenpoolData.appendChild(meenPerSec);
}

function getMeenpoolOutput() {
    let meenOutput = document.createElement('p');
    meenOutput.classList.add('textData');
    let stockSize = stockBitcoin.data.mempool_outputs;
    let stockResult = new Intl.NumberFormat().format(stockSize);

    meenOutput.innerHTML = stockResult;
    blockMeenpoolData.appendChild(meenOutput);
}

function getMeenpoolFeez() {
    let meenFeez = document.createElement('p');
    meenFeez.classList.add('textData');
    let stockSize = Math.floor(stockBitcoin.data.mempool_total_fee_usd);
    let stockResult = new Intl.NumberFormat().format(stockSize);

    meenFeez.innerHTML = stockResult + ' USD';
    blockMeenpoolData.appendChild(meenFeez);
    
}

function getMeenpoolSize() {
    let meenSize = document.createElement('p');
    meenSize.classList.add('textData');
    let stockSize = Math.round(stockBitcoin.data.mempool_size / 1000000);

    meenSize.innerHTML = stockSize + ' MG';
    blockMeenpoolData.appendChild(meenSize);
}





getBitcoin();






