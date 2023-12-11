/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length == 0){
    return [];
  }
  let categorySet = new Set();
  transactions.forEach(item => {
    categorySet.add(item.category);
  })
  categorySet = [...categorySet];
  
  let output = [];

  for(let i=0 ; i<categorySet.length ; i++){
    let obj = {category:categorySet[i], totalSpent:0};
    // obj[categorySet[i]] = 0;
    output.push(obj);
  }
  for(let i=0 ; i<output.length ; i++){
    for(let j=0 ; j<transactions.length ; j++){
      if(output[i]["category"] == transactions[j]["category"]){
        output[i]["totalSpent"] += transactions[j]["price"];
      }
    }
  }


  return output;
}

module.exports = calculateTotalSpentByCategory;
