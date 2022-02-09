import React, { Suspense } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from 'store'
import theme from 'styles/theme'
import ErrorBoundary from 'components/ErrorBoundary'
import GlobalStyle from 'styles/globalStyle'
import { ToastContainer } from 'react-toastify'
import SuspenseSpinner from 'components/SuspenseFallback'
import ROUTES from 'routes'


const App: React.FC = () => {
  const routes = useRoutes(ROUTES)
  return routes
}


const AppWrapper = () => {
  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <GlobalStyle/>
            <Suspense fallback={<SuspenseSpinner/>}>
              <Router>
                <App/>
              </Router>
            </Suspense>
            <ToastContainer
              position='bottom-right'
              autoClose={5000}
            />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
  ) 
}

export default AppWrapper