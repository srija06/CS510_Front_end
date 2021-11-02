// Enter your code here
const urlParams = new URLSearchParams(window.location.search);
var str = urlParams.get("number");
if(isPalindrome(str)) {
    message = "Yes. This is a palindrome!"
    document.getElementById("result").innerHTML = message;
    document.getElementById("result").style.color = "Green";
}
else {
    message = "No.Try again";
    document.getElementById("result").style.color = "Red";
    document.getElementById("result").innerHTML = message;
}


function isPalindrome(number) {
    reverse = str.split('').reverse().join('');
    if(reverse == number) {
        return true;
    }
    return false;
}