const cars = ["audi","bmw","mersedes","bmw","audi","mersedes","bentley"]
const duplicateCar = getCloneArrElem(cars)

function getCloneArrElem (arr) {
const sorted_arr = arr.slice().sort()
const result = []
    for(let i = 0; i < sorted_arr.length; i++ ) {
        if(sorted_arr[i + 1] === sorted_arr[i] ){
            result.push(sorted_arr[i])
        }else{
            console.log("")
        }
    }
    return result
}
console.log(duplicateCar)