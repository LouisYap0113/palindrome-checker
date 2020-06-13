function palindrome(str){
    let regex = /[a-z0-9]+/ig; //Create a regular expression to get only alphanumeric character
    let newstr = str.match(regex).join("").toLowerCase(); //Get a clean string with lower case
    
    //below code create a backward string
    let backstrarr = [];
    for (let i = newstr.length - 1; i >= 0; i--)
        {backstrarr.push(newstr[i]);}
    let backstr = backstrarr.join("");
    //end of above code
    return newstr === backstr? true:false; //compare original string and its backward string, checker done.
}