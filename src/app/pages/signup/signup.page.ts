import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  constructor() { }

  onSubmit() {
    console.log('Formulaire soumis');
    // Ajoutez ici la logique pour gérer l'inscription (ex. : appel à une API)
  }
}
