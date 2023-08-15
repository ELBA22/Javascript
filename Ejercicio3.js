//Tercer enunciado.

array1 = [6, 4, 7, 3, 8, 2]
target1 = 10
array2 = []

for (key in array1) { 
    for (const key2 in array1) {
        if (array1[key] + array1[key2] == target1){
            console.log(array1[key],array1[key2])
            array3 = [array1[key],  array1[key2]]
            array2.push(array3)
        }
    }
}
console.log(array2)







//Elba Esther Garcia Bello.