function showRight(){
    document.getElementById('colorBoxRight').style.cssText = 'visibility: visible; font-size: 44px';
    document.getElementById('colorBoxLeft').style.cssText = 'visibility: hidden; font-size: 44px';
    document.getElementById('colorBoxBottom').style.cssText = 'visibility: hidden; font-size: 44px';
};
function showLeft(){
    document.getElementById('colorBoxLeft').style.cssText = 'visibility: visible; font-size: 44px';
    document.getElementById('colorBoxRight').style.cssText = 'visibility: hidden; font-size: 44px';
    document.getElementById('colorBoxBottom').style.cssText = 'visibility: hidden; font-size: 44px';
};
function showBottom(){
    document.getElementById('colorBoxBottom').style.cssText = 'visibility: visible; font-size: 44px';
    document.getElementById('colorBoxLeft').style.cssText = 'visibility: hidden; font-size: 44px';
    document.getElementById('colorBoxRight').style.cssText = 'visibility: hidden; font-size: 44px';
};

 

function bottomBoxOpacityHalf() {
    var el = document.getElementById("colorBoxBottom");
        el.style.background = 'rgba(76, 175, 80, 0.5)';
}
function bottomBoxOpacityLess() {
    var el = document.getElementById("colorBoxBottom");
        el.style.background = 'rgba(76, 175, 80, 0.3)';
}
function bottomBoxOpacityNone() {
    var el = document.getElementById("colorBoxBottom");
        el.style.background = 'rgba(76, 175, 80, 1)';
}




function rightBoxOpacityHalf() {
    var el = document.getElementById("colorBoxRight");
        el.style.background = 'rgba(76, 175, 80, 0.5)';
}
function rightBoxOpacityLess() {
    var el = document.getElementById("colorBoxRight");
        el.style.background = 'rgba(76, 175, 80, 0.3)';
}
function rightBoxOpacityNone() {
    var el = document.getElementById("colorBoxRight");
        el.style.background = 'rgba(76, 175, 80, 1)';
}


function leftBoxOpacityHalf() {
    var el = document.getElementById("colorBoxLeft");
        el.style.background = 'rgba(76, 175, 80, 0.5)';
}
function leftBoxOpacityLess() {
    var el = document.getElementById("colorBoxLeft");
        el.style.background = 'rgba(76, 175, 80, 0.3)';
}
function leftBoxOpacityNone() {
    var el = document.getElementById("colorBoxLeft");
        el.style.background = 'rgba(76, 175, 80, 1)';
}


function noOpacity(){
    document.getElementById('colorBoxBottom').style.cssText = 'background: rgba(76, 175, 80, 0)';
    document.getElementById('colorBoxLeft').style.cssText = 'background: rgba(76, 175, 80, 0)';
    document.getElementById('colorBoxRight').style.cssText = 'background: rgba(76, 175, 80, 0)';
};
function lessOpacity(){
    document.getElementById('colorBoxBottom').style.cssText = 'background: rgba(76, 175, 80, 0.3)';
    document.getElementById('colorBoxLeft').style.cssText = 'background: rgba(76, 175, 80, 0.3)';
    document.getElementById('colorBoxRight').style.cssText = 'background: rgba(76, 175, 80, 0.3)';
};
function moreOpacity(){
    document.getElementById('colorBoxBottom').style.cssText = 'background: rgba(76, 175, 80, 0.5)';
    document.getElementById('colorBoxLeft').style.cssText = 'background: rgba(76, 175, 80, 0.5)';
    document.getElementById('colorBoxRight').style.cssText = 'background: rgba(76, 175, 80, 0.5)';
};
