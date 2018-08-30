var tabela = document.getElementsByTagName('table'); //Retorna todas as tabelas como HTML Collection
var tabela2 = tabela[2]; // Selectiona a tabela que precisamos no caso a 3ª
var tabela = tabela2.childNodes[2]; //Selectiona o 3º childNode da tabela onde está as linhas

//tabela2.removeChild(tabela); //Teste de Fila Vazia
//var tabela = tabela2.childNodes[2]; //Teste de Fila Vazia

var defeitos = [];
var sistemas = [];
var qcs = [];
contMe = 0;
contOpen = 0;
contSistema = 0;
contQcs =0;
var opcionalcores = "";
var avisoOpcional = "";
var avisoOpcionalMeusDefeitos = "";
var backgroungDefAberto = "background-color:#D3DDEB";
var fonteDefAberto = "color:black";
var tempoVidaNotif = 5000;
var monitorarqc = [""]; //testes, colocar o id do defeito que deseja monitorar

//Chamada function principal
main();

function menuExtra(){

    //Seleciona a tabela onde o botão priorizar está
    var botoes = document.getElementById("fDefectsList:pgBtnPriorizar");
    botoes = botoes.childNodes[1];
    botoes = botoes.childNodes[1];
    //Cria 1 novo td
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);


   //Seleciona o novo td
    colunas = botoes.childNodes[5];
    colunas0 = botoes.childNodes[6];
    colunas7 = botoes.childNodes[7];
    colunas4 = botoes.childNodes[8];
    colunas1 = botoes.childNodes[9];
    colunas5 = botoes.childNodes[10];
    colunas2 = botoes.childNodes[11];
    colunas6 = botoes.childNodes[12];
    colunas3 = botoes.childNodes[13];
    colunas9 = botoes.childNodes[14];
    colunas10 = botoes.childNodes[15];



    //Cria um campo input
    inputText = document.createElement('input');
    colunas.appendChild(inputText);
    input0Text = document.createElement('input');
    colunas0.appendChild(input0Text);

    input4Text = document.createElement('LABEL');
    colunas4.appendChild(input4Text);
    input4Text.innerHTML = "Cores:";
    input4Text.style ="Color: #FFFAFA ";

    input5Text = document.createElement('LABEL');
    colunas5.appendChild(input5Text);
    input5Text.innerHTML = "Aviso:";
    input5Text.style ="Color: #FFFAFA ";

    input6Text = document.createElement('LABEL');
    colunas6.appendChild(input6Text);
    input6Text.innerHTML = "Aviso meus QC's:";
    input6Text.style ="Color: #FFFAFA ";

    input9Text = document.createElement('LABEL');
    colunas9.appendChild(input9Text);
    input9Text.innerHTML = "Ambientes:";
    input9Text.style ="Color: #FFFAFA ";

    input7Text = document.createElement('input');
    colunas7.appendChild(input7Text);

    // =============================************************************===============================================

     //___________check ambientes
    input109Text = document.createElement('input');// checkbox
    colunas10.appendChild(input109Text);// checkbox
    //Seleciona o campo criado

    input109Text =colunas10.childNodes[0];// checkbox
    input109Text.type = "checkbox";
    var meuStorage = localStorage;
    var ok109 = meuStorage.getItem('ok109');
    if(ok109 === null || ok109 === "" || ok109 === "false"){
        ok109 = "false";
        input109Text.checked = false;
    }else{
        ok109 = "true";
        input109Text.checked = true;
    }

    input109Text.onclick = function () {
        var okBo109 = "";
        if(ok109 === "false"){

            okBo109 = "true";
        }else{
            ok109 = "true";

            okBo109 = "false";
        }
        meuStorage.setItem('ok109', okBo109);
        window.location.reload(1);
    };
    if (ok109==="true" ){
        var optionAmbientes = "sim"; //Yes para os avisos na área de trabalho
    }
    else
        optionAmbientes = "nao";

    console.log(optionAmbientes);


   // =============================************************************===============================================
    //___________check cores
    input1Text = document.createElement('input');
    colunas1.appendChild(input1Text);
    input1Text =colunas1.childNodes[0];
    input1Text.type = "checkbox";
    var ok = meuStorage.getItem('ok');
    if(ok === null || ok === "" || ok === "false"){
        ok = "false";
        input1Text.checked = false;
    }else{
        ok = "true";
        input1Text.checked = true;
    }

    input1Text.onclick = function () {
        var okBo = "";
        if(ok === "false"){

            okBo = "true";
        }else{
            ok = "true";

            okBo = "false";
        }
        meuStorage.setItem('ok', okBo);
        window.location.reload(1);
    };
    if (ok==="true" ){
        opcionalcores = "yes";
    }

    //___________check avisos
    input2Text = document.createElement('input');// checkbox
    colunas2.appendChild(input2Text);// checkbox
    //Seleciona o campo criado

    input2Text =colunas2.childNodes[0];// checkbox
    input2Text.type = "checkbox";

    var ok2 = meuStorage.getItem('ok2');
    if(ok2 === null || ok2 === "" || ok2 === "false"){
        ok2 = "false";
        input2Text.checked = false;
    }else{
        ok2 = "true";
        input2Text.checked = true;
    }

    input2Text.onclick = function () {
        var okBo2 = "";
        if(ok2 === "false"){

            okBo2 = "true";
        }else{
            ok2 = "true";

            okBo2 = "false";
        }
        meuStorage.setItem('ok2', okBo2);
        window.location.reload(1);
    };
    if (ok2==="true" ){
        avisoOpcional = "yes"; //Yes para os avisos na área de trabalho
    }


    //___________check meus avisos

    input3Text = document.createElement('input');// checkbox
    colunas3.appendChild(input3Text);// checkbox

    input3Text =colunas3.childNodes[0];// checkbox
    input3Text.type = "checkbox";

    var ok3 = meuStorage.getItem('ok3');
    if(ok3 === null || ok3 === "" || ok3 === "false"){
        ok3 = "false";
        input3Text.checked = false;
    }else{
        ok3 = "true";
        input3Text.checked = true;
    }

    input3Text.onclick = function () {
        var okBo3 = "";
        if(ok3 === "false"){

            okBo3 = "true";
        }else{
            ok3 = "true";

            okBo3 = "false";
        }
        meuStorage.setItem('ok3', okBo3);
        window.location.reload(1);
    };
    if (ok3==="true" ){
        avisoOpcionalMeusDefeitos = "yes";
    }

    //_____________text nome

    inputText = colunas.childNodes[0];
    var placeHolder = meuStorage.getItem('nome');
    if(placeHolder === null || placeHolder === ""){
        placeHolder = "Digite seu nome & enter";
    }
    inputText.placeholder = placeHolder;
    inputText.onkeypress = function (event) {
        if (event.which == 13 || event.keyCode == 13) {
            meuStorage.setItem('nome', inputText.value);
            window.location.reload(1);
            return false;
        }
        return true;
    };
    console.log(botoes);
    console.log(inputText);


    //_____________text tempo

    input0Text = colunas0.childNodes[0];
    placeHolder = meuStorage.getItem('tempo0');
    if(placeHolder === null || placeHolder === ""){

        placeHolder = "Digite segundos refresh & enter";
    }

    input0Text.placeholder = placeHolder+" segundos refresh";
    input0Text.onkeypress = function (event) {
        if (event.which == 13 || event.keyCode == 13) {

            meuStorage.setItem('tempo0', input0Text.value);
            window.location.reload(1);
            return false;
        }
        return true;
    };


    var tempo =  meuStorage.getItem('tempo0');
    if(tempo === null || tempo === "" || isNaN(tempo) === true){
        tempo = "30";
        input0Text.placeholder = "30 segundos refresh";
    }
    var temporefresh1 = parseInt(tempo);
    var conver = 0;
    conver = temporefresh1 * 1000;
    if(conver < 30000){
        conver=30000;
        input0Text.placeholder = "30 segundos refresh";
    }

    console.log(tempo+" valor");
    console.log(botoes);
    console.log(temporefresh1+" segundos");
    console.log(conver+" milissegundos");


    var temporefresh = conver;
    // Tempo para atualização da página
    setTimeout(function(){
        window.location.reload(1);
    }, temporefresh);


    //_____________text sistemas

    input7Text = colunas7.childNodes[0];
    placeHolder = meuStorage.getItem('seussis');
    if(placeHolder === null || placeHolder === ""){
        placeHolder = "Digite sistemas & enter Ex: NGIN, PORTAL FEDERADO, SIGAN, ...";
        meuStorage.setItem('seussis', "");
        input7Text.placeholder = placeHolder;
    }
    if(placeHolder !== "Digite sistemas & enter Ex: NGIN, PORTAL FEDERADO, SIGAN, ..."){
        input7Text.value = placeHolder;
    }
    input7Text.style = "width:400px";
    input7Text.onkeypress = function (event) {
        if (event.which == 13 || event.keyCode == 13) {
            meuStorage.setItem('seussis', input7Text.value);
            window.location.reload(1);
            return false;

        }

        return true;

    };

    var sistemas3 = meuStorage.getItem('seussis');

    var sistemasarray = sistemas3.split(", ");
    console.log(sistemasarray);
    return sistemasarray;

}



function link(projectRef, project, domain, id){
    //Montagem do elemento link, do ALM, dentro do elemento project em cada linha
    var link = document.createElement('a');
    projectRef.removeChild(project);
    projectRef.appendChild(link);
    link = projectRef.childNodes[0];
    link.text = project.data;
    link.href = "td://"+project.data+"."+domain.data+".alm.vivo.com.br/qcbin/DefectsModule-000000004243046514?EntityType=IBug&&EntityID="+id.data;
}

function main(){
    try{

        var sistemasx = menuExtra();
        var meuStorage = localStorage;
        var ok109 = meuStorage.getItem('ok109');
        var optionAmbientes = "nao";
        if (ok109==="true" ){
            optionAmbientes = "sim"; //Yes para os avisos na área de trabalho
        }
        var ambientes = optionAmbientes;
        //For principal, onde vai percorer cada linha por vez
        for (i = 0; i < tabela.childNodes.length; i++) {
            //Seleciona os elementos em questão dentro da linha
            linha = tabela.childNodes[i];
            nome = linha.childNodes[0];
            nome = nome.childNodes[0];
            id = linha.childNodes[1];
            idRef = id.childNodes[0];
            id = idRef.childNodes[0];
            sistemaRef = linha.childNodes[5];
            if (ambientes == "sim"){
            slaRef = linha.childNodes[8];
            sla = slaRef.childNodes[0];}
            else{
            slaRef = linha.childNodes[9];
            sla = slaRef.childNodes[0];}
            var slaArray = sla.data.split(" ");
            var slaData = parseInt(slaArray[0]);
            severityRef = linha.childNodes[7];
            projectRef = linha.childNodes[3];
            domainRef = linha.childNodes[2];

            //If's dos elementos para verificar se está vazio, evitando que o plugin pare de funcionar
            if (sistemaRef.childNodes.length !== 0){
                sistema = sistemaRef.childNodes[0];
            }else{
                sistema = sistemaRef;
                sistema.data = "Sem sistema";
            }
            if (domainRef.childNodes.length !== 0){
                domain = domainRef.childNodes[0];
            }else{
                domain = domainRef;
                domain.data = "Sem dominio";
            }
            if (projectRef.childNodes.length !== 0){
                project = projectRef.childNodes[0];
            }else{
                project = projectRef;
                project.data = "Sem projeto";
            }
            if (severityRef.childNodes.length !== 0){
                severity = severityRef.childNodes[0];
            }else{
                severity = severityRef;
                severity.data = "Sem prioridade";
            }


            link(projectRef, project, domain, id);

            var meuStorage = localStorage;
            var placeHolder = meuStorage.getItem('nome');

            // Pinta os elementos importantes para ficar fácil a localização na tabela
            if(nome.data === meuStorage.getItem('nome')) //Seu nome
            {
                contMe++;
                defeitos.push(" \n"+id.data+" - "+sistema.data+" - "+sla.data);
                console.log(id.data+" está comigo");
                if (opcionalcores === "yes"){
                    linha.style = "background-color:#F0E68C";}
            }
            if(nome.data === "QA N1" ||nome.data === "Compasso N1" ||nome.data === "QA Gestão Ambientes"){
                console.log("contOpen++");
                contOpen++; //Conta quantos defeitos estão como QA N1
                if (opcionalcores === "yes"){
                    linha.style = backgroungDefAberto+";"+fonteDefAberto;
                    idRef.style = fonteDefAberto;
                    link.style = backgroungDefAberto+";"+fonteDefAberto;
                    //slaRef.style = "color:black";
                }
            }
            if(nome.data === "Matheus Canali Fossatti" && opcionalcores === "yes" || nome.data === "Laerte Loser" && opcionalcores === "yes" ){
                linha.style = backgroungDefAberto+";"+fonteDefAberto;
                idRef.style = fonteDefAberto;
                link.style = backgroungDefAberto+";"+fonteDefAberto;
            }
            for (var cont = 0; cont < sistemasx.length; cont++){
                if(nome.data=== "QA N1"  && sistema.data === sistemasx[cont] ||nome.data=== "Compasso N1"  && sistema.data === sistemasx[cont] || nome.data=== "QA Gestão Ambientes"  && sistema.data === sistemasx[cont]){
                    console.log("Encontrado");
                    sistemas.push(" "+sistema.data);
                    contSistema++;
                }
            }
            if(slaData >= 20 && (nome.data=== "QA N1" ||nome.data=== "Compasso N1" ||nome.data=== "QA Gestão Ambientes" ) && slaArray[1] === "Minute(s)" && opcionalcores === "yes"){
                slaRef.style = "background-color:goldenrod; color: black";

            }
            if(slaData >= 30 && (nome.data=== "QA N1" ||nome.data=== "Compasso N1" ||nome.data=== "QA Gestão Ambientes" )  && slaArray[1] === "Minute(s)" && opcionalcores === "yes"){
                slaRef.style = "background-color:tomato; color: black";

            }
            for (cont = 0; cont < sistemasx.length; cont++){
                if(opcionalcores === "yes" && sistema.data === sistemasx[cont] && (nome.data=== "QA N1" ||nome.data=== "Compasso N1" ||nome.data=== "QA Gestão Ambientes" ) ){
                    sistemaRef.style = "color:green;font-weight: bold";
                    idRef.style = "color:green;font-weight: bold";
                }
            }
             for (cont = 0; cont < monitorarqc.length; cont++){
                if(opcionalcores === "yes" && id.data === monitorarqc[cont]){
                    sistemaRef.style = "color:green;font-weight: bold";
                    idRef.style = "color:green;font-weight: bold";
                    qcs.push(" \n"+id.data+" - "+sistema.data+" - "+sla.data);
                    contQcs++;
                }
            }
            if(slaData >= 1 && slaArray[1] === "Hour(s)" && opcionalcores === "yes"){
                slaRef.style = "background-color:tomato; color: black";
            }
            if(severity.data === "4-Show Stopper" && opcionalcores === "yes"){
                severityRef.style = "font-weight: bold; color:red";
            }
            console.log(sistema.data);
        }

        // ---------------------------------------------------""""AQUI AVISOS""""----------------------------------------------------------------
        var tit = 'limpo';
        if(ambientes === 'sim'){
         tit = 'VIVO AMBIENTES' ;

        }else
            tit = 'VIVO N1' ;

        if(contMe !== 0 && contSistema !==0 && avisoOpcional === "yes"){
            GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                             "\nVocê está com "+contMe+" defeito(s)!"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: tempoVidaNotif, title: tit});
        }else if(contMe !== 0 && avisoOpcional === "yes"){
            GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                             "\nVocê está com "+contMe+" defeito(s)!", timeout: tempoVidaNotif, title: tit});
        } else if(contSistema !==0 && avisoOpcional === "yes"){
            GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                             "\nVocê não possui defeitos"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: tempoVidaNotif, title: tit});
        }
        else if(avisoOpcional === "yes"){
            GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                             "\nVocê não possui defeitos", timeout: tempoVidaNotif, title: tit});
        } if(contMe !== 0 && avisoOpcionalMeusDefeitos === "yes"){
            GM_notification({text: "Detalhado(s): "+defeitos, timeout: tempoVidaNotif, title: "MEUS QC'S" });
        }
        if(contQcs !== 0){
            GM_notification({text: "VOLTOOOU "+qcs, timeout: tempoVidaNotif, title: "VOLTOOOOOU" });
        }

        console.log("Total: "+tabela.childNodes.length+" defeitos");
    }
    catch(err) {
        var page_title = document.getElementsByClassName("page_title");
        if(avisoOpcional === "yes" && page_title !== null){
            GM_notification({text: "Atualmente não existe defeito(s) aberto(s)!", timeout: tempoVidaNotif, title: tit});
        }else{
            GM_notification({text: "Página não foi carregada!", timeout: tempoVidaNotif, title: tit});
        }
        console.log(err);
    }
}
