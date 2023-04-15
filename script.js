var removeDuplicates = function (nums) {
    const set = new Set(nums)
    nums.length = 0;
    nums.push(...set.values()) /* .values() returns an object */
    console.log(set)
    return set.size
};
//console.log(removeDuplicates([1,1,2]));


function reverseString(string) {
    let reversedStr = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i]
    }

    console.log(reversedStr)
}

//reverseString("abcd");


function same1(arr1, arr2) {
    const sortedArr1 = arr1.sort((a, b) => a - b)
    const sortedArr2 = arr2.sort((a, b) => a - b)

    for (let i = 0; i < sortedArr1.length; i++) {
        const exp = sortedArr1[i] * sortedArr1[i];

        if (exp !== sortedArr2[i]) {
            return false;
        }
    }

    return true

}


/* same problem With frequency counters */
function same(arr1, arr2) {
    const lib1 = {};
    const lib2 = {};
    //loop to populate both objects
    //add plus one every tiem a number appears for each obj
    for (let number of arr1) {
        lib1[number] = lib1[number] + 1 || 1;
    }
    for (let number of arr2) {
        lib2[number] = lib2[number] + 1 || 1;
    }

    /* compare and both libraries */
    for (let key in lib1) {
        console.log(key)

        /* make sure it is on our lib2 */
        if (!(key ** 2 in lib2)) return false

        /* make sure ocurrances match on both libs */
        if (lib2[key ** 2] !== lib1[key]) return false
    }

    return true

    // return true/false
}

//console.log(same([1,2,1], [1,4,1]))






/* only one Obj example */
function validAnagram(str1, str2) {
    //short cricuit if stng length is not the same
    if (str1.length !== str2.length) return false

    //create object
    const lib1 = {};
    // pupulate object key as letter and value as occurence;
    for (let char of str1) {
        lib1[char] = lib1[char] + 1 || 1
    }


    // loop through string and  subtract one of lib
    for (let i = 0; i < str1.length; i++) {
        letter = str2[i];

        // if undefined or 0 in our lib return false
        if (!lib1[letter]) {
            return false
        }

        lib1[letter] -= 1;
    }

    return true
}


//console.log(validAnagram("texttwiststime", "timetwiststext"))



function sumZero1(arr) {

    // make a loop for I to check combination of one num
    for (let i = 0; i < arr.length; i++) {
        // nest a loop to see i comibination of nums equals 0
        for (let j = i + 1; j < arr.length; j++) {


            if (arr[i] === arr[j]) continue;

            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }

    // make if statement to make sure it's not the same number 
    // if combination works return it


    // return an arr of the two number that added equal zero 
}


/* same function but with multiple pointers pattern  */

function sumZero(arr) {
    // declare start of arr
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right]

        if (sum === 0) return [arr[left], arr[right]]
        if (sum > 0) { right-- }
        if (sum < 0) { left++ }

    }


}
// return arr of numbers that added up equal zero 


//console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))







function sumZero2(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[count] !== arr[i]) {
            count++
            arr[count] = arr[i]
        }
    }

    return ++count
}


//console.log(sumZero2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 14, 14]))



function findOutlier(integers) {
    //your code here
    let even = 0;
    let odd = 0;
    let isEven;

    // create a variable to store the score of even or odd once it reaches 2 it is definitive arr is odd or even
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            even++
        } else {
            odd++
        }

        if (odd >= 2) { isEven = false; break }
        if (even >= 2) { isEven = true; break }

    }
    console.log(isEven)

    // create a second loop once arr is determined
    // if check depending on isEven to filoter the required number

    for (let i = 0; i < integers.length; i++) {
        // if is even 
        // number is odd retun number

        if (isEven) {
            if (!(integers[i] % 2 === 0)) {
                return integers[i]
            }
        } else {
            if (integers[i] % 2 === 0) {
                return integers[i]
            }
        }

        // else if odd 
        // return even
    }



    // return the unique number either odd or even
}

//console.log(findOutlier([2, 6, 8, 10, 3]))









var threeSum = function (nums) {
    const results = []

    if (nums.length < 3) return results

    nums = nums.sort((a, b) => a - b)
    let target = 0;

    for (let left = 0; left < nums.length - 2; left++) {
        if (nums[left] > target) break;
        console.log(nums[left], nums[left - 1])
        if (left > 0 && nums[left] === nums[left - 1]) continue;

        let j = left + 1;

        let right = nums.length - 1;

        while (j < right) {
            let sum = nums[left] + nums[j] + nums[right]

            if (sum === target) {

                results.push([nums[left], nums[j], nums[right]])
                while (nums[j] === nums[j + 1]) j++
                while (nums[right] === nums[right - 1]) right--

                j++
                right--

            } else if (sum < target) {
                j++

            } else { // (sum > target)
                right--
            }
        }
    }

    return results
};


//console.log(threeSum([-1,0,1,2,-1,-4]));

function countUniqueValues(arr) {
    if (arr.length < 1) return 0
    arr.sort((a, b) => a - b)
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1
}

//console.log(countUniqueValues([3,6,8,8,6]))


function XO(str) {
    //code here
    // transform str to lower case to deal with case sensiive cases
    const newStr = str.toLowerCase();
    if (!newStr.includes("o") && !newStr.includes("x")) return true;
    // create a library object so we can compare it later.
    const library = {}
    // loop trhough each letter and add it to the library.
    for (let i = 0; i < newStr.length; i++) {
        // if letter exists add 1 if not create a key with value 1
        library[newStr[i]] = library[newStr[i]] + 1 || 1;
    }

    // if for any reason if contains o but not x or viseversa return
    if (library.x === undefined || library.o == undefined) return false;

    // check if values match!
    if (library.o === library.x) {
        return true;
    } else {
        return false
    }
}

//console.log(XO("xxOo"))


function maxSubarraySum1(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum;
    console.log(tempSum, "first")

    for (let i = num; i < arr.length; i++) {
        console.log(tempSum)
        console.log(
            "tempSum - arr[i - num]", tempSum - arr[i - num],
            "arr[i]", arr[i],
            "tempSum - arr[i - num] + arr[i]", tempSum - arr[i - num] + arr[i]
        )

        tempSum = tempSum - arr[i - num] + arr[i]
        console.log("tempsum", tempSum)


        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

//console.log(maxSubarraySum([2,3,4,5,1,2,3,7,6,8,9,7,5,], 3))


//console.log(5 % 3)



function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


//console.log(['n','s','n','s','n','s','n','s','n','s'].length)

function findMissingLetter(arr) {
    // take an array of letters

    // convert it to a string
    const stringified = arr.join("")

    // take the first character in the string as a starting point for ancii. 
    let ascii = stringified.charCodeAt(0);

    for (let i = 0; i < stringified.length; i++) {

        // compare ascii code to our char, since the arr was ordered if it does not match we found our missing letter
        if (ascii !== stringified.charCodeAt(i)) {
            //convert it back to a letter
            return String.fromCharCode(ascii)
        }
        // add + 1 to the our ascii in each iteration
        ascii++
    }
}

//console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))

function averagePair(arr, target) {

    // declare two variables a start and an end, we can go from left and right or a scout technique

    if (arr.length < 1) return false;


    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        console.log(avg)
        if (avg === target) return true;

        if (avg < target) {
            left++
        } else {
            right--
        }
    }

    return false;
}

//console.log(averagePair([1,2,3],2.5))


function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    if (str1.length < 1) return false;
    let slow = 0;
    let scout = 0;

    while (slow < str2.length) {

        if (str1[slow] === str2[scout]) {
            slow++
        }

        if (slow === str1.length) return true;
        scout++
    }
    return false;
}

//console.log(isSubsequence('abc', 'abracadabra'))


function isSubsequence(str1, str2) {

    if (str1.length < 1) return true;
    let slow = 0;
    let scout = 0;

    while (scout < str2.length) {

        if (str1[slow] === str2[scout]) {
            slow++
        }

        if (slow === str1.length) {
            return true
        }
        scout++
    }
    return false
}



function maxSubarraySum(arr, window) {
    // create two variables one for maxSum the other for currentSum

    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < window; i++) {
        maxSum += arr[i]
    }

    currentSum = maxSum;

    for (let i = window; i < arr.length; i++) {
        currentSum = currentSum - arr[i - window] + arr[i]

        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum
}

//console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))




function minSubArrayLen(arr, target) {

    // one for the value of sum,
    let currentSum = 0;
    // one for the window size.
    let windowSize = 1;
    // make another for current sum
    let i = windowSize;

    while (windowSize < arr.length) {
        currentSum = currentSum - arr[i - windowSize] + arr[i];

        if (currentSum > target) {
            return windowSize
        }

        if (!(i < arr.length)) {
            windowSize++
            i = windowSize;
            currentSum = 0;
        }
        i++
    }

    return 0;

}


function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}



function rot13(message) {
    //your code here
    let res = "";


    for (let i = 0; i < message.length; i++) {
        let letter = message.charCodeAt(i)

        if (letter >= 65 && letter <= 90) {
            (letter + 13) < 90 ? res += String.fromCharCode(letter + 13) :
                res += String.fromCharCode(letter + 13 - 90 + 64)

        } else if (letter >= 97 && letter <= 122) {
            (letter + 13) < 122 ? res += String.fromCharCode(letter + 13) : res += String.fromCharCode(letter + 13 - 122 + 96)

        } else {
            res += message[i]
        }

    }
    return res
}

//console.log(rot13('abcdefghijklmnopqrstuvwxyz'))


/*
solution:


var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
  return message.split('').map(function(char) { 
    var code = char.charCodeAt(0);
    if(codeA <= code && code <= codeZ){
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if(codea <= code && code <= codez){
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}
 */




var plusOne = function (digits) {


    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits
        }
    }
}


//console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 0, 0]))


function latticePaths(row, col) {
    console.log(row, "row ", col, "col")
    if (row < 0 || col < 0) {
        return 0;
    }

    if (row == 0 && col == 0) {
        console.log("going back")
        return 1
    }

    let up = latticePaths(row - 1, col);
    let left = latticePaths(row, col - 1);
    return up + left
}

//console.log(latticePaths(2, 2));


function factorial(n) {
    console.log(n)
    if (n < 2) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}


//console.log(factorial(4))
function countDown(num) {
    if (num <= 1) {
        return 1
    }

    return num * countDown(num - 1)
}

//console.log(countDown(5))

function allOdds1(nums) {
    let res = [];

    function helper(arrOfNums) {
        if (arrOfNums.length === 0) {
            return
        }

        if (arrOfNums[0] % 2 !== 0) {
            res.push(arrOfNums[0])
        }


        helper(arrOfNums.slice(1))
    }


    helper(nums)

    return res;
}




function allOdds(numsArr) {
    let newArr = [];

    if (numsArr.length === 0) {
        return newArr;
    }

    if (numsArr[0] % 2 !== 0) {
        newArr.push(numsArr[0])
    }

    newArr = newArr.concat(allOdds(numsArr.slice(1)))
    return newArr
}

console.log(allOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))


function mregeTwoLists(arr1, arr2) {
    if (!arr1) return arr2;
    if (!arr2) return arr1;

    if (arr1.val <= arr2.val) {
        arr1.next = mregeTwoLists(arr1.next, arr2);
        return arr1
    } else if (arr2.val <= arr1.val) {
        arr2.next = mregeTwoLists(arr2.next, arr1);
        return arr2
    }



}




function coinSum(coinsInput, totalInput) {
    // Write your code here
    const lib = {};

    function findWays(total, coins) {

        let key = `${total}_${coins}`;

        if (key in lib) {
            return lib[key]
        }

        if (total < 0) {
            return 0
        } else if (coins.length === 0) {

            if (total > 0) {
                return 0;
            }
            return 1;
        }
        let left = findWays(total - coins[coins.length - 1], coins);
        let popped = coins.pop()
        let right = findWays(total, coins)
        coins.push(popped);

        lib[key] = left + right;
        return left + right
    }

    return findWays(totalInput, coinsInput)
}




function mergeArrays(a, b) {

    let result = [];


    let i = 0;
    let j = 0;


    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        } else if (a[i] > b[j]) {
            result.push(b[j]);
            j++;
        } else {

            result.push(a[i]);
            result.push(b[j]);
            i++;
            j++;
        }
    }


    while (i < a.length) {
        result.push(a[i]);
        i++;
    }

    while (j < b.length) {
        result.push(b[j]);
        j++;
    }

    return result;
}


/*

A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.



Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".


Constraints:

1 <= s.length <= 100
s​​​​​​ consists of lowercase English letters.
*/


var countGoodSubstrings = function (s) {
    const n = 3;
    let count = 0;
    let lib = {};
    let start = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] in lib) {
            start = Math.max(start, lib[s[i]] + 1)
            console.log(start, s[i])
        }

        lib[s[i]] = i;

        const windowSize = i - start + 1;
        if (windowSize >= n) count++;
    }
    console.log(lib)
    return count;

};
/*                                   |||
console.log(countGoodSubstrings("aababcabc"));

to get the math to reuired N there can only be 1 index diference between all three a, b, c
      0+ 1+ 2 = 3;
      so when math max makes the comparison it needs all indexes to be present
      within the range

if a letter was not previusly added to the lib then it will not enter the if and increment i, so:
windowSize = i - start + 1; will result in reaching n, in this case 3;
we add  + 1 since when we add the indx to start we +1 so start moves to a space that was not previously visited
*/



/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var deleteDuplicates = function (head) {
    let previous;
    let current = head;

    if (current === null) return head;


    while (current !== null) {

        if (current.next !== null && current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }

    }
    return head

};




/* 
breath travelsal example for

            C
           / \
    A --- B   E---F---D
           \ / \ /
            H   G

    Origin point: A

    return a string of all the nodes
*/

function bfs(origin) {
    // Write your code here

    if (origin === null) return "";

    let queue = [];
    let visited = {};
    let res = "";


    queue.push(origin);
    visited[origin.id] = true;

    while (queue.length > 0) {
        let current = queue.shift();
        let edges = current.edges;

        for (let i = 0; i < edges.length; i++) {
            let edge = edges[i];

            if (!visited[edge.id]) {

                queue.push(edge)
                visited[edge.id] = true
            }
        }
        res += current.id
    }

    return res
}

/* sliding window variation */

function learningToSlide(arr, window) {
    let hunter = 0;
    let catchUp = 0;
    let currentSum = 0;
    let maxSum = 0;

    while (hunter < arr.length) {

        if (hunter - catchUp === window) {
            currentSum -= arr[catchUp];
            catchUp++;
        }
        maxSum = Math.max(currentSum, maxSum);
        hunter++;
    }

    return maxSum;
}

console.log(learningToSlide([4, 2, 1, 7, 8, 1, 2, -8, 1, 0, 20], 3));