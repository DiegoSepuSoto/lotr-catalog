import Index from './index'
import { render, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import * as reduxHooks from '../../redux/hooks'
import { Character } from '../../models/Character'
import * as useCharacterHook from './hooks/useCharacter'
import { createStore } from '../../redux/store'
import { CharacterInfo } from './components/characterCard'

export const characterInfo: CharacterInfo = {
  link: 'https://lotr.fandom.com/wiki/Azog',
  title: 'Azog',
  image:
    'https://static.wikia.nocookie.net/lotr/images/1/1c/Defiler.jpg/revision/latest/scale-to-width-down/341?cb=20220110192356',
  category: 'The Hobbit',
}

export const mockCharacterInfoLoadingState: Character[] = []
export const mockCharacterInfoStatusLoadingState = 'pending'

export const mockCharacterInfoFulfillState: Character[] = [characterInfo]
export const mockCharacterInfoStatusFulfillState = 'fulfill'

export const mockCharacterInfoRejectedState: Character[] = []
export const mockCharacterInfoStatusRejectedState = 'rejected'

export const ReduxProvider = ({
  children,
  reduxStore,
}: {
  children: ReactNode
  reduxStore: Store
}) => <Provider store={reduxStore}>{children}</Provider>

export const useAppSelectorMock = jest.spyOn(reduxHooks, 'useAppSelector')

export const useCharacterMock = jest.spyOn(useCharacterHook, 'useCharacter')

describe('Character Catalog <Index>', () => {
  test('renders page with loading message', () => {
    const store = createStore()

    const component = render(
      <ReduxProvider reduxStore={store}>
        <Index />
      </ReduxProvider>
    )

    useCharacterMock.mockReturnValueOnce({
      charactersInfo: mockCharacterInfoLoadingState,
      charactersInfoStatus: mockCharacterInfoStatusLoadingState,
    })

    waitFor(() => {
      expect(component.container).toHaveTextContent('Cargando...')
    })
  })

  test('renders page with characters info', () => {
    const store = createStore()

    const component = render(
      <ReduxProvider reduxStore={store}>
        <Index />
      </ReduxProvider>
    )

    useCharacterMock.mockReturnValueOnce({
      charactersInfo: mockCharacterInfoFulfillState,
      charactersInfoStatus: mockCharacterInfoStatusFulfillState,
    })

    waitFor(() => {
      expect(component.container).toHaveTextContent('Azog')
      expect(component.container).toHaveTextContent('Movie: The Hobbit')
    })
  })

  test('renders page with failed message', () => {
    const store = createStore()

    const component = render(
      <ReduxProvider reduxStore={store}>
        <Index />
      </ReduxProvider>
    )

    useCharacterMock.mockReturnValueOnce({
      charactersInfo: mockCharacterInfoRejectedState,
      charactersInfoStatus: mockCharacterInfoStatusRejectedState,
    })

    waitFor(() => {
      expect(component.container).toHaveTextContent(
        '¡Hubo un error al cargar la información!'
      )
    })
  })
})
