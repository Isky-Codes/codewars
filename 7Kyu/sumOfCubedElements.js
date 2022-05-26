function cubeOdd(arr) {
    for(const element of arr) {
        if(isNaN(element)) {
            return undefined;
        }
    }
    return arr.map(el => el * el * el).filter(el => el % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
}