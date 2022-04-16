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
  return (
    <div className="m-7 w-44">
      <div>
        <div className="h-56 w-44 relative">
          <Image
            src={characterInfo.image}
            className="rounded-t -z-10"
            alt={characterInfo.title}
            layout="fill"
            objectFit="scale-down"
          />
        </div>
        <BottomCard className="text-white rounded-b p-3 border-2 border-white">
          <BottomCardTitle>{characterInfo.title}</BottomCardTitle>
          <BottomCardBody>Movie: {characterInfo.category}</BottomCardBody>
        </BottomCard>
      </div>
    </div>
  )
}

export default CharacterCard
