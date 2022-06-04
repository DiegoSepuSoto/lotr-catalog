import * as reduxHooks from '../../../redux/hooks'
import { renderHook } from '@testing-library/react'
import { useCharacter } from './useCharacter'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { createStore } from '../../../redux/store'
import { ReactNode } from 'react'
import { Character } from '../../../models/Character'

const mockCharacterInfoLoadingState: Character[] = []
const mockCharacterInfoStatusLoadingState = 'pending'

const mockCharacterInfoFulfillState: Character[] = [
  {
    link: 'https://lotr.fandom.com/wiki/Azog',
    title: 'Azog',
    image:
      'https://static.wikia.nocookie.net/lotr/images/1/1c/Defiler.jpg/revision/latest/scale-to-width-down/341?cb=20220110192356',
    category: 'The Hobbit',
  },
]
const mockCharacterInfoStatusFulfillState = 'fulfill'

const mockCharacterInfoRejectedState: Character[] = []
const mockCharacterInfoStatusRejectedState = 'rejected'

const ReduxProvider = ({
  children,
  reduxStore,
}: {
  children: ReactNode
  reduxStore: Store
}) => <Provider store={reduxStore}>{children}</Provider>

const useAppSelectorMock = jest.spyOn(reduxHooks, 'useAppSelector')

describe('useCharacter hook', () => {
  beforeEach(() => {
    useAppSelectorMock.mockClear()
  })

  test('gets fulfill status from redux', async () => {
    const store = createStore()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
    )

    useAppSelectorMock.mockReturnValueOnce(mockCharacterInfoFulfillState)
    useAppSelectorMock.mockReturnValueOnce(mockCharacterInfoStatusFulfillState)

    const { result } = renderHook(() => useCharacter(), { wrapper })

    expect(result.current.charactersInfoStatus).toBe('fulfill')
  })

  test('gets pending status from redux', async () => {
    const store = createStore()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
    )

    useAppSelectorMock.mockReturnValueOnce(mockCharacterInfoLoadingState)
    useAppSelectorMock.mockReturnValueOnce(mockCharacterInfoStatusLoadingState)

    const { result } = renderHook(() => useCharacter(), { wrapper })

    expect(result.current.charactersInfoStatus).toBe('pending')
  })

  test('gets rejected status from redux', async () => {
    const store = createStore()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
    )

    useAppSelectorMock.mockReturnValueOnce(mockCharacterInfoRejectedState)
    useAppSelectorMock.mockReturnValueOnce(mockCharacterInfoStatusRejectedState)

    const { result } = renderHook(() => useCharacter(), { wrapper })

    expect(result.current.charactersInfoStatus).toBe('rejected')
  })
})
