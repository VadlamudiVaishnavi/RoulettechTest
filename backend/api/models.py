from django.db import models


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title
