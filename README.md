# JavaScript project: 2022-2023

In dit project implementeer je het spel Rush Hour in Javascript.
Dit project wordt ingediend via GitLab.
Tijdens de verdediging kijken we naar de recentst gepushte commit versie vóór het verstrijken van de deadline.

**Inhoudsopgave**

- [JavaScript project: 2022-2023](#javascript-project-2022-2023)
  - [Afspraken](#afspraken)
    - [Gedragscode](#gedragscode)
    - [Toelichting](#toelichting)
    - [Forum](#forum)
    - [Opgave downloaden](#opgave-downloaden)
    - [Oplossing indienen](#oplossing-indienen)
    - [Verdediging](#verdediging)
  - [Evaluatiecriteria](#evaluatiecriteria)
    - [Functionaliteit](#functionaliteit)
    - [Leesbaarheid code](#leesbaarheid-code)
    - [Correcte inzending](#correcte-inzending)
    - [Niet gequoteerd](#niet-gequoteerd)
  - [Opgave](#opgave)
    - [Rush Hour](#rush-hour)
      - [Spelregels](#spelregels)
        - [Doel van het spel](#doel-van-het-spel)
        - [Het spelbord](#het-spelbord)
        - [De voertuigen](#de-voertuigen)
        - [Het spel](#het-spel)
      - [Voorbeelden](#voorbeelden)
    - [Functionaliteit](#functionaliteit-1)
    - [Oplossingsstrategie](#oplossingsstrategie)

## Afspraken

Overloop eerst de afspraken vooraleer je begint aan de opgave.
Dit practicum heeft AC-code [ES-NGW-TP-TS-NPP-NVP](https://www.cs.kuleuven.be/assignment-commons/explain?ac_code=ES-NGW-TP-TS-NPP-NVP).

### Gedragscode

De practica worden gequoteerd, en het examenreglement is dan ook van toepassing.
Soms is er echter wat onduidelijkheid over wat toegestaan is en wat niet inzake samenwerking bij opdrachten zoals deze.

De oplossing en/of programmacode die ingediend wordt, moet volledig het resultaat zijn van werk dat je zelf gepresteerd hebt.
Je mag je werk uiteraard bespreken met andere studenten, in de zin dat je praat over algemene oplossingsmethoden of algoritmen, maar de bespreking mag niet gaan over specifieke code die je aan het schrijven bent of die je wenst in te dienen.
Als je het met anderen over je practicum hebt, mag dit er dus *nooit* toe leiden, dat je op om het even welk moment in het bezit bent van .een geheel of gedeeltelijke kopie van het opgeloste practicum van anderen, onafhankelijk van of die code op papier staat of in elektronische vorm beschikbaar is, en onafhankelijk van wie de code geschreven heeft (mede-studenten, eventueel uit andere studiejaren, volledige buitenstaanders, internet-bronnen, e.d.).
Dit houdt tevens ook in dat er geen enkele geldige reden is om je code door te geven aan mede-studenten, noch om ze beschikbaar te stellen via publiek bereikbare directories of websites. De git-repository die we jullie ter beschikking stellen is standaard op privaat ingesteld.

Elke student is verantwoordelijk voor de code en het werk dat hij of zij indient.
Als er tijdens de beoordeling van het practicum twijfels zijn over het feit of het practicum zelf gemaakt is (bvb. gelijkaardige code, of oplossingen met andere practica), zal de student gevraagd worden hiervoor een verklaring te geven.
Indien dit de twijfels niet wegwerkt, zal er worden overgegaan tot het melden van een onregelmatigheid, zoals voorzien in het onderwijs- en examenreglement (zie http://www.kuleuven.be/onderwijs/oer/).

**Alle inzendingen worden automatisch met elkaar vergeleken met behulp van plagiaatsoftware voor code.
Deze software geeft een score van gelijkaardigheid aan projecten.
De projecten die het meest op elkaar lijken worden nadien manueel nagekeken.**

### Toelichting

Het is toegestaan om gebruik te maken van informatie en code (bijvoorbeeld hulpfuncties) op het internet om je practicum op te lossen, **indien je de bron vermeldt**.
Het is niet de bedoeling om een volledig opgelost spel te downloaden en dit in te dienen, zelfs met bronvermelding.

Indien je twijfelt over wat al dan niet toegestaan is, stel dan een vraag op het discussieforum!

### Forum

Alle vragen over het practicum, *inclusief vragen aan medestudenten*, moeten gesteld worden via het **discussieforum** op [Toledo](https://toledo.kuleuven.be).

Alle antwoorden van assistenten op het discussieforum worden beschouwd als **deel van de opgave** en kunnen bijgevolg aanvullingen of correcties bevatten.
Zorg er dus voor dat je deze posts leest!

> :bulb: Open het forum en klik bovenaan op *abonneren* (of *subscribe* in het Engels) om een e-mail te krijgen wanneer nieuwe threads worden toegevoegd aan het forum.

### Opgave downloaden

De opgave download je via het `git clone` commando (vervang `<r-nummer>` door je eigen r-nummer):

```bash
git clone git@gitlab.kuleuven.be:distrinet/education/informaticawerktuigen/2022-2023/javascript-project/rush-hour-<r-nummer>.git
```

In de map `code` staan alvast drie bestanden die een startpunt vormen.
Het HTML-bestand `index.html` is reeds gekoppeld aan een leeg Javascript-bestand en een leeg CSS-bestand.
Je kan het practicum oplossen door je code te schrijven in deze bestanden, je hoeft dus geen extra bestanden aan te maken.

Zou je toch graag nieuwe bestanden aanmaken (om welke reden dan ook), zorg dan dat je nog steeds voldoet aan onderstaande vereisten:

- Alle bestanden die deel uitmaken van de oplossing staan in de map `code` (submappen zijn toegestaan).
- Het spel kan geopend worden door `index.html` in te laden in de web browser, zonder bijkomende stappen.


### Oplossing indienen

De *deadline* voor dit practicum is **zondag 20 november 2022** om **23u59**.
Het practicum wordt ingediend met behulp van _Git_, door simpelweg je oplossing te pushen naar deze online repository.

Wijzigingen aan jullie repository na deze datum zullen niet aanvaard worden.

Hieronder zie je een voorbeeld van hoe je bestanden kan pushen:

```bash
# Alle gewijzigde bestanden in map 'code' toevoegen
git add code/
# Bestanden committen
git commit -m "Oplossing practicum"
# Gemaakte commit versturen naar online repository
git push origin main
```

> :exclamation: Het is ten zeerste aangeraden om gedurende het maken van je project regelmatig je bestanden te committen en te pushen met git.
> Zo heb je altijd een back-up van je code!
> Je kan zo vaak pushen als je wilt, enkel de laatste versie vóór de deadline zal tellen als je finale indiening.

**Kijk goed na of je alle bestanden correct hebt ingediend. Een foute inzending wordt gelijkgesteld aan laattijdige inzending!**
Controleer je inzending door je eigen repository opnieuw te clonen in een tijdelijke folder.

Je kan de inhoud van de repository ook nakijken op de website van GitLab zelf.
Daarnaast kan je het ingediende spel ook uittesten via deze URL (vervang <r-nummer> door je eigen r-nummer):

```
https://distrinet.pages.gitlab.kuleuven.be/education/informaticawerktuigen/2022-2023/javascript-project/rush-hour-<r-nummer>
```


### Verdediging

Tijdens de verdediging is het uiterst belangrijk dat je goed kan uitleggen wat je code doet, en waarom je bepaalde keuzes hebt gemaakt.
Vergeet zeker niet om als voorbereiding voor de verdediging je eigen code opnieuw te bekijken, zeker de ingewikkelde delen.
Met code waarvan je niet kan uitleggen hoe ze werkt, kan je uiteraard weinig punten verdienen.

Er kan je tijdens de verdediging ook gevraagd worden beperkte aanpassingen te doen aan de code die je hebt geschreven.
Op deze manier controleren we enerzijds of je de code zelf hebt geschreven, en anderzijds of je de taal voldoende begrijpt.

De praktische informatie omtrent de verdediging en de planning volgen later via Toledo.

De verdediging is een examenmoment, behandel dit ook zo.
**Zorg ervoor dat je op tijd aanwezig bent.**
Indien je om eender welke reden niet op tijd op de verdediging kan geraken, neem dan zo snel mogelijk contact op met het assistententeam zodat er naar een oplossing gezocht kan worden.
***Niet komen opdagen op je verdediging, zonder enige verwittiging, zal resulteren in een 0 op dit practicum***.
Indien je door ziekte je verdediging niet kan halen, bezorg je je ombudspersoon een doktersattest.
Via de ombudspersoon kan dan een inhaalverdediging vastgelegd worden.

## Evaluatiecriteria

In deze sectie beschrijven we kort enkele criteria die we gebruiken om een score toe te kennen aan het practicum.

### Functionaliteit

In de eerste plaats wordt er gekeken naar een correcte, foutloze werking van je programma.
Zorg ervoor dat alle functionaliteit die in de opgave gevraagd wordt, ook aanwezig is in je programma.
**Je zal enkel kunnen slagen voor dit practicum als je een werkend spel indient!**

### Leesbaarheid code

Zorg ervoor dat je code leesbaar is!

Enkele tips:

* Gebruik duidelijke, verklarende namen voor alle variabelen en functies.
* Maak gebruik van functies om je code op te delen. Deel lange functies op in kleinere subfuncties die je probleem stap voor stap oplossen. Als je je code voldoende opsplitst in functies met heldere namen zal de code snel leesbaar worden.
* *Indenteer* je code!!! Vele editors hebben auto-formatting functionaliteit. Maak daar gebruik van! Er is niets vervelender dan code te lezen met foute of geen indentatie.
* Maak gebruik van commentaar, maar enkel voor de stukken code die slecht leesbaar zijn. Voeg deze commentaar dus pas toe nadat je alle bovenstaande stappen hebt uitgevoerd en nog steeds merkt dat het stuk code lastig te lezen is.
* Wees consequent met alle stijlkeuzes die je maakt. Indien je bijvoorbeeld beslist om een accolade telkens op een nieuwe regel te laten beginnen, doe dit dan voor het volledige document.

### Correcte inzending

Zorg ervoor dat je code correct en tijdig is ingediend via GitLab.

### Niet gequoteerd

We geven geen punten op:

* De mooiheid van de user interface. Het kan leuk zijn om je spel mooier te maken, maar hier kan je geen punten mee winnen. (Concreet mogen voertuigen dus bvb. rechthoekig zijn.)
* Extra (ongevraagde) functionaliteit. Je mag eigen functies toevoegen, maar hier kan je geen punten mee winnen.

## Opgave

De opdracht van in practicum bestaat eruit het spel [Rush Hour](https://nl.wikipedia.org/wiki/Rush_Hour_(spel)) te implementeren met behulp van HTML, CSS en JavaScript.
In deze sectie beschrijven we eerst de algemene regels en werking van het spel.
Vervolgens beschrijven we de specifieke functionaliteit die we verwachten in jullie oplossing.

### Rush Hour

We beschrijven de regels van Rush Hour in deze sectie.

#### Spelregels

##### Doel van het spel

Bij elk spel is het doel om met een specifiek doelvoertuig van de parking af te kunnen rijden.

##### Het spelbord

Het bord is doorgaans een vierkant opgedeeld in kleinere vakjes (gebruikelijk is 6x6).
Op zich is het perfect mogelijk om een rechthoekig spelbord te hebben voor Rush Hour, maar dit zullen we niet implementeren.

##### De voertuigen

Een voertuig heeft een breedte van één vak en een lengte die kan variëren van twee tot drie vakken.
Auto's, tractoren en bestelwagens hebben doorgaans een lengte van twee vakken en vrachtwagens drie.

##### Het spel

Het spel start met een configuratie van voertuigen op het spelbord.
Alle voertuigen staan steeds horizontaal of verticaal georiënteerd (met ander woorden: **niet** diagonaal of onder een hoek).
Dit wilt niet zeggen dat alle voertuigen dezelfde oriëntatie hebben, er kunnen steeds een een aantal voertuigen onder beide oriëntaties op het spelbord aanwezig zijn.
Aan één zijde van het spelbord is een opening om de parking te verlaten.
Er zal op die rij of kolom bij de uitgang dus ook steeds een voertuig (een auto) moeten staan in de oriëntatie zodat het voertuig kan buiten rijden.

De speler kan alle voertuigen voor- of achteruit verplaatsen om zo plaats te maken voor het voertuig dat de parking moet verlaten.
Bij deze verplaatsingen moeten enkele eenvoudige regels in acht genomen worden:

* Een voertuig kan **enkel** voor- en achteruit bewegen (niet draaien, niet zijdelings schuiven)
* Voertuigen kunnen niet door elkaar rijden (ook niet over elkaar etc.)
* Voertuigen kunnen met minimum één vakje op het spelbord verplaatsen
* Voertuigen kunnen niet over de rand van de parking rijden

Geen enkel voertuig mag de parking verlaten behalve het ene doelvoertuig.
Bij het buiten rijden van het doelvoertuig is het spel afgelopen.

#### Voorbeelden

In de map *voorbeeldlevels* kan je enkele voorbeelden van startborden zien.
Uiteraard is het de bedoeling dat je spel er iets beter uitzien dan deze voorbeelden.
Het is steeds de bedoeling om het voertuig met opschrift `1` buiten te rijden aan de rechterzijde.

Om het spel voor je te vereenvoudigen is het niet vereist dat dat wagens over de cell-grenzen gaan.
M.a.w. als je een tabel gebruikt en dezelfde kleur is gebruikt in aaneengrenzende cellen maar er zit nog een border tussen de cellen, dan is dat OK.
Verlies dus niet te veel tijd met het perfectioneren van de HTML.

### Functionaliteit

In deze sectie beschrijven we de functionaliteit die we verwachten voor dit practicum.

* Voorzie een spelbord dat bestaat uit 6 rijen en 6 kolommen.
* Het spel moet gespeeld kunnen worden door een menselijke speler - je hoeft dus geen computerspeler te voorzien.
* Zorg ervoor dat er een visueel verschil is tussen de verschillende voertuigen enerzijds, maar ook tussen de voertuigen en lege plaatsen anderzijds (geef bv. alle voertuigen een verschillende kleur).
* De speler moet voertuigen kunnen verplaatsen. Dit kan bijvoorbeeld door twee knoppen (aan elke voor- en achterkant van het voertuig) of door de mogelijkheid om het voertuig te verslepen. De voertuigen moeten zich gedragen zoals in de spelregels beschreven.
* Toon een teller die aangeeft hoeveel zetten de speler heeft gemaakt in het huidige spel (de verplaatsing van een voertuig is een zet, maar hoe groot die verplaatsing is maakt niet uit. M.a.w. een voertuig kan voor- en achteruit rijden zoveel het wilt binnen een zet, dat blijft nog steeds maar één zet. Pas als een ander voertuig beweegt is dat de volgende zet).
* Toon een timer die aangeeft hoe lang het huidige spel al loopt.
* Voorzie een knop om hetzelfde spel opnieuw te starten. Bij gebruik van de knop gaat het spelbord terug naar de startconfiguratie en worden de timer en zet-teller terug op nul gezet.
* Voorzie een knop om onmiddellijk een nieuw spel te starten.
* Indien het doelvoertuig de uitgang bereikt is het spel gedaan. Toon op dat moment een bericht met felicitaties en een overzicht van de tijd die de gebruiker nodig had en het aantal zetten.
* Voorzie de optie om elk van de voorbeeldborden in de map *voorbeeldlevels* in te laden (uiteraard kan je ook zelf nog extra levels bedenken als je wilt, maar dat moet niet).

### Oplossingsstrategie

Om dit practicum op te lossen kan je het werk opsplitsen in een aantal stappen:

1. Maak eerst met behulp van HTML en CSS de volledige interface voor een willekeurig spelbord.
Zorg ervoor dat je hierin alle grafische elementen al verwerkt.
2. Bedenk een representatie in JavaScript die de volledige staat van het spel kan beschrijven. Denk bijvoorbeeld aan de oefenzitting, waarin we een tweedimensionale lijst gebruikten om een Sliding Puzzle voor te stellen.
3. Schrijf een functie die de interne Javascript-representatie kan omzetten naar jouw HTML-representatie. Kijk bijvoorbeeld naar de functies *draw_puzzle* en *generate_puzzle_html* uit de oefenzitting.
4. Vervolgens kan je functies schrijven die gebruik maken van de interne voorstelling van je spel om het spel te spelen. Bij iedere aanpassing van de interne representatie kan je deze opnieuw omzetten naar HTML met behulp van je omzetfunctie. Je kan de functies telkens testen door deze uit te voeren vanuit de JavaScript console.
5. Maak gebruik van de onclick-attributen van HTML om ervoor te zorgen dat wanneer men op het spelbord klikt, de correcte JavaScript functies (geschreven in de vorige stap) uitgevoerd worden.
