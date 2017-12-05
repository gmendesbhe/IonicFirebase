# Seguir os passos abaixo

1. Possuir ionic e cordova instalados  
`npm i -g ionic cordova`

2. Instalar as dependencias do projeto  
`npm i`

3. Foi utilizado o pacote npm *angularfire2* e seu modulo de autenticacao  
Este pacote e apenas um encapsulador das funcionalidades do firebase para Typescript  
[angular fire 2 auth module](https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md "Getting started with Firebase Authentication")

4. Criar um projeto no firebase

5. Obter o objeto de configuracao do projeto firebase ao adicionar uma aplicacao web

6. Sera necessario seguir tambem os passos listados pelo firebase  
[Authenticate Using OAuth Providers with Cordova](https://firebase.google.com/docs/auth/web/cordova "Authenticate Using OAuth Providers with Cordova")

7. Realizar o deploy da aplicacao no telefone pelo ionic  
`ionic cordova run adnroid --device`

---
## Atencao

Caso seja utilizado apenas Javascript, verificar o seguinte [link](https://firebase.google.com/docs/web/setup?authuser=0 "Add Firebase to your JavaScript Project") no lugar dos passo 1, 2 e 3 acima.
