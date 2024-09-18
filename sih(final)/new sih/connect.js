// Load user information from local storage
function loadUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        // Display user info in the mentor container
        const mentorBox = document.getElementById('mentorBox');

        const mentorDiv = document.createElement('div');
        mentorDiv.classList.add('mentor-box');

        mentorDiv.innerHTML = `
            <img src="profile-icon.png" alt="${user.name}">
            <h3>${user.name}</h3>
            <p>Expertise: ${user.expertise}</p>
            <p>Experience: ${user.experience} years</p>
        `;

        mentorBox.appendChild(mentorDiv);
    }
}

// Function to load mentor details (could be extended to load more mentors)
function loadMentors() {
    loadUser(); // Load the logged-in user info

    // Additional logic to load other mentors could go here
}

// Toggle the dropdown menu on profile icon click
document.getElementById('profileIcon').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Load mentors when the page loads
window.onload = loadMentors;
