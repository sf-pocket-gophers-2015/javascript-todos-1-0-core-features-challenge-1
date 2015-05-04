var createTodoList = function() {
  var todoList = {};
  todoList.collection = [];
  todoList.add = function(string) {
    var toAdd = {
      description: string,
      completed: false,
    }
    return todoList.collection.push(toAdd);
  };
  todoList.list = function(){
    return todoList.collection;
  };
  todoList.indexOf = function(string){
    for (i =0; i < todoList.collection.length; i++){
      if (todoList.collection[i].description === string){
        return i;
      };
    };
  };
  todoList.remove = function(integer){
    return todoList.collection.splice(integer, 1);
  };
  todoList.get = function(integer){
    return todoList.collection[integer];
  };
  todoList.complete = function(integer){
    return todoList.collection[integer].completed = !todoList.collection[integer].completed;
  }
  return todoList;
};



// Driver code
// Release 1

var groceryList = createTodoList();
console.log(groceryList.add('bread'));
console.log(groceryList.add('cheese'));
console.log(groceryList.add('milk'));
console.log(groceryList.list()); //-> ['bread', 'cheese', 'milk']
console.log(groceryList.indexOf('cheese')); //-> 1
console.log(groceryList.remove(1));
console.log(groceryList.list()); //-> ['bread', 'milk']

// release 2
var groceryList = createTodoList();
console.log(groceryList.add('bread'));
console.log(groceryList.add('cheese'));
console.log(groceryList.add('milk'));
console.log(groceryList.list()); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
// ];
console.log(groceryList.indexOf('cheese')); //-> 1
console.log(groceryList.get(1)); //-> {description: 'cheese', completed: false}
console.log(groceryList.complete(1));
console.log(groceryList.list()); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: true},
// {description: 'milk', completed: false},
// ];
console.log(groceryList.remove(1));
console.log(groceryList.list()); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];

