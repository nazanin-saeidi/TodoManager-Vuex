import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos,
};

const actions = {
    async fetchTodos({ commit }){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            commit('setTodos', response.data);
        } catch(error) {
            console.log(error);
        }   
    },
    async addTodo({ commit }, title){
        try {
            const newTodo = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false});
            commit('setNewTodo', newTodo.data);
        } catch(error) {
            console.log(error);
        }
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    setNewTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations
}