function highAndLow(numbers) { 
    let numArray = numbers.split(' ').sort((a, b) => a - b);
    return `${numArray[numArray.length - 1]} ${numArray[0]}`
}