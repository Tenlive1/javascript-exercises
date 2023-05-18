const sumAll = function(num1,num2) {
    let answer = 0;
    if(typeof num1 == 'number' && typeof num2 == 'number' && num1 >= 0 && num2 >= 0){
        let great = 0;
        let least = 0;
        if (num1 > num2){
            great = num1;
            least = num2;
        }else{
            great = num2;
            least = num1; 
        }
        for (let x = least; x <= great; x++){
            answer += x;
        }
    }
    else 
    return 'ERROR';

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
