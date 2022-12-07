import { render } from '@testing-library/react'
import PopupContent from './PopupContent'

describe('PopupContent: ', () => {
  it('should test', () => {
    const image = {
      url: 'www.google.com'
    }
    render(<PopupContent image={image} plantName="Verbena" slug="verbena" />)

    expect(true).toBeTruthy()
  })
})
