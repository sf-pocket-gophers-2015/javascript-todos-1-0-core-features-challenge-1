var createTodoList = function() {
  var todoList = {
    items: [],

    add: function(item){
      var itemObject = {
        description: item,
        completed: false,
      };
      this.items.push(itemObject)
    },

    list: function(){
      return this.items
    },

    indexOf: function(thing){
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].description === thing) {
          return i;
        };
      };
    },

    remove: function(index){
      this.items.splice(index, 1)
    },

    get: function(index){
      return this.items[index];
    },

    complete: function(index){
      this.get(index).completed = true
    }
  };

  return todoList;
};






// Driver code


// // Release 1

// var groceryList = createTodoList();
// groceryList.add('bread');
// groceryList.add('cheese');
// groceryList.add('milk');
// console.log(groceryList.list()); //-> ['bread', 'cheese', 'milk']
// console.log(groceryList.indexOf('cheese')); //-> 1
// groceryList.remove(1);
// console.log(groceryList.list()); //-> ['bread', 'milk']

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

