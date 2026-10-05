const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingText = document.getElementById('selected-rating');

let selectedRating = null;

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    ratingBtns.forEach((b) => b.classList.remove('active'));
    e.target.classList.add('active');
    selectedRating = e.target.textContent;
  });
});

submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    selectedRatingText.textContent = selectedRating;
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
  } else { 
    alert('Please select a rating number first!');
  }
});
