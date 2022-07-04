/*export function getQuickSortAnimations(array) {

    WILL BE DEVELOPED LATER
    
  }
  
  
  
  */
 
 
 export function getQuickSortAnimations(array) {
   const animations = [];
   if (array.length <= 1) return array;
   quickSort(array, 0, array.length - 2, animations);
   for(let i=0;i<array.length-2;i++)
   animations.push([i,array[i]]);
   return animations;
  }
  
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
                animations.push([i,j]);
                animations.push([i,array[i]]);
                animations.push([i,j]);
                animations.push([j,array[j]]);
            }
        }
        let pi= i+1;
        // swap(array, i + 1, high,animations);
        let temp = array[pi];
        array[pi] = array[high];
        array[high] = temp;
        animations.push([pi,high]);
        animations.push([pi,array[pi]]);
        animations.push([pi,high]);
        animations.push([high,array[high]]);

        quickSort(array, low, pi - 1,animations);
        quickSort(array, pi + 1, high,animations);
    }
  }
// function swap(array, i, j,animations) {
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
//   animations.push([i,j]);
//   animations.push([i,array[i]]);
//   animations.push([[j,array[j]]]);
// }

// function partition(array, low, high,animations) {
 
//   let pivot = array[high];
//   let i = (low - 1);

//   for (let j = low; j <= high - 1; j++) {

//       if (array[j] < pivot) {

//           i++;
//           // swap(array, i, j,animations);
//           let temp = array[i];
//           array[i] = array[j];
//           array[j] = temp;
//           animations.push([i,j]);
//           animations.push([i,array[i]]);
//           animations.push([[j,array[j]]]);
//       }
//   }
//   // swap(array, i + 1, high,animations);
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
//   animations.push([i,j]);
//   animations.push([i,array[i]]);
//   animations.push([[j,array[j]]]);
//   return (i + 1);
// }



// function mergeSortHelper(
//   mainArray,
//   startIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   if (startIdx === endIdx) return;
//   const middleIdx = Math.floor((startIdx + endIdx) / 2);
//   mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//   mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//   doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

// function doMerge(
//   mainArray,
//   startIdx,
//   middleIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   let k = startIdx;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   while (i <= middleIdx && j <= endIdx) {
//     animations.push([i, j]);
//     animations.push([i, j]);
//     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     } else {
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     animations.push([i, i]);
//     animations.push([i, i]);
//     animations.push([k, auxiliaryArray[i]]);
//     mainArray[k++] = auxiliaryArray[i++];
//   }
//   while (j <= endIdx) {
//     animations.push([j, j]);
//     animations.push([j, j]);
//     animations.push([k, auxiliaryArray[j]]);
//     mainArray[k++] = auxiliaryArray[j++];
//   }
// }

