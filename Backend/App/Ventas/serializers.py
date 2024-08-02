from rest_framework import serializers

from.models import Ventas

from App.Stock.models import Stock


class VentasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ventas
        fields = '__all__'

    def create(self, validated_data):
        product = validated_data.get('product')
        cantidad = validated_data.get('cantidad')

        try:
            stock = Stock.objects.get(producto=product)
        except Stock.DoesNotExist:
            raise serializers.ValidationError("Producto no tiene stock disponible.")

        if stock.cantidad < cantidad:
            raise serializers.ValidationError("No hay suficiente stock disponible.")

        stock.cantidad -= cantidad
        stock.save()

        return super().create(validated_data)