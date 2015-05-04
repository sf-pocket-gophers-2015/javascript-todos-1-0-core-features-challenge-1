var createTodoList = function() {
  // console.log(this)
  var todoList = {};

  // your code here
  todoList.tasks = []
  todoList.add = function(item){
    this.tasks.push({description: item, completed: false});
  };

  todoList.list = function(){
      // -> this.tasks is an array of objects  -> [{description: "milk", completed: false}, {description: "bread", completed: false}, {}]
      // -> loop through the array

      for(var i=0;i < this.tasks.length ; i++) {
        console.log(this.tasks[i])
      }

  };

  todoList.indexOf = function(item){
    for (var i = 0; i <= this.tasks.length; i++){
      if (this.tasks[i].description === item)
      {
        console.log("This is the index: " + i);
        break;
      } else if (i === this.tasks.length){
        console.log("Item not found!")
      }
    }
    console.log()
  };

  todoList.remove = function(index){
    this.tasks.splice(index, 1)
  };

  todoList.get = function(index){
    console.log(this.tasks[index])
  };
  todoList.complete = function(index){
    this.tasks[index].completed = true

  };

  return todoList;
};

// Driver code


/*// Release 1

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']*/

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

console.log(""); console.log("")
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];
