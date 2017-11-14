export const NEW_PASSWORD = "NEW_PASSWORD"
export const CHANGE_PASSWORD = "CHANGE_PASSWORD"
export const DELETE_PASSWORD = "DELETE_PASSWORD"

export const newPassword = () => {
    return {
        type: NEW_PASSWORD
    }
}

export const changePassword = (index, password) => {
    return {
        type: CHANGE_PASSWORD,
        payload: {
            index, password
        }
    }
}

export const deletePassword = (index) => {
    return {
        type: DELETE_PASSWORD,
        payload: index
    }
}
