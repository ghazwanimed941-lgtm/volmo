const cars = [
  {
    name: "Peugeot 208",
    category: "city",
    year: 2022,
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    price: 330,
    note: "Low fuel use"
  },
  {
    name: "Renault Clio 5",
    category: "city",
    year: 2023,
    transmission: "Manual",
    fuel: "Gasoline",
    seats: 5,
    price: 320,
    note: "Great in town"
  },
  {
    name: "Hyundai i10",
    category: "city",
    year: 2021,
    transmission: "Manual",
    fuel: "Gasoline",
    seats: 4,
    price: 280,
    note: "Compact and agile"
  },
  {
    name: "Kia Picanto",
    category: "city",
    year: 2022,
    transmission: "Manual",
    fuel: "Gasoline",
    seats: 4,
    price: 290,
    note: "Easy parking"
  },
  {
    name: "Dacia Sandero Stepway",
    category: "city",
    year: 2023,
    transmission: "Manual",
    fuel: "Gasoline",
    seats: 5,
    price: 340,
    note: "Adventure style"
  },
  {
    name: "Renault Megane",
    category: "family",
    year: 2022,
    transmission: "Auto",
    fuel: "Diesel",
    seats: 5,
    price: 420,
    note: "Long trip comfort"
  },
  {
    name: "Peugeot 308",
    category: "family",
    year: 2023,
    transmission: "Auto",
    fuel: "Diesel",
    seats: 5,
    price: 450,
    note: "Spacious trunk"
  },
  {
    name: "Toyota Corolla",
    category: "family",
    year: 2022,
    transmission: "Auto",
    fuel: "Hybrid",
    seats: 5,
    price: 480,
    note: "Quiet and clean"
  },
  {
    name: "Skoda Octavia",
    category: "family",
    year: 2021,
    transmission: "Auto",
    fuel: "Diesel",
    seats: 5,
    price: 470,
    note: "Perfect for families"
  },
  {
    name: "Citroen C4",
    category: "family",
    year: 2023,
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    price: 460,
    note: "Higher driving position"
  },
  {
    name: "Dacia Duster",
    category: "suv",
    year: 2022,
    transmission: "Manual",
    fuel: "Diesel",
    seats: 5,
    price: 430,
    note: "Versatile"
  },
  {
    name: "Nissan Qashqai",
    category: "suv",
    year: 2023,
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    price: 520,
    note: "Onboard tech"
  },
  {
    name: "Hyundai Tucson",
    category: "suv",
    year: 2022,
    transmission: "Auto",
    fuel: "Diesel",
    seats: 5,
    price: 540,
    note: "Premium comfort"
  },
  {
    name: "Kia Sportage",
    category: "suv",
    year: 2023,
    transmission: "Auto",
    fuel: "Diesel",
    seats: 5,
    price: 560,
    note: "Dynamic look"
  },
  {
    name: "Volkswagen Tiguan",
    category: "suv",
    year: 2021,
    transmission: "Auto",
    fuel: "Diesel",
    seats: 5,
    price: 590,
    note: "Stable ride"
  },
  {
    name: "Mercedes A-Class",
    category: "premium",
    year: 2023,
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    price: 680,
    note: "Business chic"
  },
  {
    name: "BMW 1 Series",
    category: "premium",
    year: 2022,
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    price: 690,
    note: "Sporty drive"
  },
  {
    name: "Audi A3",
    category: "premium",
    year: 2023,
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    price: 700,
    note: "High-end finish"
  },
  {
    name: "Mercedes GLA",
    category: "premium",
    year: 2022,
    transmission: "Auto",
    fuel: "Diesel",
    seats: 5,
    price: 740,
    note: "Premium SUV"
  },
  {
    name: "Range Rover Evoque",
    category: "premium",
    year: 2021,
    transmission: "Auto",
    fuel: "Diesel",
    seats: 5,
    price: 820,
    note: "Luxury signature"
  }
];

const grid = document.getElementById("fleet-grid");
const filters = document.querySelectorAll(".chip");

const shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const renderCars = (list) => {
  grid.innerHTML = "";
  list.forEach((car, index) => {
    const card = document.createElement("article");
    card.className = "car-card";
    card.style.setProperty("--delay", `${index * 0.03}s`);

    card.innerHTML = `
      <span class="car-pill">${car.category}</span>
      <div>
        <h3>${car.name}</h3>
        <p>${car.note}</p>
      </div>
      <div class="car-meta">
        <div>Year: ${car.year}</div>
        <div>Gearbox: ${car.transmission}</div>
        <div>Fuel: ${car.fuel}</div>
        <div>Seats: ${car.seats}</div>
      </div>
      <div class="car-price">
        <span class="price-tag">${car.price} DHS / day</span>
        <span>${car.year}</span>
      </div>
    `;

    grid.appendChild(card);
  });
};

const setActiveFilter = (target) => {
  filters.forEach((chip) => chip.classList.remove("is-active"));
  target.classList.add("is-active");
};

const applyFilter = (filter) => {
  if (filter === "all") {
    renderCars(shuffle(cars));
    return;
  }
  renderCars(shuffle(cars.filter((car) => car.category === filter)));
};

filters.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    setActiveFilter(chip);
    applyFilter(filter);
  });
});

renderCars(shuffle(cars));
