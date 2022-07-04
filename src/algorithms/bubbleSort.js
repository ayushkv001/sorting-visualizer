export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, 0, array.length - 2, animations);
    return animations;
  }
  
  function bubbleSortHelper(
    mainArray,
    startIdx,
    endIdx,
    animations,
  ) {
    if (startIdx === endIdx) return;
    for(let i=0;i<=endIdx;i++)
    {
        for(let j=0;j<=endIdx-i-1;j++)
        {
            if(mainArray[j]>mainArray[j+1])
            {
                animations.push([j,j+1]);
                let temp =mainArray[j+1];
                mainArray[j+1]=mainArray[j];
                mainArray[j]=temp;
                animations.push([j,mainArray[j]]);
                animations.push([j,j+1]);
                animations.push([j+1,mainArray[j+1]]);
            }
        }
    }
  }
  
  