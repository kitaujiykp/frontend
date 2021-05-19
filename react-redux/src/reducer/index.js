const initialState = {
  count: 0
}

exports.reducer = (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case 'send_action':
      return {
        count: state.count +1
      }

    default:
      return state;
  }
}