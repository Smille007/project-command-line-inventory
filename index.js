const yargs = require('yargs');

const commands = require('./commands')




let command = yargs.argv._[0];
let item = yargs.argv.item;
let priceInCents = yargs.argv.priceInCents;
let inStock = yargs.argv.inStock;
let color = yargs.argv.color

if(command==="createNewItem"){
    if(item && priceInCents && inStock && color){
        commands.createNewItem(item, priceInCents, inStock, color)
    }

}else if(command==="removelistOfAllItems"){

    }else if(command==="detailsOfOneItem"){


        }else if(command==="deleteItem"){
            if(item){
                commands.deleteItem(item)
            }
    
    }else if(command==="listOfAllItems"){
        commands.listOfAllItems()


            }else if(command==="updateItem"){


}