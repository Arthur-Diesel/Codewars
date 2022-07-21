export const digitalRoot = (n:number):number => {
    const arrayOfCharacters: string | string[] = n.toString().split('')
    const arrayOfNumbers: number[] = arrayOfCharacters.map((number) => parseInt(number))
    const sumOfNumbers: number = arrayOfNumbers.reduce((sum: number, num: number) => sum + num, 0)
    if(arrayOfCharacters.length != 1){
      return digitalRoot(sumOfNumbers)
    } else {
      return sumOfNumbers 
    }
};