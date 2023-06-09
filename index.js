const yargs = require('yargs');
const commands = require('./commands');






let command = yargs.argv._[0];
let item = yargs.argv.item;
let priceInCents = yargs.argv.priceInCents;
let inStock = yargs.argv.inStock;
let color = yargs.argv.color;

if(command==="createNewItem"){
    if(item && priceInCents && inStock && color){
        commands.createNewItem(item, priceInCents, inStock, color)
    }
}else if(command==="listOfAllItems"){
    commands.listOfAllItems()

}else if(command==="deleteItem"){
    if(item){
        commands.deleteItem(item)
    }

}else if(command==="detailsOfOneItem"){
    if(item){
        commands.detailsOfOneItem(item)
    }

}else if(command==="removelistOfAllItems"){
    if(item){
        commands.removelistOfAllItems()
    }
} else if (command === 'addToCart') {
        if (item) {
          commands.addToCart(item);
        }
      } else if (command === 'calculateCartTotal') {
        commands.calculateCartTotal();
}  else {
    console.log("Please enter a valid command")
}
    
  


