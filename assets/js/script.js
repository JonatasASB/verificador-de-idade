function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('ano');
    var res = document.getElementById('res');
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO]! Verifique as informações inseridas')
    } else {
        var formSex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'photo');
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 3) {
                //bebê
                img.setAttribute('src', 'assets/images/foto-bb-m.jpg');
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'assets/images/foto-crianca-m.jpg');
            } else if (idade < 17) {
                //adolescente
                img.setAttribute('src', 'assets/images/foto-adolescente-m .jpg');
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'assets/images/foto-jovem-m.jpg');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'assets/images/foto-adulto-m.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'assets/images/foto-idoso-m.jpg');
            }
        } else if (formSex[1].checked)  {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3) {
                //bebe
                img.setAttribute('src', 'assets/images/foto-bebe-f.jpg');
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'assets/images/foto-crianca-f.jpg');
            } else if (idade < 17) {
                //adolescente
                img.setAttribute('src', 'assets/images/foto-adolescente-f.jpg');
            } else if (idade < 31) {
                //jovem
                img.setAttribute('src', 'assets/images/foto-jovem-f.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'assets/images/foto-adulta-f.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'assets/images/foto-idosa-f.jpg');
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${genero} com ${idade} anos`
    res.appendChild(img)
};