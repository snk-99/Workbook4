let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
    },
];

// Who is the Academy Member whose ID is 187?
for (let i = 0; i < academyMembers.length; i++) {
    const e = academyMembers[i];
    if (e.memID == 187) {
        console.log(e.name);
    }
}
// Who has have been in at least 3 films?
// let film = [];
for (let i = 0; i < films.length; i++) {
    const film = films[i];
    // if (film.film > 3) {
    // }
    console.log(film);
}

// Who has a name that starts with "Bob"?

// HARDER: Which Academy Members have been in a film
// that starts with "A"
