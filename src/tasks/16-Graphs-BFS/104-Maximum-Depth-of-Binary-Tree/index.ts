function maxDepthBFS(root: TreeNode | null): number {
  if (!root) return 0;

  let depth = 0;
  let queue: TreeNode[] = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    depth++;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;

  /*  More clumsy
  if (!root.val) return 0;
    let depth = 1;
    const queue = [[root.left, root.right]];

    while(queue.length) {
        const currLevel = queue.shift();
        if (currLevel.length) {
            const newLevel = []
            depth++;
            for (let i = 0; i< currLevel.length; i++) {
                const curr = currLevel[i];
                if (curr && curr.left) newLevel.push(curr.left);
                if (curr && curr.right) newLevel.push(curr.right);
            }

            queue.push(newLevel)
        }   
    }

    return depth;

  */
}
