import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Todo{
    id?: number,
    title?:string,
    useId?:number,
    completed?: boolean
}

interface CustomerState{
    todos: Todo[]
}

const initialState: CustomerState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state,action:PayloadAction<Todo[]>) => {
            state.todos=action.payload;
        }
    }
})

export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;
