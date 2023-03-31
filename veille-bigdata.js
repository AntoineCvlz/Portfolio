var tabs = document.getElementsByClassName('Tab-bigdata');

Array.prototype.forEach.call(tabs, function(tab) {
	tab.addEventListener('click', setActiveClass);
});

function setActiveClass(evt) {
	Array.prototype.forEach.call(tabs, function(tab) {
		tab.classList.remove('active-bigdata');
	});
	
	evt.currentTarget.classList.add('active-bigdata');
}


var divs = ["panelbigdata1", "panelbigdata2", "panelbigdata3"];
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