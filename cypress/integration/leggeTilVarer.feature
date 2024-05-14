Feature: Legge varer i handlekurven

  Scenario: Legge til varer i handlekurven
    Gitt at jeg har åpnet nettkiosken
    Når jeg legger inn varer og kvanta
    Så skal handlekurven inneholde det jeg har lagt inn
    Og den skal ha riktig totalpris

  Scenario: Slette varer fra handlekurven
    Gitt at jeg har åpnet nettkiosken
    Og jeg har lagt inn varer og kvanta
    Når jeg sletter varer
    Så skal ikke handlekurven inneholde det jeg har slettet

  Scenario: Oppdatere kvanta for en vare i handlekurven
    Gitt at jeg har åpnet nettkiosken
    Og jeg har lagt inn varer og kvanta
    Når jeg oppdaterer kvanta for en vare
    Så skal handlekurven inneholde riktig kvanta for varen
