document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];

  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "auto";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "-100%"; // Start hidden
  subMenuEl.classList.add("flex-around");

  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");

  menuLinks.forEach((element) => {
    const link = document.createElement("a");
    link.href = element.href;
    link.textContent = element.text;
    topMenuEl.appendChild(link);
  });

  const topMenuLinks = document.querySelectorAll("#top-menu a");

  function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = "";
    subLinks.forEach((link) => {
      const subLinkEl = document.createElement("a");
      subLinkEl.href = link.href;
      subLinkEl.textContent = link.text;
      subMenuEl.appendChild(subLinkEl);
    });
  }

  topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName !== "A") return;

    topMenuLinks.forEach((link) => link.classList.remove("active"));

    const clickedLink = e.target;
    const menuText = clickedLink.textContent.toLowerCase();
    const linkObj = menuLinks.find((link) => link.text === menuText);

    if (!clickedLink.classList.contains("active")) {
      clickedLink.classList.add("active");

      if (linkObj && linkObj.subLinks) {
        buildSubmenu(linkObj.subLinks);

        // Position submenu below the clicked link
        const linkRect = clickedLink.getBoundingClientRect();
        subMenuEl.style.left = `${linkRect.left}px`; // Align left
        subMenuEl.style.top = `${linkRect.bottom}px`; // Position below
        subMenuEl.classList.add("submenu-active"); // Show submenu
      } else {
        subMenuEl.classList.remove("submenu-active"); // Hide submenu
      }
    } else {
      subMenuEl.classList.remove("submenu-active"); // Hide submenu when clicking again
    }
  });

  // ============================================================================================================

  ///////////////////////////////////////////////////////////////////////////////////////

  const servicesData = [
    {
      icon: "assets/images/service-icon-01.png",
      title: "Data Analysis",
      description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
      icon: "assets/images/service-icon-02.png",
      title: "Data Reporting",
      description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
      icon: "assets/images/service-icon-03.png",
      title: "Web Analytics",
      description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
      icon: "assets/images/service-icon-04.png",
      title: "SEO Suggestions",
      description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
  ];

  const servicesRow = document.querySelector(".services .row");

  if (!servicesRow) {
    console.error("❌ Services row not found in the document.");
    return;
  }

  servicesData.forEach((service, index) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-lg-6");

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item", "wow", "fadeIn");
    itemDiv.setAttribute("data-wow-duration", "1s");
    itemDiv.setAttribute("data-wow-delay", `${0.5 + index * 0.2}s`);

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon");
    const img = document.createElement("img");
    img.src = service.icon;
    img.alt = service.title;
    iconDiv.appendChild(img);

    const rightTextDiv = document.createElement("div");
    rightTextDiv.classList.add("right-text");
    const h4 = document.createElement("h4");
    h4.textContent = service.title;
    const p = document.createElement("p");
    p.textContent = service.description;
    rightTextDiv.appendChild(h4);
    rightTextDiv.appendChild(p);

    itemDiv.appendChild(iconDiv);
    itemDiv.appendChild(rightTextDiv);
    colDiv.appendChild(itemDiv);
    servicesRow.appendChild(colDiv);
  });
  new WOW().init();
});
///////////////////////////////////////////////////////////////////////////////////
const form = document.getElementById("contact");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  let name = document.getElementById("name").value.trim();
  let surname = document.getElementById("surname").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Email regex pattern
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    alert("Please enter your name.");
    return;
  }
  if (surname === "") {
    alert("Please enter your surname.");
    return;
  }
  if (email === "" || !emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (message === "") {
    alert("Please enter your message.");
    return;
  }

  // Store form data in localStorage
  let formData = {
    name: name,
    surname: surname,
    email: email,
    message: message,
  };

  localStorage.setItem("formData", JSON.stringify(formData));

  alert("Form submitted successfully! Data saved to local storage.");

  // Call the resetForm function to clear the form fields
  resetForm();
});

// Function to reset the form fields
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

//////////////////////////////////////////////////////////////////////
const cardData = [
  {
    icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Data Analysis",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
  },
  {
    icon: "https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2021/09/datareports-scaled.jpg",
    title: "Data Reporting",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
  },
  {
    icon: "https://media.licdn.com/dms/image/v2/D5612AQHojt7bqzkodA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710509149220?e=2147483647&v=beta&t=2QNzyrgwnCGUkwDqkH26VyqUuWQAvZ5Gvrnc4nimSOc",
    title: "Web Analytics",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
  },
  {
    icon: "https://nmgprod.s3.amazonaws.com/media/file/b6/2c/0a133179541db1755983b5f514d4/cover_image__8XwwA918__AdobeStock_275879381_Preview.jpeg.760x400_q85_crop_upscale.jpg",
    title: "SEO Suggestions",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
  },
  {
    icon: "https://www.investopedia.com/thmb/CHEeSQHPK9MJ6TPFZKcFLTa5eqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SMM_Final_4188900-b14da77d5eee49019768a7b839a19efb.jpg",
    title: "Social Media Marketing",
    description: "Helping brands grow their audience through social platforms.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIuAQqKf9w16Ap1k1Zs7i1U45tCLH1bgaJQ&s",
    title: "Content Marketing",
    description: "Creating valuable content to engage and retain customers.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQwkrGEyu2gbpH8qHh8gMDz7pbrGNmqGF-g&s",
    title: "Email Marketing",
    description: "Designing targeted email campaigns for better conversions.",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GcFxzAEwvICnbb9Q_i7dZE3dM93TaU5SyA&s",
    title: "UI/UX Design",
    description: "Enhancing user experience with modern and intuitive designs.",
  },
];

const cardContainer = document.getElementById("cardContainer");

function createCards() {
  cardData.forEach((service, index) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-3", "col-md-6", "mb-4"); // 4 cards per row on large screens, 2 per row on medium screens

    card.innerHTML = `
                    <div class="card shadow-sm">
                        <img src="${service.icon}" class="card-img-top p-3" alt="${service.title}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${service.title}</h5>
                            <p class="card-text">${service.description}</p>
                            <button class="btn btn-primary add-to-cart" data-index="${index}">Add to Cart</button>
                            <button class="btn btn-secondary learn-more" data-index="${index}">Learn More</button>
                        </div>
                    </div>
                `;

    cardContainer.appendChild(card);
  });

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      alert(`Added ${cardData[index].title} to cart!`);
    });
  });

  document.querySelectorAll(".learn-more").forEach((button) => {
    button.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      alert(`Learn more about ${cardData[index].title}!`);
    });
  });
}

createCards();
