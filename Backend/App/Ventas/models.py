from App.Productos.models import Product
from App.Stock.models import Stock
from django.db import models

# Create your models here.

class Sale(models.Model):
    """
    Se realiza el modelo para el tema de la ventas    
    """
    date_sale = models.DateField()
    total_sale = models.DecimalField(max_digits=10, decimal_places=2)
    customer = models.CharField(max_length=100)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    stock = models.ForeignKey(Stock, null=True,blank=True)
    
    

    def __str__(self):
        """Unicode representation of MODELNAME."""
        pass
