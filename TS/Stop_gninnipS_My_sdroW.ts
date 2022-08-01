export function spinWords(words: string): string {
    return words
      .split(' ')
      .map((word) => {
        if(word.length >= 5) {
          const arrayWord: string[] = word.split('')
          return arrayWord.reverse().join('')
        } else {
          return word
        }
      })
      .join(' ')
}