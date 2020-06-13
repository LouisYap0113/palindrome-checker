function palindrome(str){
    let regex = /[a-z0-9]+/ig;
    let newstr = str.match(regex).join("").toLowerCase();
}