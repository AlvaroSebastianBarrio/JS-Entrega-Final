
let Empleados = `[
  {
    "Nombre": "JOSE PEREZ",
    "Puesto": "Administrativo"
  },
  {
    "Nombre": "PEDRO RAMOS",
    "Puesto": "Analista"
  },
  {
    "Nombre": "ALBERTO LOPEZ",
    "Puesto": "Gerente"
  }
]
`;

const jsonData = JSON.parse(Empleados);

var arreglo1 = [];

for (let z = 0; z< jsonData.length; z++) {
  arreglo1.push(jsonData[z].Nombre)
}



var select = document.getElementById("select"),
    arr = [];
    arr = arreglo1;
     
    function insertar(arreglo1){
        for (let i = 0; i< arr.length; i++){
        const elementos = document.getElementById("select")
        let htmlToInsert = "<option>"+arr[i]+"</option>"
        elementos.insertAdjacentHTML("beforeend",htmlToInsert)
                
        
        }
    }
 
insertar();

var a = 0;
var b;    
let checkbox = document.getElementById('Sindicato');
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox(){
  var checked = checkbox.checked;
  if(checked){
    //alert('checkbox esta seleccionado');
    a=1;
    return a;
  } else {
    //alert('checkbox NO esta seleccionado');
    a=2;
    return a;
  }

}

validaCheckbox();



// calculo de porcentajes , deducciones y Sueldo NETO - Imprime en pantalla descuentos y sueldo Neto

function Calcular(){
        
    let bruto = document.getElementById("SueldoBruto").value;
    let SueldosSinDeducciones = parseFloat(bruto);
    let ImpuestoGanancias = (35*SueldosSinDeducciones)/100;
    
    let jubilacion = (11*SueldosSinDeducciones)/100;
    let ObraSocial = (SueldosSinDeducciones*3)/100;
    let PAMI = (SueldosSinDeducciones*3)/100;
    
    let sindicato = (SueldosSinDeducciones*2)/100;
    let NombreDelEmpleado = document.getElementById("select").value;

    if(a === 2){
      
      let neto = SueldosSinDeducciones - (jubilacion + ObraSocial + PAMI );
      if(SueldosSinDeducciones >= 330000)
      document.write('</br>'+'<h2>'+"Recibo de Sueldo:"+'</h2>'+'<br>'+"Nombre del Empleado: "+document.getElementById("select").value+'<br>'+'<hr style="width:70%;text-align:left;margin-left:0">'+"Sueldo Bruto: $"+SueldosSinDeducciones + '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Jubilacion: $"+jubilacion+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Obra Social: $"+ObraSocial+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Ley 19032 PAMI: $"+PAMI+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Impuesto a las Ganancias: $"+ImpuestoGanancias+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+'<h3>'+"NETO A COBRAR:"+'</h3>'+"$"+neto+'<br>').innerHTML;
      else document.write('</br>'+'<h2>'+"Recibo de Sueldo:"+'</h2>'+'<br>'+"Nombre del Empleado: "+document.getElementById("select").value+'<br>'+'<hr style="width:70%;text-align:left;margin-left:0">'+"Sueldo Bruto: $"+SueldosSinDeducciones + '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Jubilacion: $"+jubilacion+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Obra Social: $"+ObraSocial+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Ley 19032 PAMI: $"+PAMI+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+'<h3>'+"NETO A COBRAR:"+'</h3>'+"$"+neto+'<br>').innerHTML;

    }
    if(a === 1){
      
      let neto = SueldosSinDeducciones - (jubilacion + ObraSocial + PAMI + sindicato);
      if(SueldosSinDeducciones >= 330000)
      document.write('<br>'+'<h2>'+"Recibo de Sueldo:"+'</h2>'+'<br>'+"Nombre del Empleado: "+document.getElementById("select").value+'<br>'+'<hr style="width:70%;text-align:left;margin-left:0">'+"Sueldo Bruto: $"+SueldosSinDeducciones + '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Jubilacion: $"+jubilacion+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Obra Social: $"+ObraSocial+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Ley 19032 PAMI: $"+PAMI+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Sindicato: $"+sindicato+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Impuesto a las Ganancias: $"+ImpuestoGanancias+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+'<h3>'+"NETO A COBRAR:"+'</h3>'+"$"+neto+'<br>').innerHTML;
      else document.write('<br>'+'<h2>'+"Recibo de Sueldo:"+'</h2>'+'<br>'+"Nombre del Empleado: "+document.getElementById("select").value+'<br>'+'<hr style="width:70%;text-align:left;margin-left:0">'+"Sueldo Bruto: $"+SueldosSinDeducciones + '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Jubilacion: $"+jubilacion+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Obra Social: $"+ObraSocial+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Ley 19032 PAMI: $"+PAMI+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+"Sindicato: $"+sindicato+ '<br>'+'<hr style="width:50%;text-align:left;margin-left:0">'+'<h3>'+"NETO A COBRAR:"+'</h3>'+"$"+neto+'<br>').innerHTML;
      
    }
        
    
}  











