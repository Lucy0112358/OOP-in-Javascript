const objectMenu = [
  { name: "Tea", type: "drink", price: 200 },
  { name: "Coffee", type: "drink", price: 300 },
  { name: "Hot Chocolate", type: "drink", price: 500 },
  { name: "Shawarma", type: "food", price: 1200 },
  { name: "French fries", type: "food", price: 500 },
  { name: "Hot dog", type: "food", price: 100 },
];
function Cafe(name, menu, orders) {
  this.name = `Malocco`;
  this.menu = objectMenu;
  this.orders = [];
  this.addOrder = function (name, orders) {
    orders = this.orders;
    objectMenu.find(function (item) {
      if (item.name === name) {
        orders.push(item);
      }
    });
    return this.orders;
  };
  this.fulfillOrder = function () {
    if (this.orders.length > 0) {
      return `The ${this.orders.shift().name} is ready!`;
    } else {
      return "All orders have been fulfilled!";
    }
  };
  this.listOrders = function () {
    return this.orders;
  };
  this.drinkOnly = function () {
    let result = [];
    this.menu.forEach((element) => {
      if (element.type === `drink`) {
        result.push(element);
      }
    });
    return result;
  };
  this.foodOnly = function () {
    let result = [];
    this.menu.forEach((element) => {
      if (element.type === `food`) {
        result.push(element);
      }
    });
    return result;
  };
  this.cheapestItem = function(){
     return Math.min(this.menu.price)
  }
}

let newcafe = new Cafe();
newcafe.addOrder(`Tea`);
newcafe.addOrder(`Coffee`);
newcafe.fulfillOrder();
console.log(newcafe.cheapestItem());
