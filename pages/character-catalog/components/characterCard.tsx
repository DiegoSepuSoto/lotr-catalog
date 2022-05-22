import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export interface CharacterInfo {
  category: string
  image: string
  link: string
  title: string
}

interface characterCardProps {
  characterInfo: CharacterInfo
}

const BottomCard = styled.div`
  background-color: #535362;
`

const BottomCardTitle = styled.div`
  font-weight: bold;
`

const BottomCardBody = styled.div`
  font-style: italic;
`

function CharacterCard({ characterInfo }: characterCardProps) {
  const onCharacterClick = () => {
    window.open(characterInfo.link, '_blank')
  }

  return (
    <div className="m-7 hover:cursor-pointer" onClick={onCharacterClick}>
      <div className="rounded-lg border-4 border-white">
        <div className="h-60 w-42 relative -z-10">
          <Image
            src={characterInfo.image}
            alt={characterInfo.title}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <BottomCard className="text-white p-3">
          <BottomCardTitle>{characterInfo.title}</BottomCardTitle>
          <BottomCardBody>Movie: {characterInfo.category}</BottomCardBody>
        </BottomCard>
      </div>
    </div>
  )
}

export default CharacterCard
