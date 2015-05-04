var createTodoList = function() {
  var todoList = {};

todoList.groceries = [ ];


todoList.add = function(item){
  this.groceries.push(
    {
    description: item,
    completed: false,
  }
  );
};

todoList.list = function(){
  return this.groceries
};

todoList.indexOf = function(item){
  var targetIndex = -1
  for (var i = 0; i >= this.groceries.length; i++){
    if (this.groceries[i].description === item) {
      targetIndex = i;
      return targetIndex;
    };
  };
};

todoList.remove = function(index){
  console.log(this.groceries[1].description);
  this.groceries.splice(index, 1);
  return this.groceries;

};

todoList.get = function(){

};

todoList.complete = function(){

};

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
