import reducer from './message'

describe('Message reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      data: 'Hello World!'
    })
  })

  it('should handle TO_LOWER', () => {
    expect(
      reducer(
        {data: 'TEST'},
        {type: 'TO_LOWER'}
      )
    ).toEqual({
      data: 'test'
    })
  })

  it('should handle TO_UPPER', () => {
    expect(
      reducer(
        {data: 'test'},
        {type: 'TO_UPPER'}
      )
    ).toEqual({
      data: 'TEST'
    })
  })
})
