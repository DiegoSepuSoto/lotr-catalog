import { createSlice } from '@reduxjs/toolkit'
import { Character } from '../../models/Character'
import { getCharacters } from './getCharacters'

interface CharactersState {
  charactersInfo: Character[]
  status: string
}

const initialState: CharactersState = {
  charactersInfo: [],
  status: 'idle',
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      if (state.status === 'idle') {
        state.status = 'pending'
      }
    })
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      if (state.status === 'pending') {
        if (action.payload.length === 0) {
          state.status = 'rejected'
        } else {
          state.status = 'fulfilled'
          state.charactersInfo = action.payload
        }
      }
    })
    builder.addCase(getCharacters.rejected, (state) => {
      if (state.status === 'pending') {
        state.status = 'rejected'
      }
    })
  },
})

export default characterSlice.reducer
