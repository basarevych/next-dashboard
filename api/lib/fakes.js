"use strict";

const names = [
  "Herschel Resnick",
  "Eusebio Humphery",
  "Earlean Goffney",
  "Gia Gleaton",
  "Towanda Galdamez",
  "Celena Eldredge",
  "Kathrine Romanowski",
  "Tori Bickham",
  "Latina Simone",
  "Sha Boehman",
  "Edra Spurgin",
  "Chantelle Copland",
  "Mellie Stelly",
  "Jaye Westhoff",
  "Denita Albritton",
  "Rita Wallis",
  "Paul Akiyama",
  "Juliana Middleton",
  "Minna Durrant",
  "Althea Czerwinski",
  "Latia Swinney",
  "Regena Euell",
  "Emanuel Azcona",
  "Sebastian Wiest",
  "Paz Oesterling",
  "Shantel Quaid",
  "Marry Bowker",
  "Eleanore Guyer",
  "Adina Beltran",
  "Rodolfo Walke",
  "Isaias Cagney",
  "Brittany Geary",
  "Leanne Hoyle",
  "Jada Dahms",
  "Barton Wittner",
  "Babara Egnor",
  "Alvin Grimmer",
  "Michiko Keef",
  "Georgette Innis",
  "Jona Tapia",
  "Dudley Harvard",
  "Venita Dallman",
  "Francesca Holbert",
  "Norine Malick",
  "Chun Larson",
  "Nelson Mcreynolds",
  "Han Merchant",
  "Alden Paz",
  "Clayton Candelaria",
  "Corrine Rogue"
];

const title01 = [
  "Lead",
  "Senior",
  "Direct",
  "Corporate",
  "Dynamic",
  "Future",
  "Product",
  "National",
  "Regional",
  "District",
  "Central",
  "Global",
  "Relational",
  "Customer",
  "Investor",
  "Dynamic",
  "International",
  "Legacy",
  "Forward",
  "Interactive",
  "Internal",
  "Human",
  "Chief",
  "Principal"
];

const title02 = [
  "Solutions",
  "Program",
  "Brand",
  "Security",
  "Research",
  "Directives",
  "Implementation",
  "Integration",
  "Functionality",
  "Response",
  "Paradigm",
  "Tactics",
  "Identity",
  "Group",
  "Resonance",
  "Applications",
  "Optimization",
  "Operations",
  "Infrastructure",
  "Intranet",
  "Communications",
  "Web",
  "Branding",
  "Quality",
  "Assurance",
  "Impact",
  "Mobility",
  "Ideation",
  "Data",
  "Creative",
  "Configuration",
  "Accountability",
  "Interactions",
  "Factors",
  "Usability",
  "Metrics",
  "Team"
];

const title03 = [
  "Supervisor",
  "Associate",
  "Executive",
  "Liason",
  "Officer",
  "Manager",
  "Engineer",
  "Specialist",
  "Director",
  "Coordinator",
  "Administrator",
  "Architect",
  "Analyst",
  "Designer",
  "Planner",
  "Synergist",
  "Orchestrator",
  "Technician",
  "Developer",
  "Producer",
  "Consultant",
  "Assistant",
  "Facilitator",
  "Agent",
  "Representative",
  "Strategist"
];

function getInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getName() {
  return names[getInt(0, names.length - 1)];
}

function getTitle() {
  return (
    title01[getInt(0, title01.length - 1)] +
    " " +
    title02[getInt(0, title02.length - 1)] +
    " " +
    title03[getInt(0, title03.length - 1)]
  );
}

function getCountry(countries) {
  let codes = _.keys(countries);
  return countries[codes[getInt(0, codes.length - 1)]].name;
}

function getSalary() {
  return getInt(25, 225) * 1000;
}

module.exports = {
  getInt,
  getName,
  getTitle,
  getCountry,
  getSalary
};
