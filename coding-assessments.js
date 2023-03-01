
// 1. Given an integer n. Loop from 1 to n and print each number from 1 to n. There are some special cases though. For numbers divisible by 5, print “Knose” instead. For numbers divisible by 7, print “Pet Care Made Easy”. For numbers divisible by 5 and 7, print “Knose Pet Care Made Easy”.
/*
 * @params size{number}
 */
function loopKnose(size) {
    for (let i = 1; i <= size; i++) {
        if (i % 5 === 0) {
            console.log("Knose");
        } else if (i % 7 === 0) {
            console.log("Pet Care Made Easy");
        } else {
            console.log(i);
        }
    }
}
loopKnose(35)

// 2. Given an integer n. Print the corresponding figure using '-' and '*' as shown in the following example.
/*
* @params size{number}
*/

function figurePattern(size) {
    let pattern = "";
    for (let i = 0; i < size; i++) {
        for (let j = 1; j < size - i; j++) {
            pattern += "-";
        }
        for (let j = size; j > size - i - 1; j--) {
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern);
};
figurePattern(35)
// 3. If you are to develop your own sorting method, how would you implement it? Given a set of integers, how will you sort them from lowest to highest?

// Answer: Possibly if I will use a sorting method aside from using the built-in sorting function of a programming language, I will probably use Quick Sort for its highly efficient and widely used sorting algorithm, and it is a good choice for sorting large arrays and for applications that require fast sorting. It is also known for the approach of divide-and-conquer by selecting a pivot element from the array, partitioning the array into two sub-arrays, and recursively sorting each sub-array. Below are the implementation: 

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const leftSet = new Set();
    const rightSet = new Set();

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftSet.add(array[i]);
        } else {
            rightSet.add(array[i]);
        }
    }

    return [...quickSort(Array.from(leftSet.values())), pivot, ...quickSort(Array.from(rightSet.values()))];
}
const arr = [...Array(1000).keys()].map((x) => (x * 16).toString(36));
console.log(quickSort(arr));
// I used a javascript Set for storing the left and right values for better performance of write instead of a simple array.Although the duplicate values in array will be removed in Set, it strongly has better performance for its writing(Array.push vs Set.add), which is recommended usage in sorting algorithms such as Quick Sort.