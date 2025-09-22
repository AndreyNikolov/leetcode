function simplifyPath(path: string): string {
  const stack = [];

  for (const dir of path.split("/")) {
    if (dir === "." || dir === "") {
      continue;
    } else if (dir === "..") {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }
  return "/" + stack.join("/");
}
