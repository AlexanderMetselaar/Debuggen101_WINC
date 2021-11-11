const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// 1

const shNames = superheroes.map((superhero) => {
    return superhero.name;
});

console.log(("All superheroes:", shNames))

// 2

const superLight = superheroes.filter((superhero) => {
    return superhero.weight < 190
});


console.log(superLight)

// 3

const superHeavy = superheroes.filter((superhero) => {
    return superhero.weight > 200
}).map((superhero) => {
    return superhero.name
});

console.log("De zware superhelden zijn: ", superHeavy)

// 4

const firstAppearance = superheroes.map((superhero) => {
    return superhero.first_appearance
})

console.log("The first apperanance was:", firstAppearance)

// 5

const shPublisher = superheroes.filter((superhero) => {
    return superhero.publisher == "DC Comics"
}).map((superhero) => {
    return superhero.name
})

console.log("Deze superheld is gepubliceerd bij DC Comics", shPublisher)

const shPublisher2 = superheroes.filter((superhero) => {
    return superhero.publisher == "Marvel Comics"
}).map((superhero) => {
    return superhero.name
})

console.log("Deze superheld is gepubliceerd bij Marvel Comics", shPublisher2)

// 6

const totalWeightDcComics = superheroes.filter((superhero) => {
    return superhero.publisher == "DC Comics";
}).reduce((currentTotal, superhero) => {
    parseInt(superhero.weight);
        return superhero.weight + currentTotal;
    }, 0);

console.log("Total weight DC:", totalWeightDcComics)