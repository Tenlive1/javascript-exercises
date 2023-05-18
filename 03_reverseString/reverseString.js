const reverseString = function(string) {
    let answer = "";
    for(let x = string.length -1; x >= 0; x--){
        answer += string.charAt(x);
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
