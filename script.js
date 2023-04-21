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



/**
  Find the maximum sum of a countiguous subarray of size 3
  Find the maximum sum of a countiguous subarray of size 3
  [4,2,1,7,8,1,2,-8,1,0]
           H 
        C
  TEMP =   1 +7  
  OPT = 10
  Counter = 2






 1- What makes H to mvoes and in which conditions does H stop?
  A- H stops moving once the counter is equal to 3, and up to the end of the array,
  2- When and how do we record TEMP ?
  A- We add each value at index H to TEMP as H is moving. When C moves , we substrict the value at index C from TEMP
  3- How do we update the OPT
  A- Once H stop, we compare current OPT to TEMP and we pick the MAX
  4- What makes C to mvoes and in which conditions does H stop?
  A- C move once counter size is equal to 3. 
  

// make window size var, make a current count var, make a max count var, H and C

for ( until end of arr) {
make check if H has reached 3 if so start recording current and moving C
make if statement everytime window size is 3 update current count and compare it to max count.
if max count is larger set as new max,
}

return max count

  -----------------------------------------------------------------------------------------------
    [4,2,2,7,21,8,12,10,7,4,23,11]

    Find the smallest subarray sum greater of equal 20


*/

/* return max sum of (n = window) contiguos integers */

function learningToSlide(arr, window) {

    let hunter = 0;
    let catchUp = 0;
    let currentSum = 0;
    let maxSum = -Infinity;


    while (hunter < arr.length) {

        currentSum += arr[hunter]

        if ((hunter - catchUp) === window) {
            console.log(currentSum - arr[catchUp])
            currentSum -= arr[catchUp];
            catchUp++
        }
        maxSum = Math.max(currentSum, maxSum)
        hunter++
    }

    return maxSum
}

//console.log(learningToSlide([4, 2, 1, 7, 8, 1, 2, -8, 1, 0], 3));

/* sliding window  + library  the reason we used a library was to optimize the comparison / iteration time

you have been given an integers array nums and an integer K.

if you find any duplicate elements and the absolute difference between there indices gives you a value <= k then you can return true.

if you couldn't find such element you can return false.

eg: nums[] = {4, 3, 1, 4} k = 5 indices of 4 is : 0 , 3
the abs value of indices = |0 - 3| = 3
which is <= k so we can return true.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false


*/


var containsNearbyDuplicate = function (nums, k) {

    let catchUp = 0;
    let hunter = 0;
    let window = {};

    while (hunter < nums.length) {
        const current = nums[hunter];

        if (current in window) {
            return true
        } else {
            window[current] = current;
        }

        if (hunter - catchUp === k) {
            delete window[nums[catchUp]];
            catchUp++
        }

        hunter++
    }
    return false
};


/* 
Matrix traversal example

check notebook for example
*/

function robotPaths(matrix) {
    // Write your code here
    let result = 0;
    let maxRows = matrix.length;
    let maxCol = matrix[0].length;

    function traverse(row, col) {
        /* out of bounds */
        if (row >= maxRows || row < 0 || col < 0 || col >= maxCol) {
            return;
        }
        /* visited previously */
        if (matrix[row][col] === null) {
            return;
        }

        /* Reached destination */
        if (row === maxRows - 1 && col === maxCol - 1) {
            result++
            return
        }

        /* mark Cell/Node/Vertex as visited*/
        let temp = matrix[row][col];
        matrix[row][col] = null;

        traverse(row + 1, col);
        traverse(row - 1, col);
        traverse(row, col + 1);
        traverse(row, col - 1);

        matrix[row][col] = temp;

    }

    traverse(0, 0);
    return result;

}


/* Alternate aproach with a library */

function robotPathsalternate(matrix) {
    // Write your code here
    let result = 0;
    let maxRows = matrix.length;
    let maxCol = matrix[0].length;

    let visited = new Set()

    function traverse(row, col) {
        let key = row + "_" + col;
        /* out of bounds */
        if (row >= maxRows || row < 0 || col < 0 || col >= maxCol) {
            return;
        }
        /* visited previously */
        if (visited.has(key)) {
            return;
        }

        /* Reached destination */
        if (row === maxRows - 1 && col === maxCol - 1) {
            result++
            return
        }

        visited.add(key);

        let temp = matrix[row][col];
        matrix[row][col] = null;
        traverse(row + 1, col);
        traverse(row - 1, col);
        traverse(row, col + 1);
        traverse(row, col - 1);
        matrix[row][col] = temp

        visited.delete(key)
    }

    traverse(0, 0);
    return result;

}


/* delete duplicate data in a linked list like a set  */

function condense(head) {
    // Write your code here
    if (head === null) {
        return head
    }

    let previous = null
    let current = head;
    let library = {};

    while (current !== null) {
        library[current.data] = library[current.data] + 1 || 0;

        if (library[current.data] > 0) {
            previous.next = current.next;
            current = current.next;
        } else {
            previous = current;
            current = current.next
        }

    }

    return head

}

/*

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

 

Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
Example 2:

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
Example 3:

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
 

Constraints:

n == candies.length
2 <= n <= 100
1 <= candies[i] <= 100
1 <= extraCandies <= 50



 /*
               H
      [2,3,5,1,6]
       C

       maxCandies = 6
       current = 2


       // make hunter check all items in array compare the largest and set as the goal
       // once hunter reaches end of arr  start catch up phase and compare 
 */



function kidsWithCandies(candies, extraCandies) {

    let maxCandies = 0;
    let catchUp = 0;
    let hunter = 0;
    let result = [];


    while (catchUp < candies.length) {



        if (hunter >= candies.length) {
            candies[catchUp] + extraCandies >= maxCandies ? result.push(true) : result.push(false)
            catchUp++
        } else {
            maxCandies = Math.max(candies[hunter], maxCandies);
            hunter++
        }

    }

    return result;

};

console.log(kidsWithCandies([2, 3, 5, 1, 3]))




const spiralMatrix = (matrix) => {
    let row = 0;
    let col = 0;
    let res = [];

    while (matrix[row][col] !== undefined) {
        res.push(matrix[row][col]);
        matrix[row][col] = undefined;

        if (matrix[row][col + 1] !== undefined && matrix[row][col + 1] !== null) {
            col += 1;
        } else if (matrix[row + 1] && matrix[row + 1][col] !== undefined && matrix[row + 1][col] !== null) {
            row += 1;
        } else if (matrix[row][col - 1] !== undefined && matrix[row][col - 1] !== null) {
            col -= 1;
        } else if (matrix[row - 1] && matrix[row - 1][col] !== undefined && matrix[row - 1][col] !== null) {
            row -= 1;
        } else {
            break;
        }
    }

    return res;
};