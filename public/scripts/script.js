function showRight(){
    document.getElementById('colorBoxRight').style.cssText = 'visibility: visible';
    document.getElementById('colorBoxLeft').style.cssText = 'visibility: hidden';
    document.getElementById('colorBoxBottom').style.cssText = 'visibility: hidden';
    var div = document.getElementById('theFontIdRight');

    div.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    div.onmouseout = function() {
        this.contentEditable = false;
    }

    var small = document.getElementById('theSmallFontRight');
    small.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    small.onmouseout = function() {
        this.contentEditable = false;
    }

    var smaller = document.getElementById('theSmallerFontRight');
    smaller.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    smaller.onmouseout = function() {
        this.contentEditable = false;
    }
};
function showLeft(){
    document.getElementById('colorBoxLeft').style.cssText = 'visibility: visible';
    document.getElementById('colorBoxRight').style.cssText = 'visibility: hidden';
    document.getElementById('colorBoxBottom').style.cssText = 'visibility: hidden';
    var div = document.getElementById('theFontIdLeft');
    div.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    div.onmouseout = function() {
        this.contentEditable = false;
    }

    var small = document.getElementById('theSmallFontLeft');
    small.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    small.onmouseout = function() {
        this.contentEditable = false;
    }

    var smaller = document.getElementById('theSmallerFontLeft');
    smaller.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    smaller.onmouseout = function() {
        this.contentEditable = false;
    }
};
function showBottom(){
    document.getElementById('colorBoxBottom').style.cssText = 'visibility: visible';
    document.getElementById('colorBoxLeft').style.cssText = 'visibility: hidden';
    document.getElementById('colorBoxRight').style.cssText = 'visibility: hidden';
    var div = document.getElementById('theFontIdBottom');
    div.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    div.onmouseout = function() {
        this.contentEditable = false;
    }

    var small = document.getElementById('theSmallFontBottom');
    small.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    small.onmouseout = function() {
        this.contentEditable = false;
    }

    var smaller = document.getElementById('theSmallerFontBottom');
    smaller.onclick = function() {
        this.contentEditable = true;
        this.focus();
    }
    smaller.onmouseout = function() {
        this.contentEditable = false;
    }
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
