import counterReducer, {
  changeName,
  changeSchoolAsync,
} from './listSlice';

test('reducers', () => {
  let state;
  state = reducers({counter:{value:0,status:'idle'},list:{name:'kumiko',school:'kitauji'}}, {type:'profile/changeName'});
  expect(state).toEqual({counter:{value:0,status:'idle'},list:{name:'ykp',school:'kitauji'}});
});
