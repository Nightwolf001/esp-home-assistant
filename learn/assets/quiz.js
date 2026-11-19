// Recall quiz component. Usage in a lesson:
//
//   <div class="quiz" data-answer="1" data-why="Short explanation shown after answering.">
//     <p class="q">Question text?</p>
//     <button>Option A</button>
//     <button>Option B</button>
//     <button>Option C</button>
//   </div>
//   <p class="quiz-score" data-quiz-score></p>
//
// data-answer is the zero-based index of the correct button. One attempt per question:
// the point is retrieval, so guessing until it turns green would defeat it.
(function () {
  var quizzes = Array.prototype.slice.call(document.querySelectorAll('.quiz'));
  var answered = 0;
  var correct = 0;

  function updateScore() {
    var el = document.querySelector('[data-quiz-score]');
    if (!el || answered < quizzes.length) return;
    el.textContent =
      correct + ' of ' + quizzes.length + ' from memory. ' +
      (correct === quizzes.length
        ? 'Solid. Tell your teacher and move on.'
        : 'Re-read the step you missed, then try again tomorrow without looking.');
  }

  quizzes.forEach(function (quiz) {
    var buttons = Array.prototype.slice.call(quiz.querySelectorAll('button'));
    var answer = Number(quiz.getAttribute('data-answer'));
    var feedback = document.createElement('p');
    feedback.className = 'feedback';
    feedback.setAttribute('aria-live', 'polite');
    quiz.appendChild(feedback);

    buttons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        var isRight = index === answer;
        buttons.forEach(function (b) { b.disabled = true; });
        buttons[answer].classList.add('right');
        if (!isRight) button.classList.add('wrong');
        feedback.textContent = (isRight ? 'Yes. ' : 'Not that one. ') + (quiz.getAttribute('data-why') || '');
        answered += 1;
        if (isRight) correct += 1;
        updateScore();
      });
    });
  });
})();
