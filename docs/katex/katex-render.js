document.addEventListener("DOMContentLoaded", function () {
  var mathElements = document.getElementsByClassName("math");
    for (var i = 0; i < mathElements.length; i++) {
      var texText = mathElements[i].firstChild;
      if (mathElements[i].tagName == "SPAN") {
        katex.render(texText.data, mathElements[i], {
        displayMode: mathElements[i].classList.contains('display'),
        throwOnError: false,
        fleqn: false
        });
}}});
