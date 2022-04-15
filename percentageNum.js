//my solution
function percentage(a, b) {
  let divide_by_100 = b / 100;
  let multiply = divide_by_100 * a;
  return multiply;
}

//author solution
function percentage(a, b) {
  return b / 100 * a + "%"

}
