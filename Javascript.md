# Getting Started Javascript



 ```bash
 
 ```

 ```bash 
# It's A Higher Order Function
function generateTwoRandomNumber(max, whatDoYouWant) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  const result = whatDoYouWant(random1, random2);
  return result;
}
generateTwoRandomNumber(100, (random1, random2) => {
  console.log(random1, random2);
});
generateTwoRandomNumber(100, (random1, random2) => {
  console.log(random1 + random2);
});
generateTwoRandomNumber(70, (random1, random2) => {
  console.log(random1 + random2 * random1);
});
generateTwoRandomNumber(200, (random1, random2) => {
  console.log(random1 + random2 - random2 + random1);
});
```

 ```bash
 
 ```

```bash

```

[//]: # (Open [http://localhost:3000]&#40;http://localhost:3000&#41; with your browser to see the result.)

