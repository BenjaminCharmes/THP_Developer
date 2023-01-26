string = "This is rehtona test"

function spinWords(string) {
  result = ""
  string.split(' ').forEach ( word => {
    if (word.length >= 5) {
      var arrayOfLetter = []
      for (let index = 0; index < word.length; index++) {
        arrayOfLetter.push(word[index])
      }
      arrayOfLetter.reverse()
      result += arrayOfLetter.join("") + " "
    } else {
      result += word + " "
    }
  })
  return result - " "
}

console.log(spinWords(string))