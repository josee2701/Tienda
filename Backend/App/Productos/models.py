from django.db import models

# Create your models here.

class Product(models.Model):
    """
    Se realiza la creación del modelo para los productos
    
    """

    nombre= models.CharField(max_length=50)
    precio=models.DecimalField(decimal_places=1)
    descripcion=models.CharField(max_length=250)

    def __str__(self):
        
        return f"{self.nombre}"
