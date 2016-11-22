//Har valgt å bruke taball her for å velge mellom Ja eller Nei på vask av hyttene.
var vask_pris = new Array();
vask_pris["Ja"]=400;
vask_pris["Nei"]=0;

//Her er en tabell/array som inneholder alle typer hytter med forskjellige priser. Dette er laget som ei liste i selve bestillingssiden
//som brukeren kan velge i mellom.
var hytteTypes= new Array();
hytteTypes["None"]=0;
hytteTypes["Sjøhytte1"]=1200;
hytteTypes["Sjøhytte2"]=1400;
hytteTypes["Sjøhytte3"]=1600;
hytteTypes["Sjøhytte4"]=2000;
hytteTypes["Fjellhytte1"]=1200;
hytteTypes["Fjellhytte2"]=1400;
hytteTypes["Fjellhytte3"]=1600;
hytteTypes["Fjellhytte4"]=2000;
hytteTypes["Skogshytte1"]=1200;
hytteTypes["Skogshytte2"]=1400;
hytteTypes["Skogshytte3"]=1600;
hytteTypes["Skogshytte4"]=2000;


// hentPrisVask() finner prisen på vask av hytte ut ifra hva brukeren har huket av i radio-knappene på bestillingssiden.
function hentPrisVask()
{
   var prisVask=0;
   //Henter verdier fra riktig form id="hyttene".
   var theForm = document.forms["hyttene"];
   //Henter veriden om Vask Ja eller Vask Nei fra navnet="vask" i formen "hyttene".
   var vask = theForm.elements["vask"];
   //Siden vi valgte å sette Ja/Nei i en array har vi verdiene 0 og 1 på radio-knappene: vask.length = 2.
   //Vi kjører en loop på hver av de to radio-knappene.
   for(var i = 0; i < vask.length; i++)
   {
       //hvis radio-knappen er huket av skjer skjer dette:
       if(vask[i].checked)
       {
           //Vi setter prisVask til verdien av den valgte radio-knappen
           //For eksempel vask_pris["Ja".value]"
           prisVask = vask_pris[vask[i].value];
           //Hvis dette stemmer stopper vi loopen.
           break;
       }
   }
   //Til slutt retunerer vi prisVask
   return prisVask;
}

function hentEvtMedlem()
{
   // Vi setter medlemPris til 1, for hvis bruker velger "Nei, ikke medlem", vil totalprisen i calculateTotal() bli ganget med 1.
   //Henter verdien fra radio-knappene med navn "medlem" i fra bestillingssiden.
   var medlemPris=1;
   var radios = document.getElementsByName('medlem');
   //Hvis Ja, i dette tilfellet 1, er valgt vil dette if-setningen kjører. (Nei = 0)
   if(radios[1].checked) {
     //Vi setter medlemPris lik 0.85 slik at hvis kunden er medlem av Turistforeningen vil 15 % bli trekt i fra.
     //Da vil totalprisen ganges med 0,85.
     medlemPris = 0.85;
   }
   return medlemPris;
}
//Henter hytten kunder har valgt. Samme kode/framgangsmpåte som for hentPrisVask().
function hentHyttePris()
{
   var hytteValgtPris=0;
   var theForm = document.forms["hyttene"];
   var valgtHytte = theForm.elements["hytteTypes"];
   hytteValgtPris = hytteTypes[valgtHytte.value];
   return hytteValgtPris;
}
//Her kalkuleres antall dager.
function calculateDays()
 {
   //Vi bruker innebygde funksjoner i Atom for å finne dagens dato.
   var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth()+1; //Januar er 0!
   var yyyy = today.getFullYear();

   //Her henter vi verdier fra kalenderen ved hjel av id = antall_dager.
   var ankomst = new Date(document.getElementById('ankomst').value);
   var avreise = new Date(document.getElementById('avreise').value);
   //Får ut antall dager ved å ta avreise - ankomst. I tillegg for å få ut dagene i riktig format
   //må vi gange med dager, timer, minutter, sekunder, og millisekunder.
   var antall_Dager = (avreise.getTime() - ankomst.getTime())/86400000;
   // Her skrives det ut en egen tekstboks for antall dager, slik at brukeren får se det etter at ankomst- og avreisedato er valgt.
   var divobj2 = document.getElementById('antall_dager');
   divobj2.innerHTML = "Antall dager: " + antall_Dager + " dag/dager.";

   //Hvis ankomstdatoen er større enn avreisedatoen vil en boks komme opp der det står at avreisedato ikke kan gå bak i tid.
   if (ankomst.getTime() > avreise.getTime()) {
     alert("Du kan ikke velge en avreisedato bak i tid.");
     divobj2.style.display = 'none';
   }
   //Hvis ankomst er mindre enn dagens dato, vil det også komme opp en boks hvor det står at datoen må være seinere enn dagens dato.
   if (ankomst.getTime() < today.getTime()){
     alert("Du kan ikke velge datoer lengere bak enn dagens dato.");
     divobj2.style.display = 'none';
   }
   //hvis ankomst er mindre enn avreise vil ikke NaN-verdien vises i tekstboksen.
   if (ankomst.getTime() < avreise.getTime()) {
     divobj2.style.display = 'block';
   }
}
//Her regnes totalprisen ut
function calculateTotal()
{
   //Lager en variabel som regner ut totalprisen. Legger sammen hentHyttePris()-funksjonen og hentPrisVask()-funksjonen.
   var totalPris = hentHyttePris() + hentPrisVask();
   //Her ganger vi totalprisen igjen med medlemsprosenten.
   totalPris = totalPris * hentEvtMedlem();
   //Lager egent tekstboks som skriver ut fra id="totalPris".
   var divobj = document.getElementById('totalPris');
   divobj.style.display='block';
   divobj.innerHTML = "Prisen for hytten deres er: " + totalPris + " kroner per natt.";
   /* Her ville vi egentlig ha en ekstra linje der det står:
   totalPris = totalPris * calculateDays()
   Men etter mye testkjøring har vi funnet ut at calculateDays()-funksjonen ikke blir registrert som en global funksjon
   (den blir "undefined"). Vi har også testet at antall_Dager inni calculateDays-funksjonen er et "number", så i dette tilfellet
   skulle det vært enkelt å bare gange dagene(calculateDays()) med totalprisen(totalPris). Dette går altså ikke,
   og vi skjønner ikke hvorfor...?
   Derfor valgte vi å gi kunden en pris per natt, og antall dager i et setning under.
   */
}
 //Her sjules tekstboksene før brukeren skriver inn / velger alternativene. 
function hideTotal()
{
   divobj2.style.display='none';
   divobj.style.display='none';
}
