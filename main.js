const textArea = document.getElementById('textArea');
const iframeArea = document.getElementById('iframes');
let ipAddresses = [];

function updateText() {
    ipAddresses = textArea.value.split('\n');
}

function showIframes() {
    const numOfIPs = ipAddresses.length;
    for(let i = 0; i < numOfIPs; i++) {
        let iframe = document.createElement("iframe");
        iframe.src = "https://www.whois.com/whois/" + ipAddresses[i];
        iframeArea.appendChild(iframe);
    }
    textArea.value = '';
    ipAddresses = [];
}

window.onload = () => {
    textArea.value = '';
    ipAddresses = [];
}
