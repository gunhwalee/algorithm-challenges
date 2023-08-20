const letterCombinations = (digits: string): string[] => {
  const result = [];
  if (digits.length === 0) return result;
  const digitsString = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  const backTracking = (string, index) => {
    if (string.length === digits.length) {
      result.push(string);
      return;
    }

    for (const letter of digitsString[digits[index]]) {
      backTracking(string + letter, index + 1);
    }
  };

  backTracking("", 0);
  return result;
};