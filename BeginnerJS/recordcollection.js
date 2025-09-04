// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Update function
function updateRecords(records, id, prop, value) {
  if (value === "") {
    // If value is empty, delete that property
    delete records[id][prop];
  } else if (prop === "tracks") {
    // If the property is tracks but doesn’t exist, create it as an array
    records[id][prop] = records[id][prop] || [];
    // Add the new track to the end
    records[id][prop].push(value);
  } else {
    // For all other props, just set the value
    records[id][prop] = value;
  }
  return records;
}

// Example test cases:
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA')); 
// Should set artist to "ABBA"

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")); 
// Should create tracks array and add the song

console.log(updateRecords(recordCollection, 2548, "artist", "")); 
// Should delete artist from album 2548

console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")); 
// Should add track to album 1245

console.log(updateRecords(recordCollection, 2468, "tracks", "Free")); 
// Should add track "Free" to 2468

console.log(updateRecords(recordCollection, 2548, "albumTitle", "Slippery When Wet")); 
// Should update albumTitle
