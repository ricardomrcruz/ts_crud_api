
function hello(firstName) {
    return 'Hello ' + firstName + ' ! Welcome into the Wild !';
  }

  
const Hello = firstname => `hello ${firstname} , welcome to my crib`;


const logParamsAndReturnAddiction = (n1, n2) => {
    console.log(n1, n2);
    return n1 + n2;
};

console.log(logParamsAndReturnAddiction(3,4));


const roundMap1 = (arr) => {
    return arr.map(number => Math.round(number));
}

const roundMap =arr=>arr.map(Math.round);

// const getImageMarkup = ()


const fruits = ["Bananas", "Oranges", "Strawberries"];
const vegetables = ["Cabbages", "Carrots"];

const all = [...fruits, ...vegetables]

// expected array: ["Bananas", "Oranges", "Strawberries", "Cabbages", "Carrots"]

const obj3 = {...obj1, ...obj2};


