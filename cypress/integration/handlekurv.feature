# language: no
Egenskap: Handlekurv

  Som kunde av nettkiosken
  Ønsker jeg å legge varer i handlekurven
  Slik at jeg kan få godis i posten

  Scenario: Legge til varer i handlekurven
    Gitt at jeg har åpnet nettkiosken
    Når jeg legger inn varer og kvanta
    Så skal handlekurven inneholde det jeg har lagt inn
    Og den skal ha riktig totalpris
