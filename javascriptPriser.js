//Set up an associative array
//The keys represent the size of the cake
//The values represent the cost of the cake i.e A 10" cake cost's $35
var vask_pris = new Array();
vask_pris["Ja"]=400;
vask_pris["Nei"]=0;

var medlemTurisforening = new Array();
medlemTurisforening["Ja"] = 0.15;
medlemTurisforening["Nei"] = 0;

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
   var medlemPris=0;
   var theForm = document.forms["hyttene"];
   var medlem = theForm.elements["medlem"];
   for(var i = 0; i < medlem.length; i++)
   {
       if(medlem[i].checked)
       {
           medlemPris = medlemTurisforening[medlem[i].value] * 0.15; //FÅR IKKE GANGET!!!
           //medlemPris = medlemTurisforening*totalPris
           break;
       }
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

/*
//candlesPrice() finds the candles price based on a check box selection
function candlesPrice()
{
   var candlePrice=0;
   //Get a reference to the form id="hyttene"
   var theForm = document.forms["hyttene"];
   //Get a reference to the checkbox id="includecandles"
   var includeCandles = theForm.elements["includecandles"];

   //If they checked the box set candlePrice to 5
   if(includeCandles.checked==true)
   {
       candlePrice=5;
   }
   //finally we return the candlePrice
   return candlePrice;
}

function insciptionPrice()
{
   //This local variable will be used to decide whether or not to charge for the inscription
   //If the user checked the box this value will be 20
   //otherwise it will remain at 0
   var inscriptionPrice=0;
   //Get a refernce to the form id="hyttene"
   var theForm = document.forms["hyttene"];
   //Get a reference to the checkbox id="includeinscription"
   var includeInscription = theForm.elements["includeinscription"];
   //If they checked the box set inscriptionPrice to 20
   if(includeInscription.checked==true){
       inscriptionPrice=20;
   }
   //finally we return the inscriptionPrice
   return inscriptionPrice;
}
 */
function calculateTotal()
{
   //Here we get the total price by calling our function
   //Each function returns a number so by calling them we add the values they return together
  // var totalPris = hentPrisVask() + hentHyttePris() + candlesPrice() + insciptionPrice() + hentEvtMedlem();
   var totalPris = hentPrisVask() + hentHyttePris() + hentEvtMedlem();
   //Viser resultet
   var divobj = document.getElementById('totalPris');
   divobj.style.display='block';
   divobj.innerHTML = "Den totale prisen for hytten deres er: " + totalPris + " kroner.";

}

function hideTotal()
{
   var divobj = document.getElementById('totalPris');
   divobj.style.display='none';
}
