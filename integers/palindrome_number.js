function palindromeNumber(num){
    let temp = num
    let rev = 0;
    if(num === 0){
        return true;
    }

    while(num != 0){
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num/10);
    }
    console.log(rev)
    console.log(num)
    return rev === temp;
}

let results = palindromeNumber(121);
console.log(results);