from rest_framework import serializers

from.models import Stock


class StockSerializer(serializers.ModelSerializer):
    producto_nombre = serializers.CharField(source='producto.nombre', read_only=True)

    class Meta:
        model = Stock
        fields = ['id', 'producto', 'producto_nombre', 'cantidad', 'fecha']