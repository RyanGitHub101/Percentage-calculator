/*CREATE A PROGRM THAT CALCULATE THE 50% OF A PRICE
FOR EXAMPLE 50% OF 200 SHOULD RETURN £100*/
const percentOf = ()  => {
  let original_Price = 100;
  let divideby_10 = original_Price / 10;
  let multiply_by_5 = divideby_10 * 5;
  let result = multiply_by_5;
  return "£" + result;
}
console.log(percentOf());
/*Made by RyanGitHub101*/
