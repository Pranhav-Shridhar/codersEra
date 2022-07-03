// Write an easy function mentioning whether or not a string is a palindrome.

function reverse(str){
    str = str.toLowerCase();
    var string = str.split('').reverse().join('');
    if(string == str)
       return "A palindrome"
       else
       return "Nope"
}

console.log(reverse("level"));
console.log(reverse("levels"));