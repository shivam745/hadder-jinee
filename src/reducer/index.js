import { numCount } from "./AddSub";
import { creditials } from "./Login/reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({ numCount, creditials });

export default rootReducer;
