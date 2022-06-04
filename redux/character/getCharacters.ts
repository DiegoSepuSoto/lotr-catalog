import { createAsyncThunk } from '@reduxjs/toolkit'
import { CharacterRepository } from '../../repository/json/character/characterJSONRepository'

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const characterRepository = new CharacterRepository('/data.json')

    return await characterRepository.getCharacters()
  }
)
