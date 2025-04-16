function findTilt(root: TreeNode | null): number {
  let tiltSum = 0;
  if (!root) return tiltSum;

  function computeSum(node: TreeNode | null): number {
    if (!node) return 0;

    const leftSum = computeSum(node.left);
    const rightSum = computeSum(node.right);

    tiltSum += Math.abs(leftSum - rightSum);

    return node.val + leftSum + rightSum;
  }

  computeSum(root);

  // const queue = [root]

  // while(queue.length) {
  //     let length = queue.length

  //     for (let i = 0; i<length; i++) {
  //         let current = queue.shift();
  //         tiltSum += Math.abs(computeSum(current.left) - computeSum(current.right))

  //         if (current.left) {
  //             queue.push(current.left)
  //         }
  //         if (current.right) {
  //             queue.push(current.right)
  //         }
  //     }
  // }

  return tiltSum;
}
