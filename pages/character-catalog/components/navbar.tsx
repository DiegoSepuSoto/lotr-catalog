import React from 'react'
import styled from 'styled-components'

interface navBarButtonProps {
  buttonText: string
}

const StyledNavBar = styled.div`
  color: #f5f5ff;
  height: 68px;
  left: 0;
  right: 0;
  top: 0;
  background-color: #0f0f13;
  border: 1px solid #000000;
  box-sizing: border-box;

  & > div {
    height: 100%;
  }
`

function Navbar() {
  return (
    <StyledNavBar>
      <div className="flex flex-row justify-center text-center text-sm lg:text-base space-x-10 lg:space-x-3 mx-10">
        <NavbarButton buttonText="The Hobbit" />
        <NavbarButton buttonText="The Lord of the Rings" />
        <NavbarButton buttonText="The Silmarillion" />
      </div>
    </StyledNavBar>
  )
}

function NavbarButton({ buttonText }: navBarButtonProps) {
  return (
    <div className="font-bold my-auto hover:cursor-pointer">{buttonText}</div>
  )
}

export default Navbar
