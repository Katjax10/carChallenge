/**
 * Created by ujackk2 on 6/26/18.
 */
export function createReducer(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
}