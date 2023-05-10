
import { combineReducers } from 'redux'
import logindetails from './login';
import educatorAllCourse from './getallcoursesedu';

const rootReducer = combineReducers({
    logindetails:logindetails,
    educatorAllCourse:educatorAllCourse
})
export default rootReducer; 