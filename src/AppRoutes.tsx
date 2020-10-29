import { useRoutes }  from 'react-router-dom';

const AppRoutes = () => useRoutes([
        {path:'/', element: '<AppPage />', children:[{path:'/', element:'<HomePage />',],}
    ]);

