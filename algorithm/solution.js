// Sort Array (using quick sort)
const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const pivotIndex = arr.length - 1;
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];

  let currentItem;
  for (let i = 0; i < pivotIndex; i++) {
    currentItem = arr[i];

    if (currentItem < pivot) {
      left.push(currentItem);
    } else {
      right.push(currentItem);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

//Calculate min and max sum of array
const miniMaxSum = (array) => {
  const sortArray = quickSort(array);
  let min = 0;
  let max = 0;
  for (let i = 0; i < sortArray.length; i++) {
    if (i < 4) {
      min += sortArray[i];
    }
    if (i > 0) {
      max += sortArray[i];
    }
  }
  console.log(min + " " + max);
};
