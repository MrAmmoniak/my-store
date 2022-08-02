const username: string = 'Samuel';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,2)

class person {
  constructor(public age: number, public lastName: string){

  }
}

const nico = new person(15, 'Molina')
nico.age;
