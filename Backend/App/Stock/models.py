from App.Productos.models import Product
from django.db import models

# Create your models here.


class Stock (models.Model):
    """
    Se realiza modelo para el stock para tener todo el proceso de invetario
    """
    producto = models.ForeignKey(Product, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    fecha = models.DateField(auto_now_add=True)
 
    def __str__(self):
        return f'{self.producto} - {self.cantidad} - {self.fecha}'
    