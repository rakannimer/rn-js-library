import main from '../src/lib/'

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
