const profile = {
    name: "Daniel Naranjo",
    profession: "Software Developer",
    experience: "5 years",
    skills: ["JavaScript", "Python", "HTML", "CSS"],
    hobbies: ["Coding", "Reading", "Traveling"],
    contactEmail: "daniel@example.com"
};

const projects = [
    {
        title: "Project 1",
        description: "Description of project 1.",
        imageUrl: "path/to/your/project1-image.jpg"
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        imageUrl: "path/to/your/project2-image.jpg"
    }
    // Add more projects as needed
];

const book = {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    genre: "Self-help",
    yearPublished: 2020,
    description: "Think Like a Monk offers advice on how to overcome negative thoughts and habits, and access the calm and purpose that lie within all of us.",
    coverImageUrl: "path/to/your/think-like-a-monk-cover.jpg"
};

// Function to display profile information
function displayProfile() {
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-profession').textContent = profile.profession;
    document.getElementById('profile-experience').textContent = profile.experience;
    document.getElementById('profile-skills').textContent = profile.skills.join(', ');
    document.getElementById('profile-hobbies').textContent = profile.hobbies.join(', ');
    document.getElementById('profile-contact').href = `mailto:${profile.contactEmail}`;
}

// Function to display projects
function displayProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectElement.appendChild(projectTitle);
        
        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.alt = project.title;
        projectImage.classList.add('project-img');
        projectElement.appendChild(projectImage);
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectElement.appendChild(projectDescription);
        
        projectsContainer.appendChild(projectElement);
    });
}

// Function to display book information
function displayBook(book) {
    const bookContainer = document.getElementById('book-container');
    
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    bookContainer.appendChild(bookTitle);
    
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;
    bookContainer.appendChild(bookAuthor);
    
    const bookGenre = document.createElement('p');
    bookGenre.textContent = `Genre: ${book.genre}`;
    bookContainer.appendChild(bookGenre);
    
    const bookYear = document.createElement('p');
    bookYear.textContent = `Year Published: ${book.yearPublished}`;
    bookContainer.appendChild(bookYear);
    
    const bookDescription = document.createElement('p');
    bookDescription.textContent = book.description;
    bookContainer.appendChild(bookDescription);
    
    const bookCover = document.createElement('img');
    bookCover.src = book.coverImageUrl;
    bookCover.alt = book.title;
    bookCover.classList.add('book-cover');
    bookContainer.appendChild(bookCover);
}

let lastScrollPosition = 0;

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener("scroll", function () {
    const scrollToTopButton = document.querySelector(".scroll-to-top");
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 300 && currentScrollPosition > lastScrollPosition) {
        // Show the button when scrolling down
        scrollToTopButton.style.display = "flex";
    } else {
        // Hide the button when scrolling up
        scrollToTopButton.style.display = "none";
    }

    lastScrollPosition = currentScrollPosition;
});

// Call functions to display profile, projects, and book
document.addEventListener('DOMContentLoaded', () => {
    displayProfile();
    displayProjects();
    displayBook(book);
});