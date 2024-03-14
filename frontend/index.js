async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
 
  try {
    const [learnersResponse, mentorsResponse] = await axios.all([
      axios.get('http://localhost:3003/api/learners'),
      axios.get('http://localhost:3003/api/mentors')
    ]);

    const learners = learnersResponse.data;
    const mentors = mentorsResponse.data;

    learners.forEach(learner => {
      // Create the card element
      const card = document.createElement('div');
      card.classList.add('card');

      // Create the name element and append it to the card
      const name = document.createElement('h3');
      name.textContent = learner.fullName;
      card.appendChild(name);

      // Create the email element and append it to the card
      const email = document.createElement('div');
      email.textContent = learner.email;
      card.appendChild(email);

      const mentorsDropdown = document.createElement('div');
      mentorsDropdown.classList.add('dropdown');
      
      const arrow = document.createElement('h4');
      arrow.classList.add('closed'); // The arrow is 'closed' initially
      arrow.textContent = 'Mentors';
      mentorsDropdown.appendChild(arrow);
      
      const mentorsList = document.createElement('ul');
      mentorsList.style.display = 'none'; // The list should be hidden initially
      learner.mentors.forEach(mentorId => {
        // Find the mentor with the matching ID
        const mentor = mentors.find(m => m.id === mentorId);
        if (mentor) {
          // Create a list item for the mentor and append it to the mentors list
          const mentorItem = document.createElement('li');
          mentorItem.textContent = mentor.name;
          mentorsList.appendChild(mentorItem);
        }
      });
      mentorsDropdown.appendChild(mentorsList);
      
      card.appendChild(mentorsDropdown);
      
      // Add an event listener to the arrow
      arrow.addEventListener('click', () => {
        if (mentorsList.style.display === 'none') {
          mentorsList.style.display = 'block'; // Show the list
          arrow.classList.remove('closed');
          arrow.classList.add('open');
        } else {
          mentorsList.style.display = 'none'; // Hide the list
          arrow.classList.remove('open');
          arrow.classList.add('closed');
        }
      });
      // Append the card to the .cards container
      document.querySelector('.cards').appendChild(card);
    });

    document.querySelector('.cards').addEventListener('click', event => {
      const card = event.target.closest('.card');
      if (card) {
        const selectedCard = document.querySelector('.card.selected');
        if (selectedCard) {
          selectedCard.classList.remove('selected');
        }
        card.classList.add('selected');

        const info = document.querySelector('.info');
        info.textContent = `The selected learner is ${card.querySelector('h3').textContent}`;
      }
    });

    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;
  } catch (error) {
    console.log('Error occurred:', error);
  }
}

document.addEventListener('DOMContentLoaded', sprintChallenge5);


  // 👆 WORK WORK ABOVE THIS LINE 👆

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
// const footer = document.querySelector('footer');
//const currentYear = new Date().getFullYear();
//footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;