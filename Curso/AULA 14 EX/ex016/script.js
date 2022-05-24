function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    


    if (ini.value == "" || fim.value == "" || pas.value == "") {
        res.innerText = `Impossivel contar! Precisa preencher todos os campos`
          } else {
           ini = Number(ini.value)
           fim = Number(fim.value)
           pas = Number(pas.value)
           var sla = ini



    
              if(pas == 0){
                   window.alert(`Passo Invalido! Considere Passo 1`)
                   pas = 1
               }
           if(fim <= pas ){
            res.innerText = `Impossivel contar! Pois o FIM é menor que o PASSO`
         } else {

            if(fim < ini){

                for(var c = ini; c >= fim; c = c-pas){

                    if (c >= sla){
                       }else {
                           sla = `${sla} 👉 ${c}`
                       }
                    }

            }

              for(var c = ini; c <= fim; c = c+pas){

              if (c <= sla){
                 }else {
                     sla = `${sla} 👉 ${c}`
                 }
              }
       
             res.innerHTML = `Contando: <br>${sla} 🏁`

            }

        }


}