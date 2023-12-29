function solution(nums, target) {
    const indicesMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices.has(complement)) {
            return [indicesMap.get(complement), i];
        }
        indicesMap.set(nums[i], i);
    }

    return null;
}