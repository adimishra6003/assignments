/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.toLowerCase(str1);
  str2 = str2.toLowerCase(str2);

  if(str1.length == str2.length){
    
    let searchIndex = 0;
    for(let i=0;i<str1.length;i++){
      searchIndex = str2.indexOf(str1[i]);
      if(searchIndex == -1){
        return false;
      }
    }
    return true;
  }
  return false;
}
module.exports = isAnagram;
