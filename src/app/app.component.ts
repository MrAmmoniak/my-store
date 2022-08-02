import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // name = 'Samuel';
  // age = 18;

  widthImg = 10;
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  error: string = ''

  hide = true;

  onRegister() {
    console.log(this.register)
  }

  register = {
    name: '',
    password: '',
    email: ''
  }
  person = {
    name: 'Samuel',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'

  }


  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    element.value;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }

  names: string[]= ['Nico', 'Juli', 'Marcos']
  newName: string= '';

  products: Product[] = [
    {
    name: 'El mejor juguete',
    price: 565,
    image: './assets/images/toy.jpg',
    category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
}
