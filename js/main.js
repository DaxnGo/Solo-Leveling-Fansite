// Initialize AOS animation library
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navList.classList.remove("show");
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Character details modal functionality
  const modal = document.getElementById("characterModal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.querySelector(".close-modal");
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  // Character data
  const characterData = {
    jinwoo: {
      name: "Sung Jin-Woo",
      image: "../Images/Sung Jin-Woo.webp",
      title: "The Shadow Monarch",
      description:
        "Sung Jin-Woo started as the weakest E-rank hunter known as 'the world's weakest hunter.' After nearly dying in a double dungeon, he received the mysterious 'System' that allows him to level up through completing quests and defeating enemies, essentially turning his life into a game. As he grows in power, he gains the ability to extract shadows from the corpses of powerful enemies and turn them into his loyal shadow soldiers.",
      abilities: [
        "Shadow Extraction and Control",
        "Endless Leveling System",
        "Enhanced Physical Strength and Speed",
        "Domain Expansion (Ruler's Authority)",
        "Magical Resistance",
      ],
    },
    chahaein: {
      name: "Cha Hae-In",
      image: "../Images/Cha Hae-In.webp",
      title: "S-Rank Hunter",
      description:
        "Cha Hae-In is one of South Korea's top S-rank hunters, known for her exceptional swordsmanship. She possesses a unique ability to smell other hunters, which she generally finds unpleasant. However, she's mysteriously drawn to Sung Jin-Woo, who has a different scent that she finds attractive. As the story progresses, she becomes increasingly interested in Jin-Woo and eventually fights alongside him.",
      abilities: [
        "Master Swordsmanship",
        "Enhanced Reflexes",
        "Superior Agility",
        "Keen Smell (can detect other hunters)",
        "S-Rank Magic Resistance",
      ],
    },
    gogunhee: {
      name: "Go Gun-Hee",
      image: "../Images/Go Gun-hee.webp",
      title: "Chairman of the Korean Hunter Association",
      description:
        "Despite his elderly appearance, Go Gun-Hee is one of the most powerful S-rank hunters in Korea and serves as the Chairman of the Korean Hunter Association. He recognizes Jin-Woo's potential early on and takes a special interest in his growth, often assigning him to crucial missions. Though physically limited by his age, his experience and wisdom make him an invaluable ally.",
      abilities: [
        "Exceptional Strategic Mind",
        "Powerful Authority",
        "S-Rank Magic Powers (limited by age)",
        "Expert Hunter Knowledge",
        "Political Influence",
      ],
    },
    igris: {
      name: "Igris",
      image: "../Images/Igris.webp",
      title: "Knight of Shadows",
      description:
        "Once a general of the Shadow Monarch's army, Igris was one of the first powerful shadows that Sung Jin-Woo extracted. He is characterized by his loyalty, honor, and knight-like behavior. Igris serves as Jin-Woo's right-hand commander and is often sent to lead other shadows into battle. His swordsmanship is exceptional, even among high-ranking shadows.",
      abilities: [
        "Elite Swordsmanship",
        "Shadow Armor",
        "Enhanced Speed and Strength",
        "Tactical Combat Intelligence",
        "Unwavering Loyalty",
      ],
    },
    iron: {
      name: "Iron",
      image: "../Images/Iron.webp",
      title: "Tank of Shadows",
      description:
        "Iron was originally a B-rank hunter who Jin-Woo defeated in a dungeon. As a shadow soldier, Iron serves as the tank of Jin-Woo's shadow army, with his massive shield providing protection for both Jin-Woo and other shadows. Despite his intimidating appearance, Iron has a somewhat clumsy and comical personality among the shadows.",
      abilities: [
        "Exceptional Defense",
        "Shield Mastery",
        "High Durability",
        "Taunt Ability (draws enemy attention)",
        "Area Control",
      ],
    },
    beru: {
      name: "Beru",
      image: "../Images/Beru.webp",
      title: "Marshal of Shadows",
      description:
        "Formerly the Ant King from the Jeju Island raid, Beru is one of Jin-Woo's most powerful shadow soldiers. After being extracted, Beru demonstrates an almost fanatical loyalty to Jin-Woo, whom he refers to as 'my king.' Beru is exceptionally powerful and intelligent, capable of leading the shadow army in Jin-Woo's absence. His personality is unique among the shadows, often showing excitement in battle and a desire to please his master.",
      abilities: [
        "Exceptional Combat Strength",
        "Advanced Regeneration",
        "Flight",
        "Telepathic Communication",
        "Command Authority over Lesser Shadows",
      ],
    },
  };

  // Open modal with character data
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const characterId = button.getAttribute("data-character");
      const character = characterData[characterId];

      if (character) {
        modalContent.innerHTML = `
          <h3>${character.name} <span class="character-title">${character.title}</span></h3>
          <img src="${character.image}" alt="${character.name}">
          <p>${character.description}</p>
          <h4>Abilities:</h4>
          <ul>
            ${character.abilities.map((ability) => `<li>${ability}</li>`).join("")}
          </ul>
        `;

        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
      }
    });
  });

  // Close modal
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Restore scrolling
    });
  }

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});

// Add parallax effect to sections
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;

  // Apply parallax effect to various elements
  document.querySelectorAll("article, section").forEach((element) => {
    const distance = scrollPosition * 0.05;
    const elementPosition =
      element.getBoundingClientRect().top + scrollPosition;

    if (scrollPosition > elementPosition - window.innerHeight) {
      element.style.transform = `translateY(${distance}px)`;
    }
  });
});
