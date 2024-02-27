import React from "react";

const TwoSum = () => {
  const findTwoSum = (nums, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        // Since the indices are 1-indexed, add 1 to both indices
        return [left + 1, right + 1];
      } else if (sum < target) {
        // If the sum is less than the target, move the left pointer to the right
        left++;
      } else {
        // If the sum is greater than the target, move the right pointer to the left
        right--;
      }
    }

    // The function should always return a result due to the problem constraints
    return [];
  };

  const numbers = [2, 7, 11, 15];
  const target = 9;

  // const numbers = [2, 3, 4];
  // const target = 6;

  // const numbers = [-1, 0];
  // const target = -1;

  return (
    <div>
      <h3>Two Sum</h3>
      <div>
        Numbers: [
        {numbers.map((number, index) => (
          <React.Fragment key={index}>
            {number}
            {index < numbers.length - 1 && ", "}
          </React.Fragment>
        ))}
        ]
      </div>
      <div>
        <p>Target: {target}</p>
      </div>
      <div>
        Results: [
        {findTwoSum(numbers, target).map((num, i) => (
          <React.Fragment key={i}>
            {num}
            {i < 1 && ","}
          </React.Fragment>
        ))}
        ]
      </div>
    </div>
  );
};

export default TwoSum;
