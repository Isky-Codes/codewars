var findAverage = function (num) {
    return (num.reduce((acc, curr) => acc + curr, 0)) / num.length;
};

