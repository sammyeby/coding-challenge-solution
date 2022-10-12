import { useRoutes, RouteObject } from 'react-router-dom';
import HomePage from "components/Pages/HomePage";
import IssuesListPage from "components/Pages/IssuesListPage/IssuesListPage";
import IssueDetailPage from "components/Pages/IssueDetailPage/IssueDetailPage";
import NotFoundPage from "components/Pages/NotFoundPage";

interface IRoute extends RouteObject {
    path: string;
    displayName?: string;

}

const routes: IRoute[] = [
    {
        path: '/',
        element: <HomePage />,
        displayName: 'MediaMarkt Coding challenge'
    },
    {
        path: '/issues',
        element: <IssuesListPage />,
        displayName: 'Repo issues'
    },
    {
        path: '/issues/:issueId',
        element: <IssueDetailPage />,
        displayName: ' details'
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];

const AppRouter = () => useRoutes(routes);

export default AppRouter;