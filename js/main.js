function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = strSplit.sort(function(a, b) { 
      return b.length - a.length;
    });
    return longestWord[0]
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");

  alert(findLongestWord(prompt("Find the longest word")));