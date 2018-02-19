class CityLoft {
  constructor(rooms, bathrooms, squarefeet) {
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.squarefeet = squarefeet; 
  }

  haveBrunch(guests) {
    return console.log(`You are entertaining ${guests} guests for this brunch.`);
  }

  eatFood() {
    return console.log(`Your bathroom is backed up! Many guests had to go!`)
  }
}

const PatrickApartment = new CityLoft('studio', 1, 650);

PatrickApartment.haveBrunch(4);
PatrickApartment.eatFood();