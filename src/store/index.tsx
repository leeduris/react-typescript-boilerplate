import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import API from 'service/api'
import API_BOOK from 'service/endpoints'
import toast from 'components/Toast'
import rootReducer from './reducers'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose
const middlewareEnhancer = applyMiddleware(
    thunk.withExtraArgument({
        API,
        API_BOOK,
        toast
    })
)

const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(middlewareEnhancer)
)

export default store