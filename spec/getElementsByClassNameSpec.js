var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
    // for each string in htmlStrings
    htmlStrings.forEach(function(htmlString) {
      // Set root element to current array element
      var $rootElement = $(htmlString);
      // append rootElement to body
      $('body').append($rootElement);
      // set new variable result to any element with 'targetClassName' using our written getElementsByClassName.js
      var result = getElementsByClassName('targetClassName');
      // set new variable result to built in getElementsByClassName method
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      // create array of elements from expectedNodeList (HTML/DOM object????)
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      // use equality check to determine if both arrays are equivalent. Can't use === because they are stored in different memory locations
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      // if equality is true, then function behaving as expected
      expect(equality).to.equal(true);
      // remove current $rootElement to prepare for next test
      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});