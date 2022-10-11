import { combineReducers, createStore } from "redux"

import { orangReducer, alamatReducer, pekerjaanReducer } from "./reducer"

const rootReducer = combineReducers({
	orang: orangReducer,
	alamat: alamatReducer,
	pekerjaan: pekerjaanReducer
})

const store = createStore(rootReducer)

export default store