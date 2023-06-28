document.addEventListener('DOMContentLoaded', () => {
  // Fetch animal data from the server
  fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => {
      const animalNamesList = document.getElementById('animal-names');
      const animalDetailsContainer = document.getElementById('animal-details');

      // Show the animal names list
      data.forEach(animal => {
        const listItem = document.createElement('li');
        listItem.textContent = animal.name;
        listItem.addEventListener('click', () => {
          // Display animal details when clicked
          displayAnimalDetails(animal);
        });
        animalNamesList.appendChild(listItem);
      });

      // Function to display animal details
      function displayAnimalDetails(animal) {
        animalDetailsContainer.innerHTML = `
          <img src="${animal.image}" alt="${animal.name}">
          <p>Votes: ${animal.votes}</p>`;
      }
    });

  // Vote button click event
  const voteButton = document.getElementById('vote-button');
  voteButton.addEventListener('click', () => {
    const voteInput = document.getElementById('vote-input');
    const votes = parseInt(voteInput.value, 10);
    if (!isNaN(votes)) {
      const animalDetailsContainer = document.getElementById('animal-details');
      const votesParagraph = animalDetailsContainer.querySelector('p');
      votesParagraph.textContent = `Votes: ${votes}`;
    }
  });

  // Reset button click event
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', () => {
    const animalDetailsContainer = document.getElementById('animal-details');
    const votesParagraph = animalDetailsContainer.querySelector('p');
    votesParagraph.textContent = 'Votes: 0';
  });
});