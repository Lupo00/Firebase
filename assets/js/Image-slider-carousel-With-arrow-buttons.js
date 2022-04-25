var timer = setInterval(nextImage, 4000);
var curImage = 0;
    //edit number of images here
var numImages = 6;

function nextImage() {
    var e;
    // remove showMe class from current image
    e = document.getElementById("slideimg" + curImage);
    e1 = document.getElementById("slideimg-" + curImage%3);
    removeClass(e, "showMe");
    removeClass(e1, "showMe");

    // compute next image
    curImage++;
   if (curImage > numImages - 1) {
       curImage = 0;
    }

    // add showMe class to next image
    e = document.getElementById("slideimg" + curImage);
    e1 = document.getElementById("slideimg-" + curImage%3);
     addClass(e, "showMe");
     addClass(e1, "showMe");

}


function prevImage() {
    var e;
    // remove showMe class from current image
    e = document.getElementById("slideimg" + curImage);
    e1 = document.getElementById("slideimg-" + curImage%3);
    removeClass(e, "showMe");
    removeClass(e1, "showMe");

    // compute next image
    curImage--;
   if (curImage < 0) {
       curImage = numImages - 1;
    }

    // add showMe class to next image
    e = document.getElementById("slideimg" + curImage);
    e1 = document.getElementById("slideimg-" + curImage%3);
    addClass(e, "showMe");
    addClass(e1, "showMe");

}


function addClass(elem, name) {
    var c = elem.className;
    if (c) c += " ";  // if not blank, add a space separator
    c += name;
    elem.className = c;
}

function removeClass(elem, name) {
    var c = elem.className;
    elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
}