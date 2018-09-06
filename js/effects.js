  // Also can pass in optional settings block
  /*
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  */

 var iq =  document.querySelector('.interview_questions');
 if (typeof(iq) != 'undefined' && iq != null)
 {

  var typed = new Typed('.interview_questions', {
    strings: [
      "What are you passionate about?", 
      "How would you describe your self?",
      "What are some design strategies you use?",
      "What does it mean to be a team player?",
      "What are some important lessions you've learned as an employee?",
      "What advice would you give to youself 5 years ago?"
    ],
    loop: true,
    loopCount: Infinity,
    startDelay: 600,
    typeSpeed: 45
  });

 }

 var giq =  document.querySelector('.grid_interview_questions');
 if (typeof(giq) != 'undefined' && giq != null)
 {

 }

  var typed = new Typed('.grid_interview_questions', {
    strings: [
      "What are you passionate about?", 
      "How would you describe your self?",
      "What are some design strategies you use?",
      "What does it mean to be a team player?",
      "What are some important lessions you've learned as an employee?",
      "What advice would you give to youself 5 years ago?"
    ],
    loop: true,
    loopCount: Infinity,
    startDelay: 600,
    typeSpeed: 45
  });



feather.replace()