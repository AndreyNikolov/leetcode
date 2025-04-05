function maximumOddBinaryNumber(s: string): string {
  /*let ones = s.replaceAll("0", "").length;

  let left = ones > 1 ? "1".repeat(ones - 1) : "";
  let middle = "0".repeat(s.length - ones);
  let right = "1";

  return left + middle + right;
  */

  let sArr = s.split("");

  let left = 0;

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "1") {
      if (i !== left) {
        let temp = sArr[left];
        sArr[left] = sArr[i];
        sArr[i] = temp;
      }
      left += 1;
    }
  }

  let temp = sArr[left - 1];
  sArr[left - 1] = sArr[s.length - 1];
  sArr[s.length - 1] = temp;
  return sArr.join("");
}

/*
 def maximumOddBinaryNumber(self, s: str) -> str:
        # Get n and char array
        N = len(s)
        arr = [char for char in s]

        left = 0
        right = N - 1
        while left <= right:
            
            # Increment left if equals 1
            if arr[left] == '1':
                left += 1
            # Decrement right if equals 0
            if arr[right] == '0':
                right -= 1
            # Swap if neither pointer can be iterated
            if left <= right and arr[left] == '0' and arr[right] == '1':
                arr[left] = '1'
                arr[right] = '0'
        
        # Swap rightmost 1 bit to the end
        arr[left - 1] = '0'
        arr[N - 1] = '1'

        return "".join(arr)

*/
