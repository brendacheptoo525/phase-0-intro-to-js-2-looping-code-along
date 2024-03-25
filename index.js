function writeCards( arrayofnames, event ) {
    let cards = []
    for ( let i = 0; i < arrayofnames.length; i++ ) {
      cards.push( `Thank you, ${arrayofnames[i]}, for the wonderful ${event} gift!` )
    }
    return cards
  }
  
  function countDown( start ) {
    while ( start> 0 ) {
      console.log( start );
      start -= 1;
    }
    console.log( start );
  }