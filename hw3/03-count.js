// Enter your code here
var text = document.getElementById("intro").innerHTML;
var markedText = text;

const urlParams = new URLSearchParams(window.location.search);
var word = urlParams.get("input");
document.getElementById("userinput").value = word;
highlightText();

function highlightText() {
    if(word) {
        var regex = new RegExp('\\b'+word+'\\b', 'ig');
        markedText = markedText.replace(regex, '<mark>' + word + '</mark>');
        document.getElementById("intro").innerHTML = markedText;
    }
}