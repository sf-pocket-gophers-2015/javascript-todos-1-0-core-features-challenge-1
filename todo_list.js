var createTodoList = function() {
  var todoList = {
    tasks: [],

    //release 1
    // add: function(item){ 
    //   this.tasks.push(item) 
    // },

    //release 2
    add: function(item){ 
      this.tasks.push( { description: item, completed: false });
    },

    list: function(){ 
      for(var i = 0; i < this.tasks.length; i++){
        console.log(this.tasks[i])
      }
    },

    //release 1
    indexOf: function(item){
      return this.tasks.indexOf(item)
    },
    //release 2
    // indexOf: function (){ 


    remove: function(index){
      return this.tasks.splice(index, 1)
    },

    get: function(index){
      console.log( this.tasks[index] )
    },

    complete: function(index){
      return this.tasks[index].completed = true;
    },

  };

  return todoList;
};

// #RELEASE 2




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
