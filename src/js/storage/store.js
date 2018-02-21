import { createStore } from 'redux'

import rootReducers from 'storage/reducers'

const store = createStore(rootReducers)

export {
    store as default
}