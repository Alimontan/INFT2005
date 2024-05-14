Feature: Legge inn betalingsinformasjon

  Scenario: Fullføre et kjøp med gyldige betalingsdetaljer
    Gitt jeg er på betalingssiden
    Når jeg legger inn gyldig navn, adresse, postnummer, poststed, og kortnummer
    Og jeg trykker på "Fullfør kjøp"
    Så skal jeg få beskjed om at kjøpet er registrert

  Scenario: Feilmeldinger ved inngivelse av ugyldige betalingsdetaljer
    Gitt jeg er på betalingssiden
    Når jeg legger inn ugyldige verdier i feltene
    Så skal jeg få feilmeldinger for disse

