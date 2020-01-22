var context = new AudioContext();

var notesRaw = [
  {
    note: 1500,
    duration: 0.1,
    interval: 0.2
  },
  {
    note: 2500,
    duration: 0.1,
    interval: 0.2
  }
];

var batmanNotes = [
  {
    note: 150,
    duration: 0.25,
    interval: 0.215
  },
  {
    note: 250,
    duration: 0.8,
    interval: 0.24
  }
];

var notes = [];
for (var i = 0; i < 8; i++) {
  notes = notes.concat(notesRaw);
}
notes = notes.concat(batmanNotes);

function play(frequency, time, duration) {
  var o = context.createOscillator();
  var g = context.createGain();
  o.connect(g);
  g.connect(context.destination);
  g.gain.exponentialRampToValueAtTime(
    0.00001,
    context.currentTime + duration + time
  );
  o.frequency.value = frequency;
  o.start(time);
}

for (var i = 0; i < notes.length; i++) {
  play(notes[i].note, i * notes[i].interval, notes[i].duration);
}
