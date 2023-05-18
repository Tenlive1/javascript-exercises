const repeatString = function(word,nums) {
    let answer = "";
    if (nums < 0){
        return 'ERROR';
    }
    for(let x = 0; x<nums; x++){
        answer += word;        
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
