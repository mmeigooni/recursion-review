// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className, currentNode) {
  currentNode = currentNode || document.body;
  let nodeList = [];

  if (currentNode.classList.contains(className)) {
    nodeList.push(currentNode);
  }

  let childNodes = currentNode.childNodes;
  // recursive case
  if (childNodes) {
    for (let i = 0; i < childNodes.length; i++) {
      if (childNodes[i].classList) {
        nodeList = nodeList.concat(getElementsByClassName(className, childNodes[i]));
      }
    }
  }
  return nodeList;
};