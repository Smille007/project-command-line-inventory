const yargs = require('yargs');

const commands = require('./commands')




let command = yargs.argv._[0];
let item = yargs.argv.item;
let priceInCents = yargs.argv.priceInCents;
let inStock = yargs.argv.inStock;
let color = yargs.argv.color

if(command==="createOrUpdateNewItem"){
    if(item && priceInCents && inStock && color){
        commands.createOrUpdateNewItem(item, priceInCents, inStock, color)
    }
}else if(command==="listOfAllItems"){
    commands.listOfAllItems()

}else if(command==="deleteItem"){
    if(item && priceInCents && inStock && color){
        commands.deleteItem(item && priceInCents && inStock && color)
    }

}else if(command==="detailsOfOneItem"){
    if(item && priceInCents && inStock && color){
        commands.detailsOfOneItem(item && priceInCents && inStock && color)
    }

else if(command==="removelistOfAllItems"){
    if(item && priceInCents && inStock && color){
        commands.removelistOfAllItems(item && priceInCents && inStock && color)
    }
}  
    
  
}

