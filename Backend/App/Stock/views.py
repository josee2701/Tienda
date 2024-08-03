from django.shortcuts import render
from rest_framework import viewsets

from .models import Stock
from .serializers import StockSerializer

# Create your views here.

class StockViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all().order_by('id')
    serializer_class = StockSerializer