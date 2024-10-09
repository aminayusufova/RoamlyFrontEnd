// Function to dynamically create destination cards
function createCard(destination) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${destination.image}" class="card-img-top" alt="${destination.title}">
                <div class="card-body">
                    <h5 class="card-title">${destination.title}</h5>
                    <p class="card-text">${destination.description}</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    `;
}

// Function to fetch data from API and display it dynamically
async function fetchDestinations() {
    try {
        const response = await fetch('https://api.example.com/destinations');
        const data = await response.json();

        // Get container to insert cards
        const destinationsContainer = document.getElementById('destinations-container');

        // Loop through data and create cards dynamically
        data.forEach(destination => {
            destinationsContainer.innerHTML += createCard(destination);
        });

        // Add animation effect for cards
        addScrollEffect();
    } catch (error) {
        console.error('Error fetching destination data:', error);
    }
}

// Function to add scroll-based animation effect for cards
function addScrollEffect() {
    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.card');
        const triggerHeight = window.innerHeight / 5 * 4;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerHeight) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    });
}


window.onload = fetchDestinations;



document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('loginForm').style.display = 'block';
document.getElementById('signupForm').style.display = 'none';


