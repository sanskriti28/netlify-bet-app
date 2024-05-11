// reducer.js

import { UPDATE_THEME, SET_SIDEBAR_VISIBILITY,SET_SIDEBAR_OPEN_ALWAYS, SET_ACTIVE_VARIABLE } from './actionTypes';


// Tpg:TopBackgroud
// Bbg:BottomBackgroud
// Sbg:SecondaryBackgroud
// Apg:ActiveBackgroud
// Cpg:clikActiveBackgroud


const initialState = {
  bgColor1:"#ffffff",
  bgGray: '#f2f2f2',
  bgYellow: '#fbdf13',
  PrimaryText:"#000000",
  secondaryText:"#fbdf13",
  // secondaryText:"gray",
   hoverColor:"#fbdf13",
  //  ClickActiveColor:"green"
};

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_THEME:
      return {
        ...state,
         
          ...state.theme,
          ...action.payload
        
      };
    case SET_SIDEBAR_VISIBILITY:
      return {
        ...state,
        sidebarVisible: action.payload
      };
      case SET_SIDEBAR_OPEN_ALWAYS:
        return {
          ...state,
          sidebarVisibleAlways: action.payload
        };
        case SET_ACTIVE_VARIABLE:
          return {
            ...state,
            activeVariable: action.payload
          };
    
    default:
      return state;
  }
};          

        
         

export default themeReducer;
