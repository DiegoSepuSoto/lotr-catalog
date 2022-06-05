import { Character } from '../models/Character'

export interface CharacterRepositoryInterface {
  getCharacters(): Promise<Character[]>
}
