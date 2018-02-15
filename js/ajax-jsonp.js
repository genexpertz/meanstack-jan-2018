/**
 * Created by admin on 15/02/18.
 */

window.onload = onloadfn;

function onloadfn() {

    for (var i = 0; i < 15; i++) {
        callme();

    }
}


function callme() {
    var req  = new XMLHttpRequest();
    req.onload = function () {
        parseData(req);
    };
    req.open('GET','/a.json')
    req.send(null);
}