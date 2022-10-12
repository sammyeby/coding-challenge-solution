import {createSlice} from '@reduxjs/toolkit'
import {IRepositoryState, IssuesStatesType} from "../models";



export const initialState: IRepositoryState = {
    info: {
        owner: 'facebook',
        name: 'react',
    },
    issues: [],
    states: IssuesStatesType.OPEN
}

export const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        setRepoInfo: (state, action) => {
            state.info = action.payload;
        },
        storeRepoIssues: (state, action) => {
            state.issues = action.payload;
        },
        setIssuesState: (state, action) => {
            state.states = action.payload;
        }
    }
})

export const { setRepoInfo, storeRepoIssues, setIssuesState } = repositorySlice.actions

export default repositorySlice.reducer