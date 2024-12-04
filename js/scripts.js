 // navegação entre links
 
 document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();


      document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
      });

      document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('selected');
      });

      const targetId = this.getAttribute('href').substring(1);


      this.classList.add('selected');

      document.getElementById(targetId).classList.remove('hidden');
    });
  });

