import main from '../src/'

describe('main', () => {
  test('exports', () => {
    expect(main).toBeDefined()
  })
  test('is callable', () => {
    expect(() => {
      main()
    }).not.toThrow()
  })
})
