import * as actions from './message'

describe('Message actions', () => {
  it('should create an action to change text to uppercase', () => {
    const expectedAction = {
      type: 'TO_UPPER'
    }
    expect(actions.toUpper()).toEqual(expectedAction)
  })

  it('should create an action to change text to lowercase', () => {
    const expectedAction = {
      type: 'TO_LOWER'
    }
    expect(actions.toLower()).toEqual(expectedAction)
  })
})
