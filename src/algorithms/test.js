
let array = [];
array.push(4);
array.push(3);
array.push(5);
array.push(2);
array.push(7);
array.push(9);
array.push(8);
array.push(5);
array.push(6);
array.push(11);
array.push(1);

let animations=[];

function quickSort(array, low, high,animations) {
    if (low < high) {
  
        // let pi = partition(array, low, high,animations);
        let pivot = array[high];
        let i = (low - 1);
  
        for (let j = low; j <= high - 1; j++) {
  
            if (array[j] < pivot) {
  
                i++;
                // swap(array, i, j,animations);
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                // animations.push([i,j]);
                // animations.push([i,array[i]]);
                // animations.push([j,array[j]]);
            }
        }
        // swap(array, i + 1, high,animations);
        let temp = array[i+1];
        array[i+1] = array[high];
        array[high] = temp;
        // animations.push([i,high]);
        // animations.push([i,array[i]]);
        // animations.push([high,array[high]]);
        let pi= i+1;
        quickSort(array, low, pi - 1,animations);
        quickSort(array, pi + 1, high,animations);
    }
  }


quickSort(array,0,array.length-1,animations);

console.log(array);