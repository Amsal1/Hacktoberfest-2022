function findSubset(myString){
    strLen = myString.length //find the length of the string
    subsetNum = 2**strLen - 1 //formulae used to find the total number of possible subsets (2^n-1)
    subsetArr = [] //subsets will be stored in this array

    for (let i = 1; i <= subsetNum; i++){ 
        subsetArr[i-1] = "" 
        for (let j = 0; j < strLen; j++){
            if (i & 1 << j){
                subsetArr[i-1] += myString[j] 
            }
        }

    }

    return subsetArr;

}

console.log( findSubset("abc") )
