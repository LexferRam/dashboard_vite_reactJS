import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ViewWithContext from '../views/viewWithContext';
import ErrorBoundary from '../components/ErrorBoundary';

// Dinamic views imports
const DisignPatterns = React.lazy(() => import('../views/DisignPatterns'));
const DisignPrincinples = React.lazy(() => import('../views/DisignPrincinples'));
const ReduxToolkit = React.lazy(() => import('../views/ReduxToolkit'));
const CancelToken = React.lazy(() => import('../views/CancelToken'));

const DrawerRoutes = () => {
   return (
       <React.Suspense fallback={<h1 style={{color:'red'}}>Loading...</h1>}>
           <Routes>
               <Route path='/' element={<h2>Index Route</h2>} />
               <Route 
                path='/errorBoundary' 
                element={
                    <ErrorBoundary>
                        <DisignPatterns />
                    </ErrorBoundary>
                } />
               <Route path='/disignPrinciples' element={<DisignPrincinples />} />
               <Route path='/reduxToolkit' element={<ReduxToolkit />} />
               <Route path='/contextapi' element={<ViewWithContext />} />
               <Route path='/cancelToken' element={<CancelToken />} />
           </Routes>
       </React.Suspense>
    )
}

export default DrawerRoutes