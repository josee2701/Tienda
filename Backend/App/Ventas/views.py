import json
from datetime import date

from App.Productos.models import Product
from App.Stock.models import Stock
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Ventas
from .serializers import VentasSerializer

# Create your views here.

class VentasViewSet(viewsets.ModelViewSet):
    queryset = Ventas.objects.all().order_by('id')
    serializer_class = VentasSerializer
    