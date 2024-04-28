let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3; // Number of elements in nums1
let n = 3; // Number of elements in nums2

var merge = function(nums1, m, nums2, n) {
    const mergedArray = [];
    let i = 0, j = 0;
    
    // Iterate over both arrays simultaneously
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    
    // Append remaining elements of nums1, if any
    while (i < m) {
        mergedArray.push(nums1[i]);
        i++;
    }
    
    // Append remaining elements of nums2, if any
    while (j < n) {
        mergedArray.push(nums2[j]);
        j++;
    }
    
    return mergedArray;
};

// Sort nums1 and nums2 into a single merged array
let mergedArray = merge(nums1, m, nums2, n);

// Log the sorted merged array
console.log(mergedArray);
