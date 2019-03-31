let tema;
let modo;
let temas = 0;
let lugares;
let opciones;
let eleccion;
let turno = 1;
let vidas_jugador1 = 3;
let vidas_jugador2 = 3;
let contador_jugador1 = 0;
let contador_jugador2 = 0;

let acierto;
let opcion_correcta;

let bandera_numero;
let bandera_numero1;
let bandera_numero2;
let bandera_numero3;

let bandera_elegida1;
let bandera_elegida2;
let bandera_elegida3;

let opcion_numero;
let opcion_numero1;
let opcion_numero2;
let opcion_numero3;

let opcion_elegida;
let opcion_elegida1;
let opcion_elegida2;
let opcion_elegida3;
let opcion_elegida4;

let primer_jugador;
let segundo_jugador;

let nombre_jugador1;
let nombre_jugador2;

function titulo(){
	alert("Contacto: marcosbuchert@gmail.com");
}

function siguiente(){
	turno = 1;
	vidas_jugador = 3;
	vidas_jugador1 = 3;
	vidas_jugador2 = 3;
	contador_jugador = 0;
	contador_jugador1 = 0;
	contador_jugador2 = 0;

	document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
	document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
	document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
	document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
	document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
	document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";

	document.getElementById("selec_tema").style.display = "none";
	document.getElementById("juego_recuadro").style.display = "none";
	document.getElementById("cant_jugadores").style.display = "block";
	document.getElementById("home").style.display = "none";
}

function siguiente1(){
	primer_jugador = document.getElementById("nombre_jugador1").value;
	segundo_jugador = document.getElementById("nombre_jugador2").value;
	if (modo == "1jugador"){
		if (primer_jugador != ""){
		document.getElementById("cant_jugadores").style.display = "none";
		document.getElementById("juego_recuadro").style.display = "none";
		document.getElementById("selec_tema").style.display = "block";
		document.getElementById("home").style.display = "block";
		} else{
			document.getElementById("nombre_jugador1").focus();
		}
	} else{
		if (modo == "2jugadores"){
			if ((primer_jugador != "") && (segundo_jugador != "")){
				document.getElementById("cant_jugadores").style.display = "none";
				document.getElementById("juego_recuadro").style.display = "none";
				document.getElementById("selec_tema").style.display = "block";
				document.getElementById("home").style.display = "block";
			} else{
				if (primer_jugador == ""){
					document.getElementById("nombre_jugador1").focus();
				} else{
					document.getElementById("nombre_jugador2").focus();
				}
			}
		}
	}
}			

function siguiente2(){
	document.getElementById("cant_jugadores").style.display = "none";
	document.getElementById("selec_tema").style.display = "none";
	document.getElementById("juego_recuadro").style.display = "block";
}

function modo1(){
	modo = "1jugador";
	document.getElementById("titulo_modo").innerHTML = "Modo : " + modo;
	document.getElementById("segundo_jugador2").style.display = "none";
	document.getElementById("primer_jugador1").style.display = "block";
	document.getElementById("siguiente1").style.display = "block";
}

function modo2(){
	modo = "2jugadores";
	document.getElementById("titulo_modo").innerHTML = "Modo : " + modo;
	document.getElementById("segundo_jugador2").style.display = "block";
	document.getElementById("primer_jugador1").style.display = "block";
	document.getElementById("siguiente1").style.display = "block";
}

function tema_provincias(){
	tema = "provincias";
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	document.getElementById("siguiente2").style.display = "block";
	temas = 1;
}

function tema_america(){
	tema = "america";
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	document.getElementById("siguiente2").style.display = "block";
	temas = 1;
}

function tema_europa(){
	tema = "europa";
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	document.getElementById("siguiente2").style.display = "block";
	temas = 1;
}

function tema_asia(){
	tema = "asia";
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	document.getElementById("siguiente2").style.display = "block";
	temas = 1;
}

function tema_africa(){
	tema = "africa";
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	document.getElementById("siguiente2").style.display = "block";
	temas = 1;
}

function tema_oceania(){
	tema = "oceania";
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	document.getElementById("siguiente2").style.display = "block";
	temas = 1;
}

function comenzar(){
	if (tema == "provincias"){
		lugares = ["chubut", "cordoba", "formosa", "mendoza", "santafe", 
		"rionegro", "tucuman", "sanjuan", "buenosaires", "misiones"];
	} else{
		if (tema == "america"){
			lugares = ["canada", "bolivia", "brasil", "chile", "guatemala", 
			"mexico", "paraguay", "peru", "uruguay", "venezuela", "belice", 
			"colombia", "costarica", "ecuador", "elsalvador", "estadosunidos", 
			"guayanafrancesa", "honduras", "nicaragua", "panama", "surinam"];
		} else{
			if (tema == "europa"){
				lugares = ["alemania", "escocia", "españa", "francia", "gales", 
				"holanda", "irlanda", "italia", "reinounido", "republicacheca"];
			} else{
				if (tema == "asia"){
					lugares = ["china", "coreadelnorte", "coreadelsur", "filipinas", 
					"japon", "laos", "nepal", "tailandia", "taiwan", "turquia"];
				} else{
					if(tema == "africa"){
						lugares = ["angola", "argelia", "benin", "botswana", "burkinafaso", 
						"burundi", "egipto", "jordania", "nigeria", "sudafrica"];
					} else{
						if(tema == "oceania"){
							lugares = ["australia", "fiji", "islasalomon", "islasmarshall", 
							"kiribati", "nauru", "nuevazelanda", "palaos", "tonga", "tuvalu"];
						}
					}
				}
			}
		} 
	}
	document.getElementById("opcion_1").style.background = "#2655a0";
	document.getElementById("opcion_2").style.background = "#2655a0";
	document.getElementById("opcion_3").style.background = "#2655a0";
	document.getElementById("opcion_4").style.background = "#2655a0";

	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (turno % 2 != 0){
		document.getElementById("primer_jugador").style.color="yellow";
		document.getElementById("segundo_jugador").style.color="black"; 
	} else{
		document.getElementById("segundo_jugador").style.color="yellow";
		document.getElementById("primer_jugador").style.color="black";
	}

	elec_vidas();
	elegir_bandera();
	elegir_opcion_correcta();
	elegir_bandera1_incorrecta();
	elegir_opcion1_incorrecta();
	elegir_bandera2_incorrecta();
	elegir_opcion2_incorrecta();
	elegir_bandera3_incorrecta();
	elegir_opcion3_incorrecta();
}

function elec_vidas(){
	if (modo == "1jugador"){
		document.getElementById("vidas_1jugador").style.display = "block";
		document.getElementById("vidas_primer_jugador").style.display = "none";
		document.getElementById("vidas_segundo_jugador").style.display = "none";
	} else{
		if (modo == "2jugadores"){
			document.getElementById("vidas_1jugador").style.display = "none";
			document.getElementById("vidas_primer_jugador").style.display = "block";
			document.getElementById("vidas_segundo_jugador").style.display = "block";
			document.getElementById("primer_jugador").innerHTML = primer_jugador;
			document.getElementById("segundo_jugador").innerHTML = segundo_jugador;
		} 
	}
}

function elegir_bandera(){
	bandera_numero = lugares.length;
	bandera_elegida = Math.floor(Math.random()*(bandera_numero + 1));
	document.getElementById("bandera").innerHTML = "<img src=img/" + tema + "/" + lugares[bandera_elegida] + ".png>";
}

function elegir_opcion_correcta(){
	opcion_numero = opciones.length;
	opcion_elegida1 = Math.floor(Math.random()*opcion_numero);
	if (opciones[opcion_elegida1] == "opcion_1"){
		document.getElementById("opcion_1").innerHTML = lugares[bandera_elegida];
	} else{
		if (opciones[opcion_elegida1] == "opcion_2"){
			document.getElementById("opcion_2").innerHTML = lugares[bandera_elegida];
		} else{
			if (opciones[opcion_elegida1] == "opcion_3"){
				document.getElementById("opcion_3").innerHTML = lugares[bandera_elegida];
			} else{
				document.getElementById("opcion_4").innerHTML = lugares[bandera_elegida];
			}
		}
	}
}

function elegir_bandera1_incorrecta(){
	lugares.splice(bandera_elegida, 1);
	bandera_numero1 = lugares.length;
	bandera_elegida1 = Math.floor(Math.random()*bandera_numero1);
}

function elegir_opcion1_incorrecta(){
	opciones.splice(opcion_elegida1, 1);
	opcion_numero1 = opciones.length;
	opcion_elegida2 = Math.floor(Math.random()*opcion_numero1);
	if (opciones[opcion_elegida2] == "opcion_1"){
		document.getElementById("opcion_1").innerHTML = lugares[bandera_elegida1];
	} else{
		if (opciones[opcion_elegida2] == "opcion_2"){
			document.getElementById("opcion_2").innerHTML = lugares[bandera_elegida1];
		} else{
			if (opciones[opcion_elegida2] == "opcion_3"){
				document.getElementById("opcion_3").innerHTML = lugares[bandera_elegida1];
			} else{
				document.getElementById("opcion_4").innerHTML = lugares[bandera_elegida1];
			}
		}
	}	
}

function elegir_bandera2_incorrecta(){
	lugares.splice(bandera_elegida1, 1);
	bandera_numero2 = lugares.length;
	bandera_elegida2 = Math.floor(Math.random()*bandera_numero2);
}

function elegir_opcion2_incorrecta(){
	opciones.splice(opcion_elegida2, 1);
	opcion_numero2 = opciones.length;
	opcion_elegida3 = Math.floor(Math.random()*opcion_numero2);
	if (opciones[opcion_elegida3] == "opcion_1"){
		document.getElementById("opcion_1").innerHTML = lugares[bandera_elegida2];
	} else{
		if (opciones[opcion_elegida3] == "opcion_2"){
			document.getElementById("opcion_2").innerHTML = lugares[bandera_elegida2];
		} else{
			if (opciones[opcion_elegida3] == "opcion_3"){
				document.getElementById("opcion_3").innerHTML = lugares[bandera_elegida2];
			} else{
				document.getElementById("opcion_4").innerHTML = lugares[bandera_elegida2];
			}
		}
	}
}

function elegir_bandera3_incorrecta(){
	lugares.splice(bandera_elegida2, 1);
	bandera_numero3 = lugares.length;
	bandera_elegida3 = Math.floor(Math.random()*bandera_numero3);
}

function elegir_opcion3_incorrecta(){
	opciones.splice(opcion_elegida3, 1);
	opcion_numero3 = opciones.length;
	opcion_elegida4 = Math.floor(Math.random()*opcion_numero3);
	if (opciones[opcion_elegida4] == "opcion_1"){
		document.getElementById("opcion_1").innerHTML = lugares[bandera_elegida3];
	} else{
		if (opciones[opcion_elegida4] == "opcion_2"){
			document.getElementById("opcion_2").innerHTML = lugares[bandera_elegida3];
		} else{
			if (opciones[opcion_elegida4] == "opcion_3"){
				document.getElementById("opcion_3").innerHTML = lugares[bandera_elegida3];
			} else{
				document.getElementById("opcion_4").innerHTML = lugares[bandera_elegida3];
			}
		}
	}	
}

function opcion_1(){
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (modo == "1jugador"){
			if (opciones[opcion_elegida1] == "opcion_1") {
				contador_jugador1++;
				document.getElementById("opcion_1").style.background = "green";
				setTimeout(comenzar, 1000);
			} else{
				if (vidas_jugador1 > 1){
					vidas_jugador1--;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
					document.getElementById("opcion_1").style.background = "red";
					setTimeout(comenzar, 1000);
				} else{
					vidas_jugador1 = 3;
					contador_jugador1 = 0;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
					document.getElementById("opcion_1").style.background = "red";
					alert("PERDISTE!");
					setTimeout(comenzar, 1000);
				}
			}
		} else{
			if (opciones[opcion_elegida1] == "opcion_1") {
				if (turno % 2 != 0){
					contador_jugador1++
				} else{
					contador_jugador2++
				}
				turno++;
					document.getElementById("opcion_1").style.background = "green";
					setTimeout(comenzar, 1000);
			} else{
				if (turno % 2 != 0){
					if (vidas_jugador1 > 1){
						vidas_jugador1--;
						turno++;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_1").style.background = "red";
						setTimeout(comenzar, 1000);
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_1").style.background = "red";
						setTimeout(comenzar, 1000);
						turno = 1;
						alert(segundo_jugador + " GANOOO!");
					}
				} else{
					if (vidas_jugador2 > 1){
						vidas_jugador2--;
						turno++;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_1").style.background = "red";
						setTimeout(comenzar, 1000);
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_1").style.background = "red";
						setTimeout(comenzar, 1000);
						turno = 1;
						alert(primer_jugador + " GANOOO!");
					}
				}
			}
		}
		document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
}
function opcion_2(){
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (modo == "1jugador"){
			if (opciones[opcion_elegida1] == "opcion_2") {
				contador_jugador1++;
				document.getElementById("opcion_2").style.background = "green";
				setTimeout(comenzar, 1000);
			} else{
				if (vidas_jugador1 > 1){
					vidas_jugador1--;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
					document.getElementById("opcion_2").style.background = "red";
					setTimeout(comenzar, 1000);
				} else{
					vidas_jugador1 = 3;
					contador_jugador1 = 0;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
					document.getElementById("opcion_2").style.background = "red";
					alert("PERDISTE!");
					setTimeout(comenzar, 1000);
				}
			}
		} else{
			if (opciones[opcion_elegida1] == "opcion_2") {
				if (turno % 2 != 0){
					contador_jugador1++
				} else{
					contador_jugador2++
				}
				turno++;
					document.getElementById("opcion_2").style.background = "green";
					setTimeout(comenzar, 1000);
			} else{
				if (turno % 2 != 0){
					if (vidas_jugador1 > 1){
						vidas_jugador1--;
						turno++;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_2").style.background = "red";
						setTimeout(comenzar, 1000);
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_2").style.background = "red";
						setTimeout(comenzar, 1000);
						turno = 1;
						alert(segundo_jugador + " GANOOO!");
					}
				} else{
					if (vidas_jugador2 > 1){
						vidas_jugador2--;
						turno++;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_2").style.background = "red";
						setTimeout(comenzar, 1000);
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_2").style.background = "red";
						setTimeout(comenzar, 1000);
						turno = 1;
						alert(primer_jugador + " GANOOO!");
					}
				}
			}
		}
		document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
}

function opcion_3(){
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (modo == "1jugador"){
			if (opciones[opcion_elegida1] == "opcion_3") {
				contador_jugador1++;
				document.getElementById("opcion_3").style.background = "green";
				setTimeout(comenzar, 1000);
			} else{
				if (vidas_jugador1 > 1){
					vidas_jugador1--;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
					document.getElementById("opcion_3").style.background = "red";
					setTimeout(comenzar, 1000);
				} else{
					vidas_jugador1 = 3;
					contador_jugador1 = 0;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
					document.getElementById("opcion_3").style.background = "red";
					alert("PERDISTE!");
					setTimeout(comenzar, 1000);
				}
			}
		} else{
			if (opciones[opcion_elegida1] == "opcion_3") {
				if (turno % 2 != 0){
					contador_jugador1++
				} else{
					contador_jugador2++
				}
				turno++;
				document.getElementById("opcion_3").style.background = "green";
				setTimeout(comenzar, 1000);
			} else{
				if (turno % 2 != 0){
					if (vidas_jugador1 > 1){
						vidas_jugador1--;
						turno++;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_3").style.background = "red";
						setTimeout(comenzar, 1000);
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_3").style.background = "red";
						setTimeout(comenzar, 1000);
						turno = 1;
						alert(segundo_jugador + " GANOOO!");
					}
				} else{
					if (vidas_jugador2 > 1){
						vidas_jugador2--;
						turno++;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_3").style.background = "red";
						setTimeout(comenzar, 1000);
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_3").style.background = "red";
						setTimeout(comenzar, 1000);
						turno = 1;
						alert(primer_jugador + " GANOOO!");
					}
				}
			}
		}
		document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
}

function opcion_4(){
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (modo == "1jugador"){
			if (opciones[opcion_elegida1] == "opcion_4") {
				contador_jugador1++;
				document.getElementById("opcion_4").style.background = "green";
				setTimeout(comenzar, 1000);
			} else{
				if (vidas_jugador1 > 1){
					vidas_jugador1--;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
					document.getElementById("opcion_4").style.background = "red";
					setTimeout(comenzar, 1000);
				} else{
					vidas_jugador1 = 3;
					contador_jugador1 = 0;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
					document.getElementById("opcion_4").style.background = "red";
					alert("PERDISTE!");
					setTimeout(comenzar, 1000);
				}
			}
		} else{
			if (opciones[opcion_elegida1] == "opcion_4") {
				if (turno % 2 != 0){
					contador_jugador1++
				} else{
					contador_jugador2++
				}
				turno++;
				document.getElementById("opcion_4").style.background = "green";
				setTimeout(comenzar, 1000);
			} else{
				if (turno % 2 != 0){
					if (vidas_jugador1 > 1){
						vidas_jugador1--;
						turno++;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_4").style.background = "red";
						setTimeout(comenzar, 1000);
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
					document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_4").style.background = "red";
						setTimeout(comenzar, 1000);
						turno = 1;
						alert(segundo_jugador + " GANOOO!");
					}
				} else{
					if (vidas_jugador2 > 1){
						vidas_jugador2--;
						turno++;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_4").style.background = "red";
						setTimeout(comenzar, 1000);
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						document.getElementById(opciones[opcion_elegida1]).style.background = "green";
						document.getElementById("opcion_4").style.background = "red";
						setTimeout(comenzar, 1000);
						turno = 1;
						alert(primer_jugador + " GANOOO!");
					}
				}
			}
		}
		document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
}