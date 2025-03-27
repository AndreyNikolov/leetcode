function gcdOfStrings(str1: string, str2: string): string {
  const iteration = Math.min(str1.length, str2.length);
  const canDivideStr = (sub: string, str: string) =>
    str.split(sub).filter((el) => el).length === 0;

  let result = "";
  for (let i = 0; i < iteration; i++) {
    const sub1 = str1.slice(0, i + 1);
    const sub2 = str2.slice(0, i + 1);

    if (sub1 !== sub2) return "";
    if (canDivideStr(sub1, str1) && canDivideStr(sub2, str2)) {
      result = sub1;
    }
  }

  return result;
}

/*
notes 
Since both strings contains multiples of the identical segment base, their concatenation must be consistent, 
regardless of the order (str1 + str2 = str2 + str1).

class Solution {
    public int gcd(int x, int y) {
        if (y == 0) {
            return x;
        } else {
            return gcd(y, x % y);
        }    
    }
    
    public String gcdOfStrings(String str1, String str2) {
        // Check if they have non-zero GCD string.
        if (!(str1 + str2).equals(str2 + str1)) {
            return "";
        }
        
        // Get the GCD of the two lengths.
        int gcdLength = gcd(str1.length(), str2.length());
        return str1.substring(0, gcdLength);
    }
}
*/
