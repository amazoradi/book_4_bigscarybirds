// Your job is to create a large, flightless bird class that defines the properties of a feathered terror.It should have the following properties:

// height
// flightless(should always be true)
// isExtinct
// name
// running speed
// toString-- This will be a method that outputs a description of the bird based on some of its properties.Example output: "The Cassowary is a big, scary bird that stands up to 6 ft and can run up to 30 mph!"

// Our class
class bigScaryBird {

  constructor(prop) {
    this.height = prop.height
    this.flightless = prop.flightless
    this.isExtinct = prop.isExtinct
    this.name = prop.name
    this.typeOfTravel = prop.typeOfTravel
    this.Speed = prop.Speed
  }

  toString() {
    console.log(`The ${this.name} is a big, scary bird that stands up to ${this.height} and can ${this.typeOfTravel} up to ${this.Speed}`)
  }

}

// creating bird data
const kingPenguinProps = {
  height : "3 ft 3 in",
  flightless : true,
  isExtinct : false,
  name : "King Penguin",
  typeOfTravel : "swim",
  Speed : "6 mph"
}

const andeanCondorProps = {
  height : "10 ft 10 in",
  flightless : false,
  isExtinct : false,
  name : "Andean Condor",
  typeOfTravel : "fly",
  Speed : "87 mph"
}

const darwinRheaProps = {
  height : "3 ft 3 in",
  flightless : true,
  isExtinct : false,
  name : "Darwin's Rhea",
  typeOfTravel : "run",
  Speed : "37 mph"
}

const kingPenguin = new bigScaryBird(kingPenguinProps)
const andeanCondor = new bigScaryBird(andeanCondorProps)
const rhea = new bigScaryBird(darwinRheaProps)

kingPenguin.toString()
andeanCondor.toString()
rhea.toString()

