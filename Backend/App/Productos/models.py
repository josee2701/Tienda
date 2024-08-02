from django.db import models

# Create your models here.

class Product(models.Model):
    """
    Se realiza la creación del modelo para los productos
    
    """

    nombre= models.CharField(max_length=50)
    precio=models.DecimalField(max_digits=10,decimal_places=1)
    imagen = models.FileField(default='https://via.placeholder.com/2400x1350')
    color= models.TextField(default='#00000')

    def __str__(self):
        
        return f"{self.nombre}"
