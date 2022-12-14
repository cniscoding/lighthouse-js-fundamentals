const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("ingredients list with while loop");
w = 0;
while (w < ingredients.length){
  console.log(ingredients[w]);
  w++
}
// Write a for loop that prints out the contents of ingredients:
console.log("ingredients list with for loop")
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("ingredients list in reverse")
for (let r = ingredients.length; r >= 0; r--){
  console.log(ingredients[r])
}