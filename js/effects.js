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
      "How would you describe yourself?", 
      "What are you passionate about?",
      "What does it mean to be a good team player?",
      "What are some problem solving skills and strategies?",
      "Reach out, I'd love to hear from you.",
      "Tell me about your goals and organization!"
    ],
    loop: true,
    loopCount: Infinity,
    startDelay: 1800,
    typeSpeed: 95
  });

 }

 var giq =  document.querySelector('.grid_interview_questions');
 if (typeof(giq) != 'undefined' && giq != null)
 {

 }

  var typed = new Typed('.grid_interview_questions', {
    strings: [
      "How would you describe yourself?", 
      "What are you passionate about?",
      "What does it mean to be a good team player?",
      "What are some problem solving skills and strategies?",
      "What advice would you give to youself 5 years ago?",
      "Reach out, I'd love to hear from you.",
      "Tell me about your goals and organization!"
    ],
    loop: true,
    loopCount: Infinity,
    startDelay: 1800,
    typeSpeed: 95
  });



feather.replace()

// fitvids({
//   players: 'iframe[src*="google.com"]'
// })