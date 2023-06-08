const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
let chalk;
import('chalk')



const createNewItem = (item, priceInCents, inStock, color) => {
     sample = [];
    try{
    sample = JSON.parse(fs.readFileSync("sample.json"))
    } catch(e) {
        console.log(e)
    }

let index = sample.findIndex((x)=>x.item===item)
const id = uuidv4();
if(index===-1){
sample.push({id, item, priceInCents, inStock, color});

} else {
    sample[index].priceInCents = priceInCents,
    sample[index].inStock = inStock,
    sample[index].color = color
}
   fs.writeFileSync("sample.json", JSON.stringify(sample,null,2))
   console.log(sample)
}

const deleteItem = (item) =>{
    sample = [];
    try{
        sample = JSON.parse(fs.readFileSync("sample.json"))
        } catch(e) {
            console.log(e)
            }
       const filteredList = sample.filter((x) => x.item !=item)
       fs.writeFileSync("sample.json", JSON.stringify(filteredList))
       console.log(sample)

} 
const listOfAllItems = () =>{
    sample = [];
    try{
        sample = JSON.parse(fs.readFileSync("sample.json"))
        } catch(e) {
            console.log(e)
            }
            console.log(sample)

}
  
const detailsOfOneItem = (item) => {
    sample = [];
    try{
        sample = JSON.parse(fs.readFileSync("sample.json"))
        } catch(e) {
            console.log(e)
            }
            let index = sample.findIndex((x)=>x.item===item)
            if(index!=-1) {
                console.log(`The price of ${item} is ${sample[index].priceInCents} cents, is it in stock? - ${sample[index].inStock}, color: ${sample[index].color}`)
            }
}
const addToCart = (item) => {
    cart = [];
    try{
        sample = JSON.parse(fs.readFileSync("sample.json"))
        } catch(e) {
            console.log(e)
            }
            let index = sample.find((x)=>x.item===item);
            if(index){
                const cartItem=cart.find((x)=>x.item===item);
                if(cartItem){
                    cartItem.quantity+=1;
                    } else {
                        cart.push({
                            item:item.item,
                            quantity:1,
                            priceInCents: item.priceInCents
                            })
                            }
                            fs.writeFileSync("sample.json", JSON.stringify(filteredList))
                            console.log(`Item added to the cart: ${item}`);  

                        }
            }     






module.exports = {
    createNewItem,
    deleteItem,
    listOfAllItems,
    detailsOfOneItem,
    addToCart,
  
}