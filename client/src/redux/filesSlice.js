import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    files: []
}

export const filesSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
        getFiles: (state, action) => {
            const files = action.payload
            state.files = files
        }
    }
})

export const { getFiles } = filesSlice.actions
export default filesSlice.reducer