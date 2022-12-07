import { render, screen } from '@testing-library/react'
import Map from './Map'
import { markersMock } from 'utils/mocks'

describe('Map: ', () => {
  it('should render without any marker', () => {
    render(<Map markers={markersMock} />)

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i
      })
    )
  })

  it('should render with the marker in correct place', () => {
    render(<Map markers={markersMock} />)
    expect(screen.getByTitle(/Arenaria/i)).toBeInTheDocument()
    expect(screen.getByTitle(/PlantaLegal/i)).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const { container } = render(<Map markers={markersMock} />)
    expect(container).toMatchSnapshot()
  })
})
