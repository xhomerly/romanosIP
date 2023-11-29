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
        iframe.src = "https://ipinfo.io/" + ipAddresses[i];
        iframeArea.appendChild(iframe);
        console.log("tvorim" + i);
    }
    textArea.value = '';
    ipAddresses = [];
}

window.onload = () => {
    textArea.value = '';
    ipAddresses = [];
}
