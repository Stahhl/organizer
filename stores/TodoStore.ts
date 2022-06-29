import * as SQLite from "expo-sqlite";

export type Todo = {
  id: number;
  done: boolean;
  value: string;
};

export function GetTodos(db: SQLite.WebSQLDatabase, todos: Todo[]): void {
  console.log("GetTodos...");

  db.transaction((tx) => {
    tx.executeSql("select * from Todos;", [], (_, { rows }) => {
      for (let i = 0; i < rows.length; i++) {
        todos.push({
          id: rows[i].id,
          done: rows[i].done,
          value: rows[i].value,
        });
      }
    });
  });

  console.log(todos);
  //   return todos;
}

export function AddTodo(
  db: SQLite.WebSQLDatabase,
  value: string,
  todo: Todo
): void {
  console.log("AddTodo...");

  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Todos (done, value) values (0, ?) returning *;",
      [value],
      (_, { rows }) => {
        console.log(rows);
      },
      (_, error) => {
        console.log(error);
        return true;
      }
    );
    tx.executeSql(
      "select * from Todos;",
      [],
      (_, { rows }) => {
        console.log(rows);
      },
      (_, error) => {
        console.log(error);
        return true;
      }
    );
  });

  //   console.log(todo);
  //   return todo;
}
