const Todo = require("./todo");
const TodoList = require("./todoList");

describe("TodoList", () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo("Buy milk");
    todo2 = new Todo("Clean room");
    todo3 = new Todo("Go to the gym");

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });

  test("toArray returns equal array", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("first returns first todo", () => {
    expect(list.first()).toBe(todo1);
  });

  test("last returns last todo", () => {
    expect(list.last()).toBe(todo3);
  });

  test("shift removes and returns first element", () => {
    let todo = list.shift();
    expect(todo).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test("pop removes and returns last element", () => {
    let todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test("isDone returns false when not all done and inverse", () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test("add throws typeError when argument not Todo", () => {
    expect(() => list.add("something")).toThrow();
  });

  test("itemAt returns item at index or reference error", () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(() => list.itemAt(7)).toThrow();
  });

  test("markDoneAt makes todo.done true or throws", () => {
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(() => list.markDoneAt(5)).toThrow();
  });

  test("markUndoneAt makes todo.done false or throws", () => {
    todo2.markDone();
    list.markUndoneAt(1);
    expect(todo2.isDone()).toBe(false);
    expect(() => list.markUndoneAt(5)).toThrow();
  });

  test("markAllDone make all todos.done true", () => {
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test("removeAt removes and returns specified element, throws with incorrect index", () => {
    let todo = list.removeAt(1);
    expect(todo).toEqual(todo2);
    expect(() => list.removeAt(7)).toThrow();
  });

  test("toString returns clean looking list", () => {
    let expectedString = `-- Today's Todos --
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toEqual(expectedString);
  });

  test("toString one done", () => {
    let expectedString = `-- Today's Todos --
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    todo1.markDone();
    expect(list.toString()).toEqual(expectedString);
  });

  test("toString all done", () => {
    let expectedString = `-- Today's Todos --
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    list.markAllDone();
    expect(list.toString()).toEqual(expectedString);
  });

  test("forEach iterates over all items in list", () => {
    let some = [];
    list.forEach((item) => some.push(item));

    expect(some).toEqual([todo1, todo2, todo3]);
  });

  test("filter returns array of filtered list", () => {
    let list2 = new TodoList("Today's Todos");
    list2.add(todo1);
    todo1.markDone();
    expect(list.filter((item) => item.isDone())).toEqual(list2);
  });
});
