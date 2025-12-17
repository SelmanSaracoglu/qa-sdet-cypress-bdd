# Akzeptanzkriterien (Beispiele)

Hier definieren wir die Kriterien für eine erfolgreiche Abnahme (User Story).

## Story: Login Funktion
**Als** Benutzer  
**Möchte** ich mich sicher anmelden  
**Damit** ich Termine buchen kann.

### Kriterium 1: Erfolgreicher Login
* **Given** Der Benutzer ist auf der Login-Seite.
* **When** Er gibt "John Doe" und "ThisIsNotAPassword" ein.
* **Then** Er wird auf die Startseite weitergeleitet.

### Kriterium 2: Fehlgeschlagener Login
* **Given** Der Benutzer ist auf der Login-Seite.
* **When** Er gibt ein falsches Passwort ein.
* **Then** Er sieht eine Fehlermeldung "Login failed".

---

## Story: Termin Buchen (Appointment)
**Als** Patient  
**Möchte ich** ein Datum auswählen  
**Damit** ich einen Arzttermin bekomme.

### Kriterium 1: Pflichtfelder
* Das Datum darf nicht leer sein.
* Das Programm (Medicaid/Medicare) muss wählbar sein.