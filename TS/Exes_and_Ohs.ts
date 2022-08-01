export function xo(str: string) {
    const array: string[] = str.split('')
    let countX: number = 0
    let countO: number = 0
    array.forEach((element) => {
      element.toLowerCase() === 'o' ? countO++ : null
      element.toLowerCase() === 'x' ? countX++ : null    
    })
    if(countX === countO) {
      return true
    } else {
      return false
    }
}