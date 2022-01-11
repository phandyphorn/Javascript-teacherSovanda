function turnOff() {
    document.getElementById('theImage').src = './pic_bulboff.gif';
    document.getElementById('theImage').innerHTML = 'My Image';
    document.getElementById('test').innerText = 'Welcome';
}
function turnOn() {
    document.getElementById('theImage').src = './pic_bulbon.gif';
}

