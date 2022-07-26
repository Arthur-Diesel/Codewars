export function duplicateEncode(word: string){
    let arrayWord: string[] = word.split('')
    arrayWord = arrayWord.map((c) => c.toLowerCase())
    const appearsMoreThanOnce = (array: string[], character: string) => {
      const firstIndex: number = array.indexOf(character)
      const lastIndex: number = array.lastIndexOf(character)
      if(firstIndex === -1 || lastIndex === -1) {
        return false
      } else if (firstIndex === lastIndex) {
        return false
      } else {
        return true
      }
    }
    return arrayWord.map((character) => appearsMoreThanOnce(arrayWord, character) ? ')' : '(').join('')
}