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
      // Create the card, name, email, and mentors list elements
      const card = document.createElement('div');
      card.classList.add('card');

      const name = document.createElement('h3');
      name.textContent = learner.name;
      card.appendChild(name);

      const email = document.createElement('div');
      email.textContent = learner.email;
      card.appendChild(email);

      const mentorsList = document.createElement('ul');
      mentorsList.style.display = 'none';

      // Create a list item for each mentor and append it to the mentors list
      learner.mentors.forEach(mentorId => {
        const mentor = mentors.find(m => m.id === mentorId);
        if (mentor) {
          const mentorItem = document.createElement('li');
          mentorItem.textContent = mentor.name;
          mentorsList.appendChild(mentorItem);
        }
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
}

sprintChallenge5();

const footer = document.querySelector('footer');
const currentYear = new Date().getFullYear();
footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👆 WORK WORK ABOVE THIS LINE 👆

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
// const footer = document.querySelector('footer');
//const currentYear = new Date().getFullYear();
//footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;