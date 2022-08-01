import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
  const morseWordsArray: string[] = morseCode.split('   ')
  const morseDecodedArray = morseWordsArray.map((Word) => {
    const morseCharactersArray = Word.split(' ')
    return morseCharactersArray.map((character) => MORSE_CODE[character])
  })
  return morseDecodedArray.join(' ').split(',').join('').trim()
}