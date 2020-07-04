import thunk from 'redux-thunk';
import { showPhones, showPhone } from '../redux/actions/phoneActions';
import * as types from '../redux/actions/actionTypes';
import './setupTests';
import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {
  phones: [],
  phone: []
};

const phoneList = [
  {
    id: 0,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description:
      'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
    color: 'black',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  }
];

describe('Test Phone Actions', () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Loads all phones correctly', done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: phoneList
      });
    });

    const expectedActions = [
      {
        type: types.LOAD_PHONES,
        payload: phoneList
      }
    ];
    return store.dispatch(showPhones()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
  it('Loads one phone correctly', done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      let phones = [];
      request.respondWith({
        status: 200,
        response: { phones: [phoneList[0]] }
      });
    });

    const expectedActions = [
      {
        type: types.LOAD_PHONE,
        payload: phoneList[0]
      }
    ];
    return store.dispatch(showPhone(phoneList[0].id)).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('Returns error action when no phones found', done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: []
      });
    });

    const expectedActions = [
      {
        type: types.LOAD_PHONES_ERROR
      }
    ];
    return store.dispatch(showPhones()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});
