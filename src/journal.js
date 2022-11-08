function Journal(entrys, words) {
  this.entrys = entrys;
  this.words = words;
}





// let wordCount = 0;
// const countArray = text.trim().split(' ');
// countArray.foreach(function(element){
//   if (!numbers(element)) {
// } wordCount++;
//   }



Entry.prototype.numbersOfWords = function () {
  let try1 = document.getElementById("body").innertext;
  this.words = try1.split(' ').length;
  console.log(this.words);
  return this.words;

}


function Entry(title, paraG) {
  this.title = title;
  this.paraG = paraG;
}

