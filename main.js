let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3; // Number of elements initially present in nums1
let n = 3; // Number of elements in nums2

var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Index to track the end of the valid elements in nums1
    let j = n - 1; // Index to track the end of the valid elements in nums2
    let k = m + n - 1; // Index to track the end of the merged array in nums1

    // Merge nums1 and nums2 in-place
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, append them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

// Merge nums1 and nums2 into nums1
merge(nums1, m, nums2, n);

// Log the updated nums1 array
console.log(nums1);
