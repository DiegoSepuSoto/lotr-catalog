import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import CharacterCard, { CharacterInfo } from './characterCard'

const characterInfo: CharacterInfo = {
  link: 'https://lotr.fandom.com/wiki/Azog',
  title: 'Azog',
  image:
    'https://static.wikia.nocookie.net/lotr/images/1/1c/Defiler.jpg/revision/latest/scale-to-width-down/341?cb=20220110192356',
  category: 'The Hobbit',
}

describe('<CharacterCard />', () => {
  test('renders character card with the right information', () => {
    const component = render(<CharacterCard characterInfo={characterInfo} />)

    // component.getByText(characterInfo.title)
    // component.getByText(characterInfo.category)

    expect(component.container).toHaveTextContent(characterInfo.title)
    expect(component.container).toHaveTextContent(characterInfo.category)
  })

  test('renders the character card with the right image', () => {
    const component = render(<CharacterCard characterInfo={characterInfo} />)

    const img = component.container.querySelector('img')

    if (img !== null) {
      // console.log(prettyDOM(img))
      expect(img.alt).toBe(characterInfo.title)
    } else {
      throw 'img not found'
    }
  })

  test('opens new tab on character card click', () => {
    const component = render(<CharacterCard characterInfo={characterInfo} />)

    window.open = jest.fn()

    const characterCard = component.container.firstChild as HTMLElement

    if (characterCard !== null) {
      // console.log(prettyDOM(img))
      fireEvent.click(characterCard)
      expect(window.open).toHaveBeenCalledTimes(1)
    } else {
      throw 'img not found'
    }
  })
})
