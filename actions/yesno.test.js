import * as actions from './yesno'
import nock from 'nock'
import configreMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configreMockStore(middlewares)

describe('YesNo actions', () => {
  let store

  beforeEach(() => {
    store = mockStore({isRequesting: false})
  })

  afterEach(() => {
    nock.cleanAll()
  })

  describe('getAnswer()', () => {
    it('handle when server answer with `yes`', () => {
      nock('https://yesno.wtf')
        .get('/api')
        .reply(200, {answer: 'yes', image: 'image_url'})

      const expectedActions = [
        {type: 'REQUEST_ANSWER'},
        {type: 'YES', image: 'image_url'},
      ]

      return store.dispatch(actions.getAnswer())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('handle when server answer with `no`', () => {
      nock('https://yesno.wtf')
        .get('/api')
        .reply(200, {answer: 'no', image: 'image_url'})

      const expectedActions = [
        {type: 'REQUEST_ANSWER'},
        {type: 'NO', image: 'image_url'},
      ]

      return store.dispatch(actions.getAnswer())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('handle when there\'s an error', () => {
      nock('https://yesno.wtf')
        .get('/api')
        .reply(400)

      const expectedActions = [
        {type: 'REQUEST_ANSWER'},
        {type: 'ERROR'},
      ]

      return store.dispatch(actions.getAnswer())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })

})
