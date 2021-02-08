var nameDinosaur = [
    'Dinosaur name: Triceratiops',
    'Dinosaur name: Troodon',
    'Dinosaur name: Tyrannosaurus',
    'Dinosaur name: Tyrannotitan',
    'Dinosaur name: Iguanodon',
    'Dinosaur name: Notoceratops',
    'Dinosaur name: Styracosaurus'
]

var meaning = [
    'Meaning: Three horned Face',
    'Meaning: Wounded tooth',
    'Meaning: Tyrant lizard',
    'Meaning: Tyrant titan',
    'Meaning: Iguana tooth',
    'Meaning: Southern horned face',
    'Meaning: Spiked lizard'
]
function newName() {
    var randomNumber = Math.floor(Math.random()*(nameDinosaur.length));
    document.getElementById('dinosaurName').innerHTML = nameDinosaur[randomNumber];
    document.getElementById('nameMeaning').innerHTML = meaning[randomNumber];
}

