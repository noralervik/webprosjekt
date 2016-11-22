//Set up an associative array
//The keys represent the size of the cake
//The values represent the cost of the cake i.e A 10" cake cost's $35
var vask_pris = new Array();
vask_pris["Ja"]=400;
vask_pris["Nei"]=0;


//Set up an associative array
//The keys represent the filling type
//The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
//We use this this array when the user selects a filling from the form
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



// hentPrisVask() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function hentPrisVask()
{
   var prisVask=0;
   //Get a reference to the form id="hyttene"
   var theForm = document.forms["hyttene"];
   //Get a reference to the cake the user Chooses name="vask":
   var vask = theForm.elements["vask"];
   //Here since there are 4 radio buttons vask.length = 4
   //We loop through each radio buttons
   for(var i = 0; i < vask.length; i++)
   {
       //if the radio button is checked
       if(vask[i].checked)
       {
           //we set prisVask to the value of the selected radio button
           //i.e. if the user choose the 8" cake we set it to 25
           //by using the vask_pris array
           //We get the selected Items value
           //For example vask_pris["Round8".value]"
           prisVask = vask_pris[vask[i].value];
           //If we get a match then we break out of this loop
           //No reason to continue if we get a match
           break;
       }
   }
   //We return the prisVask
   return prisVask;
}

function hentEvtMedlem()
{

   var medlemPris=1;
   var radios = document.getElementsByName('medlem');
   if(radios[1].checked) {
     medlemPris = 0.85;
   }
   return medlemPris;
}
//This function finds the filling price based on the
//drop down selection
function hentHyttePris()
{
   var hytteValgtPris=0;
   //Get a reference to the form id="hyttene"
   var theForm = document.forms["hyttene"];
   //Get a reference to the select id="filling"
    var valgtHytte = theForm.elements["hytteTypes"];
   //set cakeFilling Price equal to value user chose
   //For example hytteTypes["Lemon".value] would be equal to 5
   hytteValgtPris = hytteTypes[valgtHytte.value];
   //finally we return hytteValgtPris
   return hytteValgtPris;
}

function calculateDays()
 {
   var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth()+1; //Januar er 0!
   var yyyy = today.getFullYear();

   var divobj2 = document.getElementById('antall_dager');
   var ankomst = new Date(document.getElementById('ankomst').value);
   var avreise = new Date(document.getElementById('avreise').value);
   var antall_Dager = (avreise.getTime() - ankomst.getTime())/86400000; //må gange med dager, timer, minutter, sekunder, og millisekunder

   divobj2.innerHTML = "Antall dager: " + antall_Dager + " dag/dager.";

   if (ankomst.getTime() > avreise.getTime()) {
     alert("Du kan ikke velge en avreisedato bak i tid.");
     divobj2.style.display = 'none';
   }
   if (ankomst.getTime() < today.getTime()){
     alert("Du kan ikke velge datoer lengere bak enn dagens dato.");
     divobj2.style.display = 'none';
   }
   if (ankomst.getTime() < avreise.getTime()) {
     divobj2.style.display = 'block';
   }
}
function calculateTotal()
{
   //Here we get the total price by calling our function
   //Each function returns a number so by calling them we add the values they return together

   var totalPris = hentHyttePris() + hentPrisVask();
   //Viser resultet
   totalPris = totalPris * hentEvtMedlem();

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

function hideTotal()
{
   divobj2.style.display='none';
   divobj.style.display='none';
}
