import TodoPage from "../../../views/signed_in_stack/todo_stack/todos";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type TodoStackType } from "../../types";
import { type ReactElement } from "react";

function TodoSection(): ReactElement {
  const TodoStack = createNativeStackNavigator<TodoStackType>();

  return (
    <TodoStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TodoStack.Screen name="Todo Page" component={TodoPage} />
    </TodoStack.Navigator>
  );
}

export default TodoSection;
