var tabs = document.getElementsByClassName('Tab');


Array.prototype.forEach.call(tabs, function(tab) {
	tab.addEventListener('click', setActiveClass);
});

function setActiveClass(evt) {
	Array.prototype.forEach.call(tabs, function(tab) {
		tab.classList.remove('active');
	});
	
	evt.currentTarget.classList.add('active');
}


var divs = ["panel1", "panel2", "panel3", "panel4", "panel5", "panel6"];
var visibleDivId = null;
function toggleVisibility(divId) {
    if(visibleDivId === divId) {
    //visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
    }
function hideNonVisibleDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
        div.style.display = "block";
        } else {
        div.style.display = "none";
         }
    }
}