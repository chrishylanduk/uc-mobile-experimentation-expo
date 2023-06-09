import TodoPage from "../../../views/signed_in_stack/todo_stack/todos";
import AppointmentPage from "../../../views/signed_in_stack/todo_stack/appointment";
import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TodoStackType} from "../../types";

function TodoSection() {
    const TodoStack = createNativeStackNavigator<TodoStackType>();

    return (
        <TodoStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <TodoStack.Screen name="Todo Page" component={TodoPage}/>
            <TodoStack.Screen name="Appointments" component={AppointmentPage}/>
        </TodoStack.Navigator>
    );
}

export default TodoSection
