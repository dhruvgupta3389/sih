// Dummy data for mentors
const mentors = [
    { name: "John Doe", expertise: "Web Development", experience: "5 years", img: "mentor1.png" },
    { name: "Jane Smith", expertise: "Data Science", experience: "3 years", img: "mentor2.png" },
    { name: "Robert Brown", expertise: "Cybersecurity", experience: "7 years", img: "mentor3.png" },
    // More mentors can be added here
];

// Function to load mentor details
function loadMentors() {
    const mentorBox = document.getElementById('mentorBox');

    fetch('/get-mentors') // Fetching mentors from the server
        .then(response => response.json())
        .then(data => {
            data.forEach(mentor => {
                const mentorDiv = document.createElement('div');
                mentorDiv.classList.add('mentor-box');

                mentorDiv.innerHTML = `
                    <img src="${mentor.img}" alt="${mentor.name}">
                    <h3>${mentor.name}</h3>
                    <p>Expertise: ${mentor.expertise}</p>
                    <p>Experience: ${mentor.experience}</p>
                `;

                mentorDiv.addEventListener('click', function () {
                    alert(`Mentor Info: ${mentor.name}\nExpertise: ${mentor.expertise}\nExperience: ${mentor.experience}`);
                });

                mentorBox.appendChild(mentorDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const expertise = document.getElementById('expertise').value;
    const experience = document.getElementById('experience').value;

    const user = { name, expertise, experience };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            window.location.reload(); // Reload the page to show mentor details
        } else {
            alert('Login failed. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('profileIcon').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Load mentors when the page loads
window.onload = loadMentors;
