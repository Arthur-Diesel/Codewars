export function findUniq(arr: number[]): number {
    let unique = 0
    arr.forEach((numb, index) => {
      if(index === arr.length - 1){
        if( !(numb === arr[index - 2] || numb === arr[index - 1]) ){
            unique = numb
        }
      } else {
        if( !(numb === arr[index + 1] || numb === arr[index - 1]) ){
            unique = numb
        }      
      }
    })
    return unique
}