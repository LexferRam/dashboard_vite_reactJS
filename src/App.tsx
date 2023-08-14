import { BrowserRouter } from 'react-router-dom'
import PersistentDrawerLeft from './layouts/Drawer'
import DrawerRoutes from './router/DrawerRoutes'
import { Provider } from 'react-redux'
import { store } from './app/store'
import SimpleBackdrop from './components/BackDrop'
import ErrorBoundary from './components/ErrorBoundary'
import { SnackbarUtilitiesConfigurator } from './utilities/snackbar-manager'
import { SnackbarProvider } from 'notistack'

function App() {

  return (
    <ErrorBoundary
    // render={(error) => <div style={{backgroundColor: 'white', color: 'black', width: '100vw', height:'100vh'}}>{`Ups D: ${error}`}</div>}
    >
      <Provider store={store}>
        <SnackbarProvider>
          <BrowserRouter>
            <PersistentDrawerLeft >
              <SimpleBackdrop />
              <SnackbarUtilitiesConfigurator />
              <DrawerRoutes />
            </PersistentDrawerLeft>
          </BrowserRouter>
        </SnackbarProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
