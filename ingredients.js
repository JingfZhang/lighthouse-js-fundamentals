var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var numberOfIngredients = ingredients.length

// Write a while loop that prints out the contents of ingredients:
var count1 = 0

while (count1 < numberOfIngredients) {
  console.log(ingredients[count1]);
  count1++;
}
// Write a for loop that prints out the contents of ingredients:
for (var count2 = 0; count2 < numberOfIngredients; count2++) {
  console.log(ingredients[count2]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var count2 = numberOfIngredients - 1; count2 >= 0; count2--) {
  console.log(ingredients[count2]);
}