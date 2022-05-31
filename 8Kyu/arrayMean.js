var findAverage = function (nums) {
    return (nums.reduce((acc, curr) => acc + curr, 0)) / nums.length;
};

