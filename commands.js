const fs = require('fs');




const createNewItem = (item, priceInCents, inStock, color)=> {
    let sample = [];
try{
   sample = JSON.pharse(fs.readFileSync("sample.json"));
} catch(e){
    //console.log("error")
}
let index = sample.findIndex((x) => x.item === item)
if (index === -1){
    sample.push({item, priceInCents, inStock, color})
} else{
    sample[index] += priceInCents
}
fs.writeFileSync("sample.json", JSON.stringify(sample))
}


const deleteItem = (item) => {
    let sample = [];
    try{
        sample = JSON.parse(fs.readFileSync("sample.json"));
        } catch(e){
        }
            //console.log("error")
            const filteredList = sample.filter((x) => x.item != item);
            fs.writeFileSync("sample.json", JSON.stringify(filteredList))


}

const listOfAllItems = () =>{
    let sample = [];
    try{
        sample = JSON.pharse(fs.readFileSync("sample.json"));
     } catch(e){
         //console.log("error")
     }
     console.log(sample)

}

module.exports = {
    createNewItem,
    deleteItem,
    listOfAllItems
}