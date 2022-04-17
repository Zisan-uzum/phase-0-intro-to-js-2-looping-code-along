// Code your solutions in this file
// Code your solutions in this file
function writeCards(array, event) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return res;
}
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
