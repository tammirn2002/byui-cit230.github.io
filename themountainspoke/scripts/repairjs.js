var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var lbtuneup = $('#lbtuneup').text(myObj.services[0].lbtuneup);
        var gtuneup = $('#gtuneup').text(myObj.services[0].gtuneup);
        var ssptuneup = $('#ssptuneup').text(myObj.services[0].ssptuneup);
        var suptuneup = $('#suptuneup').text(myObj.services[0].suptuneup);

        var bflat = $('#bflat').text(myObj.services[1].bflat);
        var fhoverhaul = $('#fhoverhaul').text(myObj.services[1].fhoverhaul);
        var dtuneup = $('#dtuneup').text(myObj.services[1].dtuneup);
        var twheel = $('#twheel').text(myObj.services[1].twheel);

        var ispoke = $('#ispoke').text(myObj.services[2].ispoke);
        var wslime = $('#wslime').text(myObj.services[2].wslime);
        var isseat = $('#isseat').text(myObj.services[2].isseat);
        var ichain = $('#ichain').text(myObj.services[2].ichain);

        var ifenders = $('#ifenders').text(myObj.services[3].ifenders);
        var iheadset = $('#iheadset').text(myObj.services[3].iheadset);
        var irshock = $('#irshock').text(myObj.services[3].irshock);
        var ipedals = $('#ipedals').text(myObj.services[3].ipedals);

        var irotor = $('#irotor').text(myObj.services[4].irotor);
        var bleedhdb = $('#bleedhdb').text(myObj.services[4].bleedhdb);

    }
};
xmlhttp.open("GET", "https://tammirn2002.github.io/themountainspoke/data/tabledata.json", true);
xmlhttp.send();
