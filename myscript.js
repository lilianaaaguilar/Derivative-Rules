$(document).ready(function() {
  
  $(".question-text").on("click", function () {
		$(this).siblings(".answer").slideToggle();
  });

	$(".answer").on("click", function () {
		let $selected = $(this);
		let $question = $selected.closest(".question"); 
		let $answers = $question.children(".answer"); 

		if ($selected.hasClass("selected")) return;

		$selected.addClass("selected");

		//$answers.css("pointer-events", "none");

		if ($selected.hasClass("correct")) {
			$selected.addClass("correct-answer");
      
			$selected.find(".explanation").slideDown();
		} else {
			$selected.addClass("incorrect-answer");
    }
  });
  
});
