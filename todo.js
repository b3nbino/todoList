class Todo {
  static MARK_DONE = "X";
  static MARK_UNDONE = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  getTitle() {
    return this.title;
  }

  isDone() {
    return this.done;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  toString() {
    return `[${
      this.isDone() ? Todo.MARK_DONE : Todo.MARK_UNDONE
    }] ${this.getTitle()}`;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo);
    } else {
      throw new TypeError("can only add Todo objects");
    }
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every((todo) => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1)[0];
  }

  toString() {
    let title = `-- ${this.title} --`;
    let list = this.todos.map((todo) => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }
}

// Omitted code
let list = new TodoList("Today's Todos");
let emptyList = new TodoList("Empty List");
let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);

console.log(`${list}`);
