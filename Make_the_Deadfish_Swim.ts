export function parse(data: string): number[] {
    const commands = data.split('')
    const result: number[] = []
    let num: number = 0;
    commands.forEach((command) => {
      if(command === 'i'){
        num++
      } else if (command === 'd'){
        num--
      } else if (command === 's'){
        num = Math.pow(num, 2)
      } else if(command === 'o'){
        result.push(num)
      }
    })
    return result
}