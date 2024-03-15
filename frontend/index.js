
async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
 
  
    
    const learnersResponse =  await axios.get('http://localhost:3003/api/learners')
    const mentorsResponse = await axios.get('http://localhost:3003/api/mentors')
  

    const learners = learnersResponse.data;
    const mentors = mentorsResponse.data;
    const info = document.querySelector(".info")
    info.textContent = "No learner is selected"
    const formattedData = []

    
    learners.forEach(learner => {
      const result = {
        ...learner,
        mentors: learner.mentors.map(mentorID =>{
          const mentor = mentors.find(mentorobject => mentorobject.id === mentorID)
          return mentor.firstName + " " + mentor.lastName
        })
      }
      formattedData.push(result)
    });

    formattedData.forEach(learner => {
      const card = document.createElement('div')
      const name = document.createElement('h3')
      const email = document.createElement('div')
      const mentors = document.createElement('h4')
      const mentorsList = document.createElement('ul')
      card.appendChild(name)
      card.appendChild(email)
      card.appendChild(mentors)
      card.appendChild(mentorsList)
      learner.mentors.forEach(mentorsName =>{
        const li = document.createElement("li")
        li.textContent = mentorsName
        mentorsList.appendChild(li)
      })

    
    card.classList.add("card")
    mentors.classList.add("closed")
    name.textContent = learner.fullName
    email.textContent= learner.email
    mentors.textContent = "Mentors"
    document.querySelector(".cards").appendChild(card)
    card.addEventListener('click', evt => {

      if (!card.classList.contains('selected')) {

        document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'))

        card.classList.add('selected')

        info.textContent = `The selected learner is ${learner.fullName}`

      } else {

        info.textContent = 'No learner is selected'

        card.classList.remove('selected')

      }

    })
  })


    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY 2023`;
  // } catch (error) {
  //   console.log('Error occurred:', error);
  // }

}
document.addEventListener('DOMContentLoaded', sprintChallenge5);


  // 👆 WORK WORK ABOVE THIS LINE 👆

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
// const footer = document.querySelector('footer');
//const currentYear = new Date().getFullYear();
//footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;