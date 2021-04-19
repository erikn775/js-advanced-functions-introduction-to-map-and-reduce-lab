// Your code here
function mapToNegativize(sourceArray) {
    let newArray = sourceArray.map(array => array * -1);
    return newArray;
}

function mapToNoChange(sourceArray) {
    let newArray = sourceArray.map(array => array);
    return newArray;
}

function mapToDouble(sourceArray) {
    let newArray = sourceArray.map(array => array * 2);
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = sourceArray.map(array => array**2);
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(sourceArray){
    const reducer = (accumulator, currentValue) => {
        if(!accumulator) return false;
    }
    return sourceArray.reduce(reducer)
}