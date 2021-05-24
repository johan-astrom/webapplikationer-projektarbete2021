<template>
  <html>
  <body>
  <div class="Profile_Container">

    <div class="tab">
      <button class="tablinks" onclick="openCity(event, 'Visa resultat')" id="defaultOpen">Visa Resultat</button>
      <button class="tablinks" onclick="openCity(event, 'Ändra lösenord')">Ändra lösenord</button>
      <button class="tablinks" onclick="openCity(event, 'Ta bort konto')">Ta bort konto</button>
      <button class="tablinks" onclick="openCity(event, 'Logga ut')">Logga ut</button>
    </div>


  </div>

  <div id="Visa resultat" class="tabcontent">
    <h3>Resultat</h3>
  </div>
  <div id="Ändra lösenord" class="tabcontent">
    <h3>Byt Lösenord</h3>
  </div>

  <div id="Ta bort konto" class="tabcontent">
    <h3>Ta bort konto</h3>
  </div>

  <div id="Logga ut" class="tabcontent">
    <p>funktion här något?</p>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: "ProfileInfo"
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>

<style scoped>
.Profile_Container{

  margin-left: 25%;
  float: left;

  background-color: #f1f1f1;
  width: 20%;
  height: 300px;
  border-color: black;
  border-style: solid;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  border-radius: 25px;
}
.tabcontent {
  float: left;
  padding: 0px 12px;

  width: 30%;

  height: 300px;
  border-color: black;
  border-style: solid;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.tab button.active {
  background-color: #ccc;
}
.tab button:hover {
  background-color: #ddd;
}
* {box-sizing: border-box;
}
</style>