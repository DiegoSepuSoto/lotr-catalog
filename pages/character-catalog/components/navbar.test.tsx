import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Navbar from './navbar'

test('renders content with the right information', () => {
  const component = render(<Navbar />)

  // component.getByText(characterInfo.title)
  // component.getByText(characterInfo.category)

  expect(component.container).toHaveTextContent('The Silmarillion')
  expect(component.container).toHaveTextContent('The Hobbit')
  expect(component.container).toHaveTextContent('The Lord of the Rings')
})
