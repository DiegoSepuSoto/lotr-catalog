import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import CharacterCard from './components/characterCard'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCharacters } from '../../redux/character/getCharacters'

function Index() {
  const charactersInfo = useAppSelector(
    (state) => state.character.charactersInfo
  )
  const charactersInfoStatus = useAppSelector((state) => state.character.status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-center mx-10 md:mx-32">
        {charactersInfoStatus === 'pending' ? (
          <div className="mt-20 text-white font-bold text-2xl">Cargando...</div>
        ) : charactersInfoStatus === 'fulfilled' ? (
          charactersInfo.map((characterInfo, index) => {
            return <CharacterCard key={index} characterInfo={characterInfo} />
          })
        ) : (
          <div className="mt-20 text-white font-bold text-2xl">
            ¡Hubo un error al cargar la información!
          </div>
        )}
      </div>
    </div>
  )
}

export default Index
