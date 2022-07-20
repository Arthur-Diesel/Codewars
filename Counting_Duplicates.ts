export function duplicateCount (text: string): number {
    const array: string[] = text.split('')
    const lowerArray = array.map((element) => element.toLowerCase())
    const uniquesCharacters: string[] = []
    const nonUniquesCharacters: string[] = []
    let count: number = 0
    
    lowerArray.forEach((element) => {
      element = element.toLowerCase()
      
      if( uniquesCharacters.includes(element) ){
        if( !nonUniquesCharacters.includes(element) ) {
           nonUniquesCharacters.push(element)
           count++
         }
      } else {
        uniquesCharacters.push(element)
      }
      
    })
    
    return count
}