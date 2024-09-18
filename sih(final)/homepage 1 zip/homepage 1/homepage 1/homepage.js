const textArray = ["Technology", "Design", "Marketing", "Data Analyst" , "Healthcare" ,"Finance", "Entrepreneurship" , "Arts", "Bussiness"];
let textIndex = 0;

function changeText() {
    const textElement = document.querySelector(".changing-text");
    textElement.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 1000); // Text changes every 2 seconds

const reviewCarousel = document.querySelector('.reviews-carousel');
let scrollAmount = 0;

function scrollReviews() {
    scrollAmount += 2; // Change the speed if necessary
    reviewCarousel.scrollLeft = scrollAmount;
    if (scrollAmount >= reviewCarousel.scrollWidth) {
        scrollAmount = 0; // Reset scroll to start
    }
}

setInterval(scrollReviews, 50);

function filterMentors(category) {
    const mentorCards = document.querySelectorAll('.mentor-card');
    mentorCards.forEach(card => {
        card.style.display = 'none'; // Hide all cards
        if (card.getAttribute('data-category') === category || category === 'all') {
            card.style.display = 'block'; // Show only matching cards
        }
    });
}
const reviews = []; // Empty array to store reviews from the feedback form

// Event listener for form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the name and feedback from the form
    const name = document.getElementById('name').value || "Anonymous";  // If name is empty, set as Anonymous
    const feedback = document.querySelector('./feedback form').value;
    
    // Add the new review to the reviews array
    if(feedback) {
        reviews.push({ name: name, review: feedback, photo: 'default.jpg' });  // Placeholder for profile photo
        alert('Thank you for your feedback!');
    }
    
    // Reset the form after submission
    this.reset();
    
    // Re-render the reviews section to include the new review
    renderReviews();
});

// Show only 6 reviews at a time
let reviewsToShow = 6;

const reviewCardsContainer = document.getElementById('review-cards');
const showMoreButton = document.getElementById('show-more-btn');

function renderReviews() {
    // Clear the current cards
    reviewCardsContainer.innerHTML = '';

    // Show reviews up to the limit (reviewsToShow)
    for (let i = 0; i < reviewsToShow && i < reviews.length; i++) {
        const review = reviews[i];
        const reviewCard = `
          <div class="review-card">
            <img src="${review.photo}" alt="${review.name}'s photo">
            <h3>${review.name}</h3>
            <p>${review.review}</p>
          </div>
        `;
        reviewCardsContainer.innerHTML += reviewCard;
    }

    // Hide 'Show More' button if all reviews are displayed
    if (reviewsToShow >= reviews.length) {
        showMoreButton.style.display = 'none';
    } else {
        showMoreButton.style.display = 'block';  // Ensure it's visible when there are more reviews
    }
}

// Show more reviews on button click
showMoreButton.addEventListener('click', () => {
    reviewsToShow += 3; // Increase by 3
    renderReviews();
});

function togglePopup(popupId) {
    const popup = document.getElementById(`popup-${popupId}`);
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');
    
    popup.classList.toggle('active');
    content.classList.toggle('blurred');
    overlay.classList.toggle('active');
}