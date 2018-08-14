setTimeout(function(){
    window.location.reload(1);
}, temporefresh); // Tempo para atualização da página

var elem = document.getElementsByTagName('table');
console.log(elem);
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
    id = id.childNodes[0];
    id = id.childNodes[0];
    sistema1 = row.childNodes[5];
    if (sistema1.childNodes.length !== 0){
        sistema = sistema1.childNodes[0];
    }else{
        sistema = sistema1;
        sistema.data = "Sem sistema";
    }
    sla = row.childNodes[8];
    sla = sla.childNodes[0];
    if(nome.data === seunome) //Seu nome
    {
        contMe++;
        defeitos.push(" \n"+id.data+" - "+sistema.data+" - "+sla.data);
        console.log(id.data+" está comigo");
    }
    if(nome.data === "QA Gestão Ambientes"){
        contOpen++;
    }
    for (var cont = 0; cont < sistemasx.length; cont++){
      if(nome.data === "QA Gestão Ambientes" && sistema.data === sistemasx[cont]) 
        {  
           sistemas.push(" "+sistema.data);
           contSistema++;
        }}
}
if(contMe !== 0 && contSistema !==0){
    GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                "\nVocê está com "+contMe+" defeito(s)!"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: 5000, title: "AMBIENTES"});
    GM_notification({text: "Detalhado(s): "+defeitos, timeout: 5000, title: "MEUS QC'S" });  
}else if(contMe !== 0){
    GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                "\nVocê está com "+contMe+" defeito(s)!", timeout: 5000, title: "AMBIENTES N1"});
    GM_notification({text: "Detalhado(s): "+defeitos, timeout: 5000, title: "MEUS QC'S" });  
}
else if(contSistema !==0){
    GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                "\nVocê não possui defeitos"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: 5000, title: "AMBIENTES"});
}
else{
    GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                "\nVocê não possui defeitos", timeout: 5000, title: "AMBIENTES"});
}
console.log("Total: "+elem.childNodes.length+" defeitos");
