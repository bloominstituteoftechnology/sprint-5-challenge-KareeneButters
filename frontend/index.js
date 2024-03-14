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
    
      // Create the mentors list and append it to the card
      const mentorsList = document.createElement('ul');
      mentorsList.style.display = 'none';  // The list should be hidden initially
      learner.mentors.forEach(mentorName => {
        const mentorItem = document.createElement('li');
        mentorItem.textContent = mentorName;
        mentorsList.appendChild(mentorItem);
      });
      card.appendChild(mentorsList);
    
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
  } catch (error) {
    console.log('Error occurred:', error);
  }
  const footer = document.querySelector('footer');
const currentYear = new Date().getFullYear();
footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

}

sprintChallenge5();


  // 👆 WORK WORK ABOVE THIS LINE 👆

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
// const footer = document.querySelector('footer');
//const currentYear = new Date().getFullYear();
//footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;