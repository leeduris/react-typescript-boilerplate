import React from 'react'
import { render as rtlRender, configure } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import API from 'service/api'
import API_BOOK from 'service/endpoints'
import toast from 'components/Toast'
import reducers from 'store/reducers'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

configure({ testIdAttribute: 'id' })

function render(
    ui,
    {
        initialState = {},
        route = '/',
        store = createStore(
            reducers,
            initialState,
            applyMiddleware(
                thunk.withExtraArgument({
                    API,
                    API_BOOK,
                    toast,
                })
            )
        ),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }: any) {
        return (
            <Provider store={store}>
                <Router>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </Router>
            </Provider>
        )
    }
    return {
        ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
        store
    }
}

export * from '@testing-library/react'

export { render }