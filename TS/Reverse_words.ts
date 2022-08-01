export function reverseWords(str: string): string {
    const arrayOfStrings = str.split(' ')
    const newArrayOfStrings = arrayOfStrings.map((string) => {
      return string.split('').reverse().join('')
    })
    return newArrayOfStrings.join(' ');
}