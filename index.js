function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(target){
  return document.getElementById('nested').getElementsByTagName('target')
}

function increaseRankBy(n){
  var ranks = document.getElementsByTagName('ranked-list')
  for (var i = 0; i < ranks.length; i++){
    ranks[i] = parseInt(ranks[i]) + n
  }
}

function deepestChild(){
  
}
