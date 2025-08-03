const birdFacts = [
  "There are over 10,000 known species of birds worldwide!",
  "Hummingbirds can flap their wings up to 80 times per second.",
  "Owls can rotate their heads up to 270 degrees.",
  "The ostrich is the largest bird and cannot fly.",
  "Peregrine falcons can reach speeds over 200 mph!",
  "Flamingos get their pink color from their diet of shrimp and algae."
];

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * birdFacts.length);
  document.getElementById("fact-display").innerText = birdFacts[randomIndex];
}
