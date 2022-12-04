import { render, screen } from '@testing-library/react'
import Map from './Map'
import { places } from 'utils/mocks'

describe('Map: ', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i
      })
    )
  })

  it('should render with the marker in correct place', () => {
    render(<Map places={places} />)
    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/nova iguaçu/i)).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const { container } = render(<Map places={places} />)
    expect(container).toMatchSnapshot()
  })
})
