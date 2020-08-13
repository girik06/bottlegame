hideElement("Left");
hideElement("Right");
hideElement("Top");
hideElement("Bottom");
onEvent("button1", "click", function( ) {
  if (getNumber("text_input1") == 4) {
    timedLoop(500, function() {
      var y = randomNumber(1, 20);
      setText("label1", y);
      hideElement("Top");
      hideElement("Bottom");
      hideElement("Left");
      hideElement("Right");
      if (y < 5) {
        showElement("Bottom");
      }
      if (y > 15) {
        showElement("Top");
      }
      if (y > 5 && y < 10) {
        showElement("Left");
      }
      if (y > 10 && y < 15) {
        showElement("Right");
      }
    });
  }
  if (getNumber("text_input1") == 2) {
    timedLoop(500, function() {
      hideElement("Left");
      hideElement("Right");
      var x = randomNumber(1, 10);
      setText("label1", x);
      if (x > 5) {
        showElement("Right");
      }
      if (x < 5) {
        showElement("Left");
      }
    });
    timedLoop(10000, function() {
      stopTimedLoop();
    });
  }
});
