// code your solution here

function superbowlWin(record) {
    // Use the find() method to find the first win (where result is "W")
    const winRecord = record.find(game => game.result === "W");
  
    // If a win is found, return the year; otherwise, return undefined
    return winRecord ? winRecord.year : undefined;
   
  }
  console.log(superbowlWin(record));