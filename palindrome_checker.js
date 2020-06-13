function palindrome(str){
    let regex = /[a-z0-9]+/ig;
    let newstr = str.match(regex).join("").toLowerCase();
    let backstrarr = [];

    for (let i = newstr.length - 1; i >= 0; i--)
        {backstrarr.push(newstr[i]);}

    let backstr = backstrarr.join("");
}