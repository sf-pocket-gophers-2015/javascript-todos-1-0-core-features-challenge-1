var createTodoList = function() {
  // console.log(this)
  var todoList = {};

  // your code here
  todoList.collection = []
  todoList.add = function(item){
    this.collection.push(item);
  };

  todoList.list = function(){
      console.log("Grocery List: " + this.collection)
  };

  todoList.indexOf = function(item){
    for (var i = 0; i <= this.collection.length; i++){
      if (this.collection[i] === item)
      {
        console.log("This is the index: " + i);
        break;
      } else if (i === this.collection.length){
        console.log("Item not found!")
      }
    }
    console.log()
  };

  todoList.remove = function(index){
    this.collection.splice(index, 1)
  };

  todoList.get = function(){};
  todoList.complete = function(){};

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
