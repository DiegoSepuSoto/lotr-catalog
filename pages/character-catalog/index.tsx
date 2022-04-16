import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import CharacterCard, { CharacterInfo } from './components/characterCard'

function Index() {
  const [charactersInfo, setCharactersInfo] = useState<CharacterInfo[] | null>(
    null
  )

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        setCharactersInfo(json.characters)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-center">
        {charactersInfo !== null &&
          charactersInfo.map((characterInfo, index) => {
            return <CharacterCard key={index} characterInfo={characterInfo} />
          })}
        {/*<CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />*/}
      </div>
    </div>
  )
}

export default Index
