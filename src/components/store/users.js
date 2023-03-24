import { createStore } from 'vuex';

import axios from 'axios';

export default createStore({
    state: {
        users: [],
        username: '',
        url: 'https://api.github.com', 
        id: '',
        repos: []
    },
    getters: {
        getUsers(state) {
            return state.users;
        },
        getUsername(state) {
            return state.username
        },
        getUserDetail(state) {
            return (id) => state.users.find((user) => user.id === id)
        },
        getRepo(state) {
            return state.repos
        }
    },
    actions: {
        async fetchUsers({commit}) {
            try {
                const data = await axios.get(this.state.url + '/users/' + this.state.username + '/repos')
                      
                commit("setUser", data.data)
                
            }
                catch(err)  {
                console.log(err)
            }
        },
        setUsername(context, payload) {
            context.commit('setUsername', payload)
        },
        async fetchRepo({ }) {
            try {
                const data = await axios.get(this.state.url + '/repos' + this.state.username + this.state.id)
                commit("setUserRepo", data.data)
                
            }
                catch(err)  {
                console.log(err)
            }
            }
        

    },

    mutations: {
        setUser(state, users) {
            state.users = users
        }, 
        setUserRepo(state, repos) {
            state.repos = repos
        },
        setUsername(state, username) {
            state.username = username
        },
    
    }
})