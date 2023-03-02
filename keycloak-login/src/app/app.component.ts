import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Bienvenue sur {{title}}!
      </h1>
      <span style="display: block">{{ title }} application de test</span>
<br>
      <img width="200" alt="Angular Logo" src="https://upload.wikimedia.org/wikipedia/fr/thumb/0/05/Logo_Universit%C3%A9_catholique_de_Lille.svg/langfr-800px-Logo_Universit%C3%A9_catholique_de_Lille.svg.png">
    <h2>Test de connexion avec keycloak ici </h2>
    <ul>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">connexion</a></h2>
    </ul>
    <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'keycloak-login';
}
