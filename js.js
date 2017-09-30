var current_question = [];
current_state = 0;
// 0 -> Hieroglyph Selection
// 1 -> Hieroglyph Chosen, Input Blocked
// 2 -> Question on Screen, Card 1 Shown
// 3 -> Question on Screen, Card 2 Shown
// 4 -> Question on Screen, Card 3 Shown
// 5 -> Question on Screen, All Cards Shown
// 6 -> Question on Screen, All Cards Shown, Link Revealed

key_h_topleft   = "q"; //Selects top left puzzle
key_h_topmiddle = "w"; //Selects top middle puzzle
key_h_topright  = "e"; //Selects top right puzzle
key_h_botleft   = "a"; //Selects bottom left puzzle
key_h_botmiddle = "s"; //Selects bottom middle puzzle
key_h_botright  = "d"; //Selects bottom right puzzle
key_h_reset     = "r"; //Resets selected puzzle hieroglyphs
key_next        = "n"; //Moves on to next screen/reveals next clue
key_reveal_ans  = "q"; //Reveals all answers, but not the connection between them/the 4th in a sequence

document.onkeypress = function (e) {
  e = e || window.event;
  if ((current_state == 0) || (current_state == 1)) {
    if ((e.key == key_h_topleft) && ($("#hiero_a").hasClass("played") == false)) {
      $(".chosen").removeClass("chosen");
      $("#hiero_a").addClass("chosen");
      current_state = 1;
    }
    else if ((e.key == key_h_topmiddle) && ($("#hiero_b").hasClass("played") == false)) {
      $(".chosen").removeClass("chosen");
      $("#hiero_b").addClass("chosen");
      current_state = 1;
    }
    else if ((e.key == key_h_topright) && ($("#hiero_c").hasClass("played") == false)) {
      $(".chosen").removeClass("chosen");
      $("#hiero_c").addClass("chosen");
      current_state = 1;
    }
    else if ((e.key == key_h_botleft) && ($("#hiero_d").hasClass("played") == false)) {
      $(".chosen").removeClass("chosen");
      $("#hiero_d").addClass("chosen");
      current_state = 1;
    }
    else if ((e.key == key_h_botmiddle) && ($("#hiero_e").hasClass("played") == false)) {
      $(".chosen").removeClass("chosen");
      $("#hiero_e").addClass("chosen");
      current_state = 1;
    }
    else if ((e.key == key_h_botright) && ($("#hiero_f").hasClass("played") == false)) {
      $(".chosen").removeClass("chosen");
      $("#hiero_f").addClass("chosen");
      current_state = 1;
    }
  }
  if (current_state == 1) {
    if (e.key == key_next) {
      $("#hiero").fadeOut(750);
      $("#question_a").hide();
      $("#question_b").hide();
      $("#question_c").hide();
      $("#question_d").hide();
      $("#question_l").hide();

      load_question();
      if (current_question[5] == "connect") {
        $(".sequence").removeClass("sequence");
        $("#question_d").html("<h1>" + current_question[3] + "</h1>");
      }
      else if (current_question[5] == "sequence") {
        $("#question_a").addClass("sequence");
        $("#question_b").addClass("sequence");
        $("#question_c").addClass("sequence");
        $("#question_d").addClass("sequence");
        $("#question_l").addClass("sequence");

        $("#question_d").html("<h1>?</h1>");
      }

      $("#question_a").html("<h1>" + current_question[0] + "</h1>");
      $("#question_b").html("<h1>" + current_question[1] + "</h1>");
      $("#question_c").html("<h1>" + current_question[2] + "</h1>");
      $("#question_l").html("<h1>" + current_question[4] + "</h1>");

      $("#question").delay(1000).show();
      $("#question_a").delay(1250).fadeIn();
      current_state = 2;
    }
  }
  else if (current_state == 2) {
    if (e.key == key_next) {
      $("#question_b").fadeIn().css("display", "flex");
      current_state = 3;
    }
    else if (e.key == key_reveal_ans) {
      $("#question_b").fadeIn().css("display", "flex");
      $("#question_c").fadeIn().css("display", "flex");
      $("#question_d").fadeIn().css("display", "flex");

      current_state = 5;
    }
  }
  else if (current_state == 3) {
    if (e.key == key_next) {
      $("#question_c").fadeIn().css("display", "flex");
      if (current_question[5] == "connect") {
        current_state = 4;
      }
      else if (current_question[5] == "sequence") {
        $("#question_d").fadeIn().css("display", "flex");
        current_state = 5;
      }
    }
    else if (e.key == key_reveal_ans) {
      $("#question_b").fadeIn().css("display", "flex");
      $("#question_c").fadeIn().css("display", "flex");
      $("#question_d").fadeIn().css("display", "flex");

      current_state = 5;
    }
  }
  else if (current_state == 4) {
    if ((e.key == key_next) || (e.key == key_reveal_ans)) {
      $("#question_d").fadeIn().css("display", "flex");
      current_state = 5;
    }
  }
  else if (current_state == 5) {
    if (e.key == key_next) {
      $("#question_l").fadeIn();
      if (current_question[5] == "sequence") {
        $("#question_d").html("<h1>" + current_question[3] + "</h1>")
      }
      current_state = 6;
    }
  }
  else if (current_state == 6) {
    if (e.key == key_next) {
      $("#question").fadeOut(750);

      $(".chosen").addClass("played");
      $(".chosen").removeClass("chosen");

      $("#hiero").delay(1000).fadeIn(750);
      current_state = 0;
    }
  }
  if (e.key == key_h_reset) {
  $(".played").removeClass("played");
  }
}

function load_question() {
  temp = questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
  if (temp !== undefined) {
    current_question = temp;
  }
  else {
    alert("Out of questions");
  }
}
