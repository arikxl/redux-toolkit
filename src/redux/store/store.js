import { configureStore } from "@reduxjs/toolkit";

// import { counterSlices } from "../slice/counterSlice";
// import counterReducer from "../slice/counterSlice";
import postReducer from "../slice/postsSlice";

const store = configureStore({
    reducer: {
        // counter: counterSlices
        // counter: counterReducer
        post: postReducer
    }
});

export default store;