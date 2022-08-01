export class Vector { 
    public components: number[]
    constructor(components: number[]) {
        this.components = components
    }
    public checkLength(otherVector: Vector){
        if(this.components.length !== otherVector.components.length){
          throw 'Error!'
        }
    }
    add(otherVector: Vector){
        this.checkLength(otherVector)
        return new Vector (this.components.map((component, index) => component + otherVector.components[index]))
    }
    subtract(otherVector: Vector){
        this.checkLength(otherVector)
        return new Vector (this.components.map((component, index) => component - otherVector.components[index]))
    }
    dot(otherVector: Vector){
        this.checkLength(otherVector)
        return this.components.reduce((sum, act, index) => sum + (act * otherVector.components[index]), 0)
    }
    norm(){
        return Math.sqrt(this.components.reduce((sum, act) => sum + Math.pow(act, 2) , 0))
    }
    toString(){
        let string = '('
        this.components.forEach((component, index) => {
            if(index === this.components.length - 1){
                string += `${component}`
            } else {
                string += `${component},`
            }
        })
        string += ')'
        return string
    }
    equals(Vector: Vector){
        let isEqual = true
        if (Vector.components.length != this.components.length){
            isEqual = false
        }
        Vector.components.forEach((element, index) => {
            if(element != this.components[index]){
                isEqual = false
            }
        })
        return isEqual
    }
}
