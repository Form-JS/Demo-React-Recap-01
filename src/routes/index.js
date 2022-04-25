import About from '../pages/about/about';
import DemoRouter, { RouteChoiceA, RouteChoiceB, RouteInitial, RouteNotFound, RouteParam, RouteQuery } from '../pages/demo-router/demo-router';
import NotFound from '../pages/errors/not-found';
import Home from '../pages/home/home';

export const appRoute = [
    { path: '', element: <Home /> },
    { path: 'about', element: <About /> },
    {
        path: 'router',
        element: <DemoRouter />,
        children: [
            { index: true, element: <RouteInitial /> },
            { path: 'choiceA', element: <RouteChoiceA /> },
            { path: 'choiceB', element: <RouteChoiceB /> },
            { path: 'param/:id', element: <RouteParam /> },
            { path: 'query', element: <RouteQuery /> },
            { path: '*', element: <RouteNotFound /> }
        ]
    },
    { path: '*', element: <NotFound /> },
];


