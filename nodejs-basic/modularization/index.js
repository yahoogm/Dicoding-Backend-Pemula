const Tiger = require("./Tiger");
const Wolf = require("./Wolf");

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  } else if (wolf.strength > tiger.strength) {
    return wolf.howl();
  } else {
    console.log("he same strength");
  }
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
