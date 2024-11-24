// Item class
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Inventory Management Functions

// Add Item
function addItem(inventory, item) {
    inventory.push(item);
}

// Update Item
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    } else {
        console.log(`Item with ID ${id} not found.`);
    }
}

// Delete Item
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    } else {
        console.log(`Item with ID ${id} not found.`);
    }
}

// Get Item
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

// Print Inventory
function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

// Example Usage
const inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

// Add Item
const newItem = new Item(3, 'Orange', 15, 0.7);
addItem(inventory, newItem);
console.log("\nAdding item:");
printInventory(inventory);

// Update Item
updateItem(inventory, 2, { quantity: 30 });
console.log("\nUpdating item:");
printInventory(inventory);

// Delete Item
deleteItem(inventory, 2);
console.log("\nDeleting item:");
printInventory(inventory);

// Get Item
console.log("\nGetting item with ID 1:");
console.log(getItem(inventory, 1));
