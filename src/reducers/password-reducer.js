import { NEW_PASSWORD, DELETE_PASSWORD } from '../actions'

const generatePassword = (words = 2) => {
    fetch('words.txt').then(function(response) {
        console.log(response)
        return response.text();
    }).then(function(text) {
        console.log(text)
    })
}

const passwordReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_PASSWORD:
            generatePassword()
            let newService = "Service " + String(state.length + 1)
            let newPassword = "Password " + String(state.length + 1)
            return [...state, { password: newPassword, service: newService }]
            break
        case DELETE_PASSWORD:
            state.splice(action.payload, 1)
            return [...state]
            break
        default:
            return state
    }
}

export default passwordReducer
