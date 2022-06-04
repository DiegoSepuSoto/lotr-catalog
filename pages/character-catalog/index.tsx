import React from 'react'
import Navbar from './components/navbar'
import CharacterCard from './components/characterCard'
import { useCharacter } from './hooks/useCharacter'

function Index() {
  const { charactersInfo, charactersInfoStatus } = useCharacter()

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
