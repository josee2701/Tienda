from django.shortcuts import render
from rest_framework import viewsets

from .models import Ventas
from .serializers import VentasSerializer

# Create your views here.

class VentasViewSet(viewsets.ModelViewSet):
    queryset = Ventas.objects.all()
    serializer_class = VentasSerializer