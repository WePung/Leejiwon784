export const INCRESE = "COUNT/INCRESE"

export const increseCount = count => ({type:INCRESE, count});

const initState = {
  count:0
};

const counter = (state = initState, action) => {
  switch (action.type){
    case INCRESE:
      return {
        ...state,
        count: action.count+1
      };
      default:
    return state;
  }
};

export default counter;