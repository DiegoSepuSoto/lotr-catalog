import { CharacterRepositoryInterface } from '../../characterRepository'
import { Character } from '../../../models/Character'

interface characterFile {
  characters: Character[]
}

export class CharacterRepository implements CharacterRepositoryInterface {
  constructor(private fileLocation: string) {}

  public async getCharacters(): Promise<Character[]> {
    try {
      const response = await fetch(this.fileLocation, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      const json: characterFile = await response.json()

      return json.characters
    } catch (e) {
      throw 'error getting characters from file'
    }
  }
}
