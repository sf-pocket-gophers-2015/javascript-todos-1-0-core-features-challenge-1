var createTodoList = function() {
  var todoList = {
    tasks: []
    // tasks: {description: obj, completed == false}
  };
  todoList.add = function(item) {
    this.tasks.push({
      description: item,
      completed: false
    }
// tasks= {name: 'jeanine'}
// tasks[name]
    );
  };
  todoList.list = function() {
    console.log(this.tasks);
  };

  todoList.indexOf = function(item) {
    // loop through this.tasks
    //   if (task.description == itemDescription){
    //     return index
    //   }
    for (i = 0; i < this.tasks.length; i++) {
      var task = this.tasks[i];
      if (task.description === item){
        console.log(i)
      };
    };
    return -1
  };
  todoList.remove = function(index) {
    this.tasks.splice(index, 1);
  };
  todoList.get = function(index) {
    return this.tasks[index];
  };
  todoList.complete = function(index) {
    this.tasks[index].completed = true;
  };
  return todoList;
};


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
// Driver code


// Release 1

// var groceryList = createTodoList();
// groceryList.add('bread');
// groceryList.add('cheese');
// groceryList.add('milk');
// groceryList.list(); //-> ['bread', 'cheese', 'milk']
// groceryList.indexOf('cheese'); //-> 1
// groceryList.remove(1);
// groceryList.list(); //-> ['bread', 'milk']
