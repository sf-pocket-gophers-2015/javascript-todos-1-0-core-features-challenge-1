var createTodoList = function() {
  var todoList = {};
  todoList.array = [];

  todoList.add = function(string) {
    var product = {
      description: string,
      completed: false,
    };
    this.array.push(product);
  };

  todoList.list = function() {
    return todoList.array;
  };

  todoList.indexOf = function(element) {
    // return this.array.indexOf(todoList.array.description == element);
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i].description === element)
        return i;
    };
  };

  todoList.remove = function(index) {
    this.array.splice(index, 1);
  };

  todoList.get = function(index) {
    return this.array[index];
  };

  todoList.complete = function(index) {
    this.array[index].completed = true;
  };

  return todoList;
};






// Driver code


// Release 1

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']

// release 2
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> [
// {description: 'bread', completed: false}, 
// {description: 'cheese', completed: false}, 
// {description: 'milk', completed: false}, 
// ];
groceryList.indexOf('cheese'); //-> 1
groceryList.get(1); //-> {description: 'cheese', completed: false}
groceryList.complete(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false}, 
// {description: 'cheese', completed: true}, 
// {description: 'milk', completed: false}, 
// ];
groceryList.remove(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false}, 
// {description: 'milk', completed: false}, 
// ];
