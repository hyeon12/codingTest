function solution(arr, divisor) {
    arr = arr.filter(x => x%divisor === 0)
    return arr.length === 0 ? [-1] : arr.sort((a,b)=>a-b)
}