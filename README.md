# Guía del Mercader Kudert
La solución del ejercicio se encuentra desarrollado en el Javascript (Node.js) v8.11.3.

Para su ejecución se realizara a través del comando
node mercader.js

En su ejecución se presenta el siguiente mensaje
	-----------Menu------------
		1) Alias al Romano
		2) Recursos
		3) How Much is
		4) How Many Dollars is
		5) Salir
	--------------------------
1) Alias Romano
Permite el ingreso del alias al numero romano "" 				
	pouet is I
	plouf is V
	cuic is X
	boum is L 

2)Recursos
Permite el ingreso del alias "número romano" con un recurso ["Empanada, Ceviche, Hornado, Etc"] con su valor en dolares
	pouet pouet Empanada is 6 Dollars
	pouet plouf Ceviche is 20 Dollars
	cuic cuic Hornado is 60 Dollars

3) How Many is 
Permite conocer de una expresión "alias" a Decimal
	how much is cuic boum pouet pouet ?
	[Respuesta tras su ejecución] 
		==> cuic boum pouet pouet is 42

4) How Many Dollars is
Permite conocer el valor de un recurso ["Empanada, Ceviche, Hornado, Etc"] 
	how many Dollars is pouet plouf Empanada ?
	how many Dollars is pouet plouf Ceviche ?
	how many Dollars is pouet plouf Hornado ?
	[Respuesta tras su ejecución] 
		==>pouet plouf Empanada is 12 dollars
		==>pouet plouf Ceviche is 20 dollars
		==>pouet plouf Hornado is 12 dollars

