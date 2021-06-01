import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { authReducer } from '../reducers/authReducer';

const composeEnhancers = composeWithDevTools({
    name: `REDUX`,
    realtime: true,
    hostname: 'localhost',
    port: 8081,
});


const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk),
));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch