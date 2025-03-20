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
document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

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

  // If all fields are valid, submit the form (e.g., to a local server)
  alert("Form submitted successfully!");
});
