var createTodoList = function() {
  var todoList = {
    tasks: [],

    add: function(item) {
      var item_obj = {
        description: item,
        completed: false,
      };
      this.tasks.push(item_obj);
    },
    list: function(item) {
      for (var i = 0; i < this.tasks.length; i++) {
        console.log(this.tasks[i])
      };
    },
    indexOf: function(item) {
      this.tasks[item];
    },
    get: function(item_index){
      this.tasks[item_index];
    },
    complete: function(item_index){
      this.tasks[item_index].completed = true;
    },
    remove: function(item_index) {
      this.tasks.splice(item_index,1);
    },
  };

return todoList;
};




// Driver code


// Release 1
/*
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']
*/

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

