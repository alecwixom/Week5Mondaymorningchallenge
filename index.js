let small = []
let medium = []
let large = []
let finished = []

let sizeSorter = function (arr) {
    for (let i in arr) {
        if (arr[i].includes('s')) {
            small.push(arr[i])
        } else if (arr[i].includes('m')) {
            medium.push(arr[i])
        } else if (arr[i].includes('l')) {
            large.push(arr[i])
        }
    }
    // finished = small + medium + large
    finished = finished.concat(small).concat(medium).concat(large).join('')
    // finished = finished.split(',').join('')
    return finished
}

console.log(sizeSorter('sssmmmssslllmmm'));