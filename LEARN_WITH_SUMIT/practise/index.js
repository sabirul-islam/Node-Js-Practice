// globalThis.setTimeout(() => console.log('hello'), 100);

// let largestNumber = Number.MAX_SAFE_INTEGER;
// largestNumber += 1;
// largestNumber = BigInt(largestNumber) + 1n;
// console.log(largestNumber);

// console.log(BigInt(10) === 10n);
// console.log(10 === 10n);
// console.log(10 == 10n);

// const language = {
//   name: 'JavaScript',
//   creator: 'Berdan Eich',
//   library: {
//     react: {
//       company: 'facebook',
//     },
//   },
// };

// const company = language?.library?.react?.company;
// console.log(company);

// let colors = ['red', 'green', 'blue'];
// colors = null;
// console.log(colors?.[1]);

let language;
console.log(language ?? 'javascript');
