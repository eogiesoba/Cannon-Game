var alertBot = (function() {
  function alertPOneMiss(gameInfo) {
    var turnP = $("<p>");
    if (gameInfo.player === "playerOne") {
      $(".gamemsgs").text("");
      var miss = $("<span id='red'>");
      miss.text("You missed! ");
      turnP.append(miss);
      turnP.append("Player 2's Turn");
      $(".gamemsgs").append(turnP);
    } else {
      $(".gamemsgs").text("Player 1 missed! Your Turn");
      $(".fireButton").removeClass("invisible");
    }
  }

  function alertPTwoMiss(gameInfo) {
    var turnP = $("<p>");
    if (gameInfo.player === "playerTwo") {
      $(".gamemsgs").text("");
      var miss = $("<span id='red'>");
      miss.text("You missed! ");
      turnP.append(miss);
      turnP.append("Player 1's Turn");
    } else {
      $(".gamemsgs").text("Player Two missed! Your Turn")
      $(".fireButton").removeClass("invisible");
    }
    $(".gamemsgs").append(turnP);
  }

  function alertPOneWin(gameInfo) {
    placeReloadButton();
    if (gameInfo.player === "playerOne") {
      $(".player-alerts").text("You WIN!")
    } else {
      $(".player-alerts").text("You LOSE...")
    }
    firebaseBot.resetGame(gameInfo);
  }

  function alertPTwoWin(gameInfo) {
    placeReloadButton();
    if (gameInfo.player === "playerTwo") {
      $(".player-alerts").text("You WIN!")
    } else {
      $(".player-alerts").text("You LOSE...")
    }
    firebaseBot.resetGame(gameInfo);
  }

  function placeReloadButton() {
    $("#control-box").empty();
    var alertDiv = $("<div>");
    alertDiv.addClass("col-md-4 col-md-offset-4 alert-box");
    var alertP = $("<p>");
    alertP.addClass("player-alerts");
    var playAgainBtn = $("<button>");
    playAgainBtn.attr("id", "play-again-btn");
    playAgainBtn.addClass("fireButton");
    playAgainBtn.text("PLAY AGAIN");
    alertDiv.append(alertP);
    alertDiv.append(playAgainBtn);
    $("#control-box").append(alertDiv);
    $("#play-again-btn").on("click", function() {
      location.reload();
    });
    $(".gamemsgs").empty();
  }

  var publicAPI = {
    alertPOneMiss: alertPOneMiss,
    alertPTwoMiss: alertPTwoMiss,
    alertPOneWin: alertPOneWin,
    alertPTwoWin: alertPTwoWin
  }

  return publicAPI;
})();
