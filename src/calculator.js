const add = (...nums) => nums.reduce((sum, num) => sum + num);
const subtract = (...nums) => nums.reduce((difference, num) => difference - num);
const multiply = (...nums) => nums.reduce((product, num) => product * num);
const divide = (...nums) => nums.reduce((quotient, num) => quotient / num);

export default {
    add,
    subtract,
    multiply,
    divide
};
