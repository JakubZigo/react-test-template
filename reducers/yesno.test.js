import reducer from './yesno'
import nock from 'nock'
import sinon from 'sinon'

describe('YesNo reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      isRequesting: false,
    })
  })

  it('should handle REQUEST_ANSWER', () => {
    expect(
      reducer(
        {isRequesting: false},
        {type: 'REQUEST_ANSWER'}
      )
    ).toEqual({
      isRequesting: true,
    })
  })

  it('should handle YES', () => {
    expect(
      reducer(
        {isRequesting: true},
        {type: 'YES', image: 'image_url'}
      )
    ).toEqual({
      answer: 'yes',
      image: 'image_url',
      isRequesting: false,
    })
  })

  it('should handle NO', () => {
    expect(
      reducer(
        {isRequesting: true},
        {type: 'NO', image: 'image_url'}
      )
    ).toEqual({
      answer: 'no',
      image: 'image_url',
      isRequesting: false,
    })
  })

  it('should handle ERROR', () => {
    expect(
      reducer(
        {isRequesting: true},
        {type: 'ERROR'}
      )
    ).toEqual({
      answer: 'error',
      isRequesting: false,
    })
  })
})
