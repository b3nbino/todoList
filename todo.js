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

module.exports = Todo;
