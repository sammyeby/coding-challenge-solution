import { MemoryRouter, MemoryRouterProps } from "react-router-dom";
import AppRouter from "../AppRouter";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import issuesReducer from "redux/reducer";


const TestWrapperWithRoutes = ({ initialEntries }: Omit<MemoryRouterProps, 'children'>) => {

    const testStore = configureStore({
        reducer: issuesReducer
    });

    return (
        <Provider store={testStore}>
            <MemoryRouter initialEntries={initialEntries}>
                <AppRouter />
            </MemoryRouter>
        </Provider>
    );
}

export { TestWrapperWithRoutes };