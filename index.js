
  // Code your solution in this file!
// Calculates the distance in blocks from a starting location to a destination
function distanceFromHqInBlocks(destination) {
    const hq = 42;
    let distance = Math.abs(destination - hq);
    return distance;
  }
  // Calculates the distance in feet from a starting location to a destination
  function distanceFromHqInFeet(destination) {
    const blockInFeet = 264;
    let distance = distanceFromHqInBlocks(destination) * blockInFeet;
    return distance;
  }
  // Calculates the distance travelled in feet given a starting location and destination
  function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(destination - start) * 264;
    return distance;
  }
  // Calculates the fare for a given distance travelled
  function calculatesFarePrice(start, destination) {
    const freeSampleDistance = 400;
    const flatFareDistance = 2000;
    const maxDistance = 2500;
    const flatFarePrice = 25;
    let distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <= freeSampleDistance) {
      fare = 0;
    } else if (distance <= flatFareDistance) {
      fare = (distance - freeSampleDistance) * 0.02;
    } else if (distance <= maxDistance) {
      fare = flatFarePrice;
    } else {
      fare = 'cannot travel that far';
    }
    return fare;
  }  
 