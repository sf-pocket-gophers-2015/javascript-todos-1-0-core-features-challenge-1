var createTodoList = function() {
  var todoList = {

    tasks: new Array(),

    add: function(item){
      this.tasks.push({
        description: item,
        completed: false,
      });
    },

    list: function() {
      for (i=0; i<this.tasks.length; i++) {
        console.log( this.tasks[i] )
      };
    },

    indexOf: function(item) {
      return this.tasks.indexOf(item);
    },

    remove: function(id) {
      this.tasks.splice(id, 1)
    },

    get: function(id) {
      return this.tasks[id]
    },

    complete: function(id) {
      this.tasks[id].completed = true
    },

  };

  // your code here


  return todoList;
};






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
