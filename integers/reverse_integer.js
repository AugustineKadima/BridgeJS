function reverseInteger(num){
    let rev = 0;
    if(num == 0) return num;
    while (num != 0) {
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }

    return rev;
}

let result = reverseInteger(123);
console.log(result)