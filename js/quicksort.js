// Step 1 − Choose the highest index value has pivot
// Step 2 − Take two variables to point left and right of the list excluding pivot
// Step 3 − left points to the low index
// Step 4 − right points to the high
// Step 5 − while value at left is less than pivot move right
// Step 6 − while value at right is greater than pivot move left
// Step 7 − if both step 5 and step 6 does not match swap left and right
// Step 8 − if left ≥ right, the point where they met is new pivot

let array = []

for (let i = 0; i < 1000000; i++) {
    array[i] = Math.random()
}
function QuickSort(array, lower, higher) {
    if (lower < higher) {
        let pIndex = Partition(array, lower, higher)
        QuickSort(array, lower, pIndex - 1,)
        QuickSort(array, pIndex + 1, higher)
    }

}

function Partition(array, lower, highest) {
    let pivot = array[highest]
    let i = (lower - 1)
    for (let j = lower; j <= highest; j++) {
        if (array[j] < pivot) {
            i++
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    let temp = array[i + 1]
    array[i + 1] = array[highest]
    array[highest] = temp
    return (i + 1)
}
QuickSort(array, 0, array.length - 1)

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}