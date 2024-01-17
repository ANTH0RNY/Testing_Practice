# Project: Testing Practice
Write tests for the following, and then make the tests pass!

1. A `capitalize function` that takes a string and returns it with the first character capitalized.

2. A `reverseString function` that takes a string and returns it reversed.

3. A `calculator object` that contains functions for the basic operations: `add`, `subtract`, `divide`, and `multiply`. Each of these functions should take two numbers and return the correct calculation.

4. A `caesarCipher function` that takes a string and a shift factor and returns it with each character “shifted”.

    1. Don’t forget to test wrapping from z to a.
    2. Don’t forget to test keeping the same case.
    3. Don’t forget to test punctuation!

5. An `analyzeArray function` that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

```javascript
const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};
```

## Run the test
first install required packages with yarn
```shell
yarn
```

Then run the test
```shell
yarn test
```