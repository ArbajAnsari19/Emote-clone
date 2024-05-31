gsap.from("#branding", {
    opacity: 0,
    delay: 0.1,
    duration: 1,
    fontSize: "+30px",
    ease: "elastic.out(1, 0.5)" 
});

gsap.from("#web-design", {
    opacity: 0,
    delay: 0.1, 
    duration: 1,
    fontSize: "+30px", 
    ease: "elastic.out(1, 0.5)" 
});

gsap.from("#mobile-app", {
    opacity: 0,
    delay: 0.1, 
    duration: 1,
    fontSize: "+30px",
    ease: "elastic.out(1, 0.5)" 
});

gsap.from("#main-image", {
    opacity: 0,
    delay: 0.5, 
    z:-50,
    duration: 2,
});


function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('open');
}

function showContent(contentId) {
    const contents = document.querySelectorAll('[id^="content-"]');
    const buttons = document.querySelectorAll('button[id^="btn-"]');
    contents.forEach(content => content.classList.add('hidden'));
    buttons.forEach(button => button.classList.remove('text-black', 'font-bold'));
    document.getElementById(`content-${contentId}`).classList.remove('hidden');
    document.getElementById(`btn-${contentId}`).classList.add('text-black', 'font-bold');
}
// Get all the image elements
const images = document.querySelectorAll('.card img');

// Loop through each image element
images.forEach(image => {
  // Get the parent div element
  const card = image.parentElement;

  // Add event listeners
  image.addEventListener('mouseenter', () => {
    // Animate the dimensions of the parent div
    gsap.to(card, { 
        duration: 0.4,
        scale: 0.8,
        overflow: "hidden" 
    });
    gsap.to(image, {
      scale: 1.5,
    });


  });

  image.addEventListener('mouseleave', () => {
    // Reset the dimensions of the parent div
    gsap.to(card, { duration: 0.4, scale: 1 });
    gsap.to(image, {
      clearProps: "objectFit",
      duration: 0.4
    });
    gsap.to(image, {
        scale: 1,
      });
  });
});
function showContent(section) {
    // Hide all content divs
    document.querySelectorAll('[id^="content-"]').forEach(div => {
        div.classList.add('hidden');
    });

    // Remove active class from all buttons
    document.querySelectorAll('nav ul li button').forEach(btn => {
        btn.classList.remove('font-bold', 'text-black');
        btn.classList.add('text-gray-400', 'font-bold');
    });

    // Show the selected content div
    document.getElementById(`content-${section}`).classList.remove('hidden');

    // Add active class to the selected button
    const activeBtn = document.getElementById(`btn-${section}`);
    activeBtn.classList.add('font-bold', 'text-black');
    activeBtn.classList.remove('text-gray-400');

    // Show and position the active indicator circle
    const activeIndicator = document.getElementById('active-indicator');
    const discoverBtn = document.getElementById('btn-discover');
    if (section === 'discover') {
        activeIndicator.style.left = `${discoverBtn.offsetLeft + discoverBtn.offsetWidth / 2 - 10}px`;
    } else {
        activeIndicator.style.left = `${activeBtn.offsetLeft + activeBtn.offsetWidth / 2 - 10}px`;
    }

    // Change image based on section
    const imagePaths = {
        discover: 'assets/1.png',
        strategise: 'assets/2.png',
        structure: 'assets/3.png',
        create: 'assets/4.png',
        emote: 'assets/5.png'
    };

    document.getElementById('main-image').src = imagePaths[section];
}
// Position the active indicator circle below the "Discover" button on page load
window.addEventListener('DOMContentLoaded', () => {
    const discoverBtn = document.getElementById('btn-discover');
    const activeIndicator = document.getElementById('active-indicator');
    activeIndicator.style.left = `${discoverBtn.offsetLeft + discoverBtn.offsetWidth / 2 - 10}px`;
});

            function showCards(category) {
                // Hide all cards
                document.querySelectorAll('.cards').forEach(el => el.classList.add('hidden'));
    
                // Remove active class from all buttons
                document.querySelectorAll('.buttons button').forEach(button => button.classList.remove('active'));
    
                // Show selected category cards
                if (category === 'all') {
                    document.getElementById('all').classList.remove('hidden');
                    document.getElementById('view-more').style.display = 'block';
                    toggleCardsVisibility(document.getElementById('all'));
                    document.querySelector('.buttons button:nth-child(1)').classList.add('active');
                } else if (category === 'web-design') {
                    document.getElementById('web-design').classList.remove('hidden');
                    document.querySelector('.buttons button:nth-child(2)').classList.add('active');
                } else if (category === 'mobile-app') {
                    document.getElementById('mobile-app').classList.remove('hidden');
                    document.querySelector('.buttons button:nth-child(3)').classList.add('active');
                } else if (category === 'branding') {
                    document.getElementById('branding').classList.remove('hidden');
                    document.querySelector('.buttons button:nth-child(4)').classList.add('active');
                }
            }
    
            function toggleViewMore() {
                const allDiv = document.getElementById('all');
                allDiv.querySelectorAll('.card-container').forEach(card => card.style.display = 'block');
                document.getElementById('view-more').style.display = 'none';
            }
    
            function toggleCardsVisibility(container) {
                const cards = container.querySelectorAll('.card-container');
                cards.forEach((card, index) => {
                    if (index >= 6) {
                        card.style.display = 'none';
                    } else {
                        card.style.display = 'block';
                    }
                });
    
                if (cards.length > 6) {
                    document.getElementById('view-more').style.display = 'block';
                }
            }
    
            document.addEventListener('DOMContentLoaded', () => {
                toggleCardsVisibility(document.getElementById('all'));
            });



const bead = document.querySelector('.bead');
const container = document.querySelector('.button-container');
const radius = container.offsetWidth / 2; // Radius of the container

anime({
  targets: bead,
  rotate: '1turn',
  loop: true,
  duration: 5000, // Adjust the duration as needed
  easing: 'linear',
  translateX: function() {
    return radius * Math.cos(anime.getValueAtTime(this.currentTime, this.values.rotate) * Math.PI / 180);
  },
  translateY: function() {
    return radius * Math.sin(anime.getValueAtTime(this.currentTime, this.values.rotate) * Math.PI / 180);
  }
});


