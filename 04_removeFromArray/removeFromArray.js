const removeFromArray = function(arrays, ...remove) {
    let answer = [];
    let position =0;
    for(let x =0; x < arrays.length; x++){
        let z =0;
        let word = arrays[x];
        for(let y =0; y<remove.length; y++){
            if(word === remove[y]){
                z++;
                break;
            }
        }
        if(z === 0){
            answer[position] = word;
            position++;
        }
    }
    return answer
};

// Do not edit below this line
module.exports = removeFromArray;
