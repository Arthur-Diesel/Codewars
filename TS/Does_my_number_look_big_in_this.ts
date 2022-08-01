export function narcissistic(value: number): boolean {
    let sum = 0;
    const numberArray: string | string[] = value.toString().split('')
    numberArray.forEach((element) => {
      sum += Math.pow(parseInt(element), numberArray.length)
    })
    return sum === value
}