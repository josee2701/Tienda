# Generated by Django 4.2.14 on 2024-08-02 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Productos', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='descripcion',
        ),
        migrations.AddField(
            model_name='product',
            name='color',
            field=models.TextField(default='#00000'),
        ),
        migrations.AddField(
            model_name='product',
            name='imagen',
            field=models.FileField(default='https://via.placeholder.com/2400x1350', upload_to=''),
        ),
    ]