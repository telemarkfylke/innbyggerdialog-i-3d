# Innbyggerdialog i 3d
Script for å hente innspill, arkivere og varsle.
## Beskrivelse
Scriptet henter innspill fra en løsning som heter Innbyggerdialog i 3D levert av geodata.

[Geodata](https://www.geodata.no/produkter-og-tjenester/3d)
> Med Innbyggerdialog i 3D kan du enkelt lage et utsnitt av området som skal endres eller bygges ut og visualisere endringene i 3D.

Scriptet leser en fil med predefinere [prosjekter](#projectsjs), prosjektene som er enabled vil bli lest og om det finnes nye innspill vil disse bli plukket ned og behandlet. Innspillene i Innbyggerdialog i 3D vil få en ny status så de ikke plukkes opp igjen og en status «finished» når innspillet er ferdig behandlet. 

## Table of Contents
- [Local development](#local-development)
- [Setup](#setup)
- [Fuknsjoner og Jobber](#funksjoner-og-jobber)


## Local development
- Klon ned prosjektet, eller fork også klon.
- Kjør ``npm i``
- Opprett en [.env](#env) fil
- Opprett en [projects.js](#projectsjs) fil
- Og kjør ``node index.js``
- Scriptet oppretter de mappene det trenger og begynner å hente innspill, arkivere og varsle.

## Setup
Prosjektet er tenkt å kjøre lokalt som en scheduled task på en server. Ønsket er at det det skal varsles innen 10min etter at et innspill er mottatt, tasken bør derfor ikke trigges med mer enn 10minutters mellomrom.
### projects.js
I dag må prosjektene legges inn manuelt av noen med kjennskap til scriptet. På sikt kan det vurderes å koble det mot en sharepoint liste som kan administreres av systemansvarlig for innbyggerdialog. Dette vil gjøre det mulig for systemansvarlig å skru av og på prosjekter som leses av scriptet samt administrere prosjektene selv.
```javascript
const projects = [
  {
    layer: 'https://services5.arcgis.com/{UNIQUE_ID}/ArcGIS/rest/services/{UNIQUE_ID}/FeatureServer/0', // Lenke til prosjektet
    inputUrl: 'https://www.arcgis.com/apps/mapviewer/index.html?url=https://services-eu1.arcgis.com/{UNIQUE_ID}/ArcGIS/rest/services/{PROJECT}/FeatureServer/2&source=sd', // En lenke til et kart som viser alle innspillene.
    projectName: 'PROJECT NAME', // Bør være noe som ligner på det i arkivet
    projectOwner: 'PROJECT OWNER UPN', // Saksbehandler i arkivet
    type: 'PROJECT TYPE', // Innspill til varsel om oppstart Eller Offentlig Ettersyn
    archiveCase: '24/00000', // Saksnummer i arkivet
    enabled: false // true eller false
  }
]
```
### .env
```
ARCHIVE_SCOPE=
ARCHIVE_URL=
STATISTICS_KEY=
STATISTICS_URL=
APP_REG_CLIENT_ID=
APP_REG_SECRET=
TENANT_ID=
FYLKE=
FYLKE_NOREPLY=
FYLKE_EPOST=
MAIL_URL=
MAIL_KEY=
PAPERTRAIL_HOST=
PAPERTRAIL_TOKEN=
TEAMS_WEBHOOK_URL=
NODE_ENV=
```

## Funksjoner og jobber
Om du ønsker mer teknisk dokumentasjon kan du se på koden, den er kommentert og med beskrivende logger. 👍

### createPdf.js
- Tar inn et view, og en savePath og genererer en pdf med informasjon om prosjektet og et innspill.
- Et view er en fil som kommer fra inputJobs. Denne inneholder informasjon om et innspill og prosjektet det tilhører.
- savePath der den genererte PDF'en skal lagres.
- Bruker mustache til å "fylle" et html-template med data fra view for så å ta denne html filen og generere en pdf.

### downloadAttachments.js
- Tar inn url, featureId og attachmentId.
- Laster ned og returnerer vedlegget til det valgte innspillet.

### getAttachmentsInfo.js
- Tar inn url og id.
- Returnerer informasjonen om vedleggene som hører til innspillet.

### getFeature.js
- Ikke i bruk, men tar inn url og id og returnerer informasjon om innspillet.

### queryFeatures.js
- Tar inn url og type, type er hvilke type innspill du vil hente ut.
- Type 'innspill' returnerer alle innspill som har 'status' = null. 

### updateFeatures.js
- Tar inn url, OBJECTID, status
- Oppdaterer status på valgt innspill hos Innbyggerdialog
- Returnerer et array med informasjon om innspillet som ble oppdatert.

### call-archive.js
- Tar inn endpoint og payload for å arkivere
- Returnerer et documentNumber

### call-esri.js
- Eksponerer queryFeatures, getAttachments, getFeature og updateFeatures fra arcgis sitt api.

### createStats.js
- Tar inn fileContent og job
- Oppretter statistikk 

### sendEmail.js
- Tar inn fileContent og job
- Sender email til personen bak innspillet.


