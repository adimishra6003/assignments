/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.array = [];
  }
  
  add(item){
    this.array.push(item);
  }

  remove(i){
    this.array.splice(i, 1);
  }

  update(i, item){
    if(i<0 || i>this.array.length-1){
      return
    }
    this.array[i] = item;
  }

  getAll(){
    return this.array;
  }

  get(i){
    if(i<0 || i>this.array.length-1){
      return null
    }
    return this.array[i];
  }

  clear(){
    this.array = [];
  }
}

module.exports = Todo;
