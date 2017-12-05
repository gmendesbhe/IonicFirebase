# Seguir os passos abaixo

1. Possuir ionic e cordova instalados  
`npm i -g ionic cordova`

2. Instalar as dependencias do projeto  
`npm i`

3. Criar um projeto no firebase

4. Obter o objeto de configuracao do projeto firebase ao adicionar uma aplicacao web

5. Foi utilizado o pacote npm *angularfire2* e seu modulo de autenticacao  
Este pacote e apenas um encapsulador das funcionalidades do firebase para Typescript  
[angular fire 2 auth module](https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md)

6. Sera necessario seguir tambem os passos listados pelo firebase  
[Authenticate Using OAuth Providers with Cordova](https://firebase.google.com/docs/auth/web/cordova)

7. Realizar o deploy da aplicacao no telefone pelo ionic  
`ionic cordova run adnroid --device`
