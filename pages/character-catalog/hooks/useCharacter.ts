import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { useEffect, useRef } from 'react'
import { getCharacters } from '../../../redux/character/getCharacters'

export const useCharacter = () => {
  const effectCalled = useRef(false)
  const renderAfterCalled = useRef(false)
  const charactersInfo = useAppSelector(
    (state) => state.character.charactersInfo
  )
  const charactersInfoStatus = useAppSelector((state) => state.character.status)
  const dispatch = useAppDispatch()

  if (effectCalled.current) {
    renderAfterCalled.current = true
  }

  useEffect(() => {
    if (!effectCalled.current) {
      dispatch(getCharacters())
      effectCalled.current = true
    }

    if (!renderAfterCalled.current) {
      return
    }
  }, [dispatch])

  return { charactersInfo, charactersInfoStatus }
}
