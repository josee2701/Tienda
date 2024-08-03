from App.Productos.models import Product
from App.Stock.models import Stock
from django.db import models

# Create your models here.

class Ventas(models.Model):
    """
    Se realiza el modelo para el tema de la ventas    
    """
    fecha = models.DateField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cliente = models.CharField(max_length=100)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    cantidad = models.IntegerField(default=0)
    
    

    def __str__(self):
        """Unicode representation of MODELNAME."""
        pass
