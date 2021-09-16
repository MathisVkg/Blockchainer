


let headTag = document.head;
let data;

function callMeta() {
    data = {
        meta1: '<meta charset="UTF-8">',
        meta2: '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
        meta3: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
        test: 'check',
    }
    // headTag.appendChild(data.test);
    // document.getElementsByTagName('head')[0].appendChild(data.test);
    // headTag.appendChild(data.test);
    document.head.appendChild(data.test);    
}

callMeta();

