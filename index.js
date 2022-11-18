const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const allCats = [...cats, name];
    return allCats;
}

function prependCat(name) {
    const moreCats = [name, ...cats];
    return moreCats;
}

function removeLastCat() {
    const lessCats = cats.slice(0, cats.length - 1);
    return lessCats;
}

function removeFirstCat() {
    const lessKitties = cats.slice(1);
    return lessKitties;
}