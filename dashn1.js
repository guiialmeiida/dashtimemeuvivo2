setTimeout(function(){
    window.location.reload(1);
}, temporefresh); // Tempo para atualização da página

try{
    var elem = document.getElementsByTagName('table');
    var elem = elem[2];
    var elem = elem.childNodes[2];
    var defeitos = [];
    var sistemas = [];
    contMe = 0;
    contOpen = 0;
    contSistema = 0;
    for (i = 0; i < elem.childNodes.length; i++) {
        row = elem.childNodes[i];
        nome = row.childNodes[0];
        nome = nome.childNodes[0];
        id = row.childNodes[1];
        id2 = id.childNodes[0];
        id = id2.childNodes[0];
        sistema1 = row.childNodes[5];
        if (sistema1.childNodes.length !== 0){
            sistema = sistema1.childNodes[0];
        }else{
            sistema = sistema1;
            sistema.data = "Sem sistema";
        }
        sla2 = row.childNodes[9];
        sla = sla2.childNodes[0];
        var slaArray = sla.data.split(" ");
        var slaData = parseInt(slaArray[0]);
        severity2 = row.childNodes[7];
        if (severity2.childNodes.length !== 0){
            severity = severity2.childNodes[0];
        }else{
            severity = severity2;
            severity.data = "Sem prioridade";
        }
        sla2.style="color:black";

        if(nome.data === seunome) //Seu nome
        {
            contMe++;
            defeitos.push(" \n"+id.data+" - "+sistema.data+" - "+sla.data);
            console.log(id.data+" está comigo");
            if (opcionalcores === "yes"){
                row.style = "background-color:#F0E68C";}
        }
        if(nome.data === "QA N1"){
            console.log("contOpen++");
            contOpen++;
            if (opcionalcores === "yes"){
                row.style = corbg+";"+fonte;
                id2.style = fonte;
                sla2.style = "color:black";
            }
        }
        for (var cont = 0; cont < sistemasx.length; cont++){
            if(nome.data === "QA N1" && sistema.data === sistemasx[cont]) //Sistemas escolhidos para avisar
            {  console.log("Encontrado");
             sistemas.push(" "+sistema.data);
             contSistema++;
            }}

        //console.log(nome.data+" está com o defeito "+id.data+" do sistema "+sistema.data);
        if(slaData >= 20 && nome.data === "QA N1" && slaArray[1] === "Minute(s)" && opcionalcores === "yes"){
            sla2.style = "background-color:goldenrod; color: black";

        }
         if(slaData >= 30 && nome.data === "QA N1" && slaArray[1] === "Minute(s)" && opcionalcores === "yes"){
            sla2.style = "background-color:tomato; color: black";

        }

         for (var cont = 0; cont < sistemasx.length; cont++){
        if(opcionalcores === "yes" && sistema.data === sistemasx[cont] && nome.data=== "QA N1"){
              sistema1.style = "color:green";
              id2.style = "color:green";
        }}

        if(slaData >= 1 && slaArray[1] === "Hour(s)" && opcionalcores === "yes"){
            sla2.style = "background-color:tomato; color: black";
        }
        if(severity.data === "4-Show Stopper" && opcionalcores === "yes"){
            severity2.style = "font-weight: bold; color:red";
        }
    }

    // ---------------------------------------------------""""AQUI AVISOS""""----------------------------------------------------------------
    if(contMe !== 0 && contSistema !==0){
        GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                         "\nVocê está com "+contMe+" defeito(s)!"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: 5000, title: "VIVO N1"});
        GM_notification({text: "Detalhado(s): "+defeitos, timeout: 5000, title: "MEUS QC'S" });  //Opcional, avisa os QC's no seu nome
    }else if(contMe !== 0){
        GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                         "\nVocê está com "+contMe+" defeito(s)!", timeout: 5000, title: "VIVO N1"});
        GM_notification({text: "Detalhado(s): "+defeitos, timeout: 5000, title: "MEUS QC'S" });  //Opcional, avisa os QC's no seu nome
    }

    else if(contSistema !==0){
        GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                         "\nVocê não possui defeitos"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: 5000, title: "VIVO N1"});
    }
    else{
        GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                         "\nVocê não possui defeitos", timeout: 5000, title: "VIVO N1"});
    }
    console.log("Total: "+elem.childNodes.length+" defeitos");
}
catch(err) {
    GM_notification({text: "Atualmente não existe defeito(s) aberto(s)!", timeout: 5000, title: "VIVO N1"});
    console.log(err);
}
