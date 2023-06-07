const fs = require('fs');




const createOrUpdateNewItem = (item, priceInCents, inStock, color) => {
    try {
      let sample = JSON.parse(fs.readFileSync('sample.json'));
      let index = sample.findIndex((x) => x.item === item);
      if (index === -1) {
        sample.push({ item, priceInCents, inStock, color });
      } else {
        sample[index].item = item;
        sample[index].priceInCents = priceInCents;
        sample[index].inStock = inStock;
        sample[index].color = color;
      }
      fs.writeFileSync('sample.json', JSON.stringify(sample));
      console.log(`New item '${item}' created/updated successfully.`);
    } catch (error) {
      console.log('Error creating/updating item:', error);
    }
  };
  

  const listOfAllItems = () => {
    try {
      const sample = JSON.parse(fs.readFileSync('sample.json'));
      return sample;
    } catch (error) {
      console.log('Error retrieving list of items:', error);
      return [];
    }
  };
  const allItems = listOfAllItems();
  console.log(allItems);
  



const deleteItem = (item, priceInCents, inStock, color) => {
  try {
    let sample = JSON.parse(fs.readFileSync('sample.json'));
    const index = sample.findIndex(
      (x) =>
        x.item === item &&
        x.priceInCents === priceInCents &&
        x.inStock === inStock &&
        x.color === color
    );
    if (index === -1) {
      console.log(`Item '${item}' not found.`);
      return;
    }
    sample.splice(index, 1);
    fs.writeFileSync('sample.json', JSON.stringify(sample));
    console.log(`Item '${item}' deleted successfully.`);
  } catch (error) {
  console.log(error)
  }
 
};



const detailsOfOneItem = (item, priceInCents, inStock, color) => {
    let sample = [];

  try {
    let sample = JSON.parse(fs.readFileSync('sample.json'));
    const filteredList = sample.filter(
      (x) =>
        x.item === item &&
        x.priceInCents === priceInCents &&
        x.inStock === inStock &&
        x.color === color
    );
    console.log(filteredList);
  } catch (error) {
  //console.log(error);
  }
  console.log(sample)
};

const removelistOfAllItems = (item, priceInCents, inStock, color) => {
try {
    let sample = JSON.parse(fs.readFileSync('sample.json'));

    const filteredList = sample.filter((x) => {
      return (
        x.item !== item &&
        x.priceInCents !== priceInCents &&
        x.inStock !== inStock &&
        x.color !== color
      );
    });

    fs.writeFileSync('sample.json', JSON.stringify(filteredList));
    console.log('Items removed successfully.');
  } catch (error) {
   //console.log("error");
  }
};




module.exports = {
    createOrUpdateNewItem,
    deleteItem,
    listOfAllItems,
    detailsOfOneItem,
    removelistOfAllItems
}