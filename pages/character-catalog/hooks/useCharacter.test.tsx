import { renderHook } from '@testing-library/react'
import { useCharacter } from './useCharacter'
import { createStore } from '../../../redux/store'
import { ReactNode } from 'react'
import {
  mockCharacterInfoFulfillState,
  mockCharacterInfoLoadingState,
  mockCharacterInfoRejectedState,
  mockCharacterInfoStatusFulfillState,
  mockCharacterInfoStatusLoadingState,
  mockCharacterInfoStatusRejectedState,
  ReduxProvider,
  useAppSelectorMock,
} from '../index.test'

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
