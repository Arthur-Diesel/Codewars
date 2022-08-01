export function countSmileys(arr: string[]): number {
    const checkEyes = (c: string) => (c === ':' || c === ';')
    const checkNose = (c: string) => (c === '-' || c === '~')
    const checkMouth = (c: string) => (c === ')' || c === 'D')
    const smiles = arr.filter((string) => {
      const arrayOfParts = string.split('')
      if(arrayOfParts.length == 2){
        return (
          checkEyes(arrayOfParts[0]) && checkMouth(arrayOfParts[1])
        )
      } else if (arrayOfParts.length == 3){
        return (
          checkEyes(arrayOfParts[0]) && 
          checkNose(arrayOfParts[1]) && 
          checkMouth(arrayOfParts[2])
        )
      } else {
        return false
      }
    })
    return smiles.length;
}