export const likes = (a : string[]) : string => {
    const length: number = a.length
    if(length === 0){
      return "no one likes this"
    } else if(length === 1) {
      return `${a[0]} likes this`
    } else if(length === 2) {
      return `${a[0]} and ${a[1]} like this`
    } else if(length === 3) {
      return `${a[0]}, ${a[1]} and ${a[2]} like this`
    } else {
      return `${a[0]}, ${a[1]} and ${length - 2} others like this`
    }
}