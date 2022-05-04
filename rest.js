// refactored to ES2015

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

//Find Min

const findMin = (...args) => Math.min(...args);

//Merge Objects

const mergeObjects = (obj1, obj2) => {
  ({ ...obj1, ...obj2 });
};

//Double and Return Args-COME BACK

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((value) => value * 2),
];

//Slice and Dice

function removeRandon(items) {
  let randomIndex = Math.floor(Math.random(items.length));
  return [...items.slice((0, randomIndex), ...items.slice(randomIndex + 1))];
}
//adding one to reach length

// Return arr

const extend = (array1, array2) => [...array1, ...array2];

// New obj w/ key/values from obj & new keu, val

const addKeyVal = (obj, key, value) => {
  return { ...obj, [key]: value };
};
// alternatively, you can use the below:
// let newObj = { ...obj }
//   newObj[key] = val; - here you're initalizing and assingining a new pair
//   return newObj;

//

//New Obj w/ key removed
// user needs to add "" around key when submitting

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

//combine two obj

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// New Obj w/ mod key value

const update = (obj, key, val) => {
  let fullObj = { ...obj };
  fullObj[key] = val;
  return fullObj;
};

// update({ two: "four", three: "seven" }, "two", "one");
