document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  });
  // Sélectionnez le carrousel
const carousel = document.querySelector('.carousel-container');
// Sélectionnez le header/menu
const header = document.querySelector('header');

// Fonction pour gérer le changement de transparence du menu
function handleScroll() {
  const carouselBottom = carousel.getBoundingClientRect().bottom;

  if (carouselBottom <= 0) {
    // Ajouter la classe 'transparent-menu' lorsque le carrousel atteint le haut de la fenêtre
    header.classList.add('transparent-menu');
  } else {
    // Supprimer la classe 'transparent-menu' lorsque le carrousel n'est pas visible en haut de la fenêtre
    header.classList.remove('transparent-menu');
  }
}

// Écoutez l'événement de scroll et appelez la fonction handleScroll
window.addEventListener('scroll', handleScroll);
