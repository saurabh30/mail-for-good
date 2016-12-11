import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { createCampaign, createTemplate, manageCampaign, manageTemplates, sendCampaign } from './campaignReducer';
import { createList, manageList, manageListSubscribers } from './listReducer';
import { profile } from './appReducer';
import settings from './settingsReducer';
import notifications from './notificationsReducer';
import { offerPermission, receivedPermissionOffers } from './permissionReducer';

const rootReducer = combineReducers({
  createCampaign,
  createTemplate,
  manageCampaign,
  manageTemplates,
  sendCampaign,
  createList,
  manageList,
  manageListSubscribers,
  settings,
  notifications,
  profile,
  offerPermission,
  receivedPermissionOffers,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
