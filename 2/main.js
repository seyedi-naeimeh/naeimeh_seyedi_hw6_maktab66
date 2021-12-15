
function sortByHeight(a) {

    //const sortedA = [...a].sort((a, b) => a - b).filter((num) => num !== -1)
    const sortedA = a.filter((num) => num !== -1).sort((a, b) => a - b)
    
    let arr=[]
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1)  {
            arr.push(i)
        }
    }

    for (let i = 0; i < arr.length; i++){
        sortedA.splice(arr[i],0,-1)
    }
        return  sortedA

}

console.log(sortByHeight([-1,150, 190, 170, -1, -1, 160, 180]))