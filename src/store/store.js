import { configureStore, createSlice } from '@reduxjs/toolkit'

let global = createSlice({
  name: 'global',
  initialState: {
    // process.env로 사용하는게 맞지만 redux_toolkit 사용법 익히기 위해서 아래와 같이 사용해봄
    contextPath: import.meta.env.VITE_APP_CONTEXTPATH,
    apiUrl: import.meta.env.VITE_APP_APIURL,
  },
})

export default configureStore({
  reducer: {
    global: global.reducer,
  },
})
