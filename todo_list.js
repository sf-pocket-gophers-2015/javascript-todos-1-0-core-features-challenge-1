var createTodoList = function() {
  var todoList = {
    tasks: []
  };
  todoList.add = function(item) {
    this.tasks.push(item);
  };
  todoList.list = function() {
    console.log(this.tasks);
  };
  todoList.indexOf = function(item) {
    console.log(this.tasks.indexOf(item));
  }
  todoList.remove = function(index) {
    this.tasks.splice(index, 1);
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



























// // release 2
// var groceryList = createTodoList();
// groceryList.add('bread');
// groceryList.add('cheese');
// groceryList.add('milk');
// groceryList.list(); //-> [
// // {description: 'bread', completed: false},
// // {description: 'cheese', completed: false},
// // {description: 'milk', completed: false},
// // ];
// groceryList.indexOf('cheese'); //-> 1
// groceryList.get(1); //-> {description: 'cheese', completed: false}
// groceryList.complete(1);
// groceryList.list(); //-> [
// // {description: 'bread', completed: false},
// // {description: 'cheese', completed: true},
// // {description: 'milk', completed: false},
// // ];
// groceryList.remove(1);
// groceryList.list(); //-> [
// // {description: 'bread', completed: false},
// // {description: 'milk', completed: false},
// // ];
