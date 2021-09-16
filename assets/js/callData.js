


let data;
function callScript() {
    data = {
        bitcoin: '<script src="assets/js/callAPI/bitcoin.js"></script>',
        ethereum: '<script src="assets/js/callAPI/ethereum.js"></script>',
        dogecoin: '<script src="assets/js/callAPI/dogecoin.js"></script>',
        fontawesome : '<script src="https://kit.fontawesome.com/9c212cc3e9.js" crossorigin="anonymous"></script>',
    }
    console.log(data.bitcoin);
    document.write(data.bitcoin);
    document.write(data.ethereum);
    document.write(data.dogecoin);
    document.write(data.fontawesome);
}
callScript();

