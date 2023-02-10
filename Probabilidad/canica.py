import random
import os

#Definimos los colores de las canicas
colores = ["rojo", "azul", "verde", "amarillo", "blanco", "negro"]

#Diccionario para almacenar la cantidad de canicas de cada color
canicas = {color: 0 for color in colores}

# Variable para guardar el total de canicas agregadas
total_canicas = 0

# Función que devuelve un color aleatorio
def get_color():
  return random.choice(colores)

#Función para calcular la probabilidad de sacar una canica de un color determinado
def probabilidad(color):
    if total_canicas==0:
        return 0
    return canicas[color]/total_canicas

#Función para jugar con las canicas
print("/nBienvenido al juego de la Canica")
print("Tienes los siguientes colores: ", colores)
for color in colores:
  num = int(input("Cuantas canicas de color " + color + " quieres? (máximo 10): "))
  num = min(num, 10)
  canicas[color] = num
  total_canicas += num


# Mostramos la probabilidad de sacar cada color
for color in colores:
  prob = probabilidad(color) * 100
  print("Probabilidad de sacar una canica de color {}: {:.2f}% (cantidad: {})".format(color, prob, canicas[color]))


# Repetimos este proceso hasta que el usuario decida detenerlo
seguir = True
while seguir:
  color = get_color()
  prob = probabilidad(color) * 100
  
  print("Has sacado una canica de color {} (probabilidad {:.2f})".format(color, prob))
  
  canicas[color] -= 1
  total_canicas -= 1
  
  seguir = input("¿Quieres seguir sacando canicas? (s/n): ") == "s"


