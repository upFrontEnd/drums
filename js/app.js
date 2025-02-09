function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
  const key   = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; // Si l'utilisateur appuie sur une touche différente de "Audio", le script se poursuivra sans erreur dans la console.

  key.classList.add('playing');
  audio.currentTime = 0; // On rembobine le son avant de le jouer
  audio.play();
}

function removeTransition(e) {
  e.target.classList.remove('playing');
}


const keys = Array.from(document.querySelectorAll('.key')); // Int fait un tableau de toutes les div ayant la classe .key

keys.forEach(
  key => key.addEventListener('transitionend', removeTransition)
);


window.addEventListener('keydown', playSound);