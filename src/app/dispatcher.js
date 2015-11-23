import {Dispatcher} from 'flux';
import Constants from './Constants';

let AppDispatcher = Object.create(new Dispatcher());

AppDispatcher.handlerServerAction = function handleServerAction(action) {
    this.dispatch({
        source: Constants.ActionSources.SERVER_ACTION,
        action: action
    });
};

AppDispatcher.handleViewAction = function handleViewAction(action) {
    this.dispatch({
        source: Constants.ActionSources.VIEW_ACTION,
        action: action
    });
};

export default AppDispatcher;