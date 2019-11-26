var data = [
  {
    id: 1,
    name: "Kajak",
    category: "Sporty wodne",
    description: "Kajak dla jednej osoby",
    priece: 275
  },
  {
    id: 2,
    name: "Kamizelka raturnkowa",
    category: "Sporty wodne",
    description: "Skuteczna i modna",
    priece: 48.95
  },
  {
    id: 3,
    name: "Piłka nożna",
    category: "Piłka nożna",
    description: "Zaakceptowana przez federację pod względem wagi i wymiarów",
    priece: 19.5
  },
  {
    id: 4,
    name: "Chorągiewki do rogów boiska",
    category: "Piłka nożna",
    description: "Odmień swoje boisko, nadając mu profesjonalny sznyt",
    priece: 34.95
  },
  {
    id: 5,
    name: "Stadion",
    category: "Piłka nożna",
    description: "Stadion na 35 000 miejsc",
    priece: 79500
  },
  {
    id: 6,
    name: "Myśląca czapeczka",
    category: "Szachy",
    description: "Zwiększ wydajność mózgu o 75%",
    priece: 16
  },
  {
    id: 7,
    name: "Chwiejne krzesło",
    category: "Szachy",
    description: "Potajemnie doprowadź przeciwnika do irytacji",
    priece: 29.95
  },
  {
    id: 8,
    name: "Szachownica",
    category: "Szachy",
    description: "Zabawa dla całej rodziny",
    priece: 75
  },
  {
    id: 9,
    name: "Król(u) złoty",
    category: "Szachy",
    description: "Pozłacana, zdobiona diamentami figurka króla",
    priece: 1200
  }
];

module.exports = function() {
  return {
    products: data,
    categories: [...new Set(data.map(p => p.category))].sort(),
    orders: []
  };
};
