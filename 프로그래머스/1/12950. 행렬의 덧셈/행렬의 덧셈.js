function solution(arr1, arr2) {
    let arr = []
    
    for(let i=0; i<arr1.length; i++){
        arr.push([])
        for(let j=0; j<arr1[0].length; j++){
            arr[i].push(arr1[i][j]+arr2[i][j])
        }
    }
    return arr
}