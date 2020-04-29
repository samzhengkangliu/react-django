from django.db import models

class BookNumber(models.Model):
    isbn_10 = models.CharField(max_length=10, blank=True)
    isbn_13 = models.CharField(max_length=13, blank=True)

class Book(models.Model):
    # null - if the field is empty then we store null in the database
    # blank - validation: False - requried, True - can be empty
    # unique - validation
    # default - by default it will be the string
    # choices - only values in the tuple will be accepted
    title = models.CharField(max_length=36, blank=False, unique=True)
    description = models.TextField(max_length=256, blank=True)

    # DecimalField or FloatField both works for the price
    # decimal_places - how many decimals you need
    price = models.DecimalField(default=0, max_digits=5, decimal_places=2)

    # auto_now - set the current date whenever you create/edit and save it
    # auto_now_add - set the current date when you create a book
    # TimeField, DateField, DateTimeField
    published = models.DateField(blank=True, null=True, default=None)
    is_published = models.BooleanField(default=False)

    # FileField - upload file
    # ImageField - accepts image
    cover = models.ImageField(upload_to='covers/', blank=True)

    # ONE TO ONE
    number = models.OneToOneField(
        BookNumber, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Character(models.Model):
    name = models.CharField(max_length=30)
    # ONE TO MANY
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='characters')

# MANY TO MANY
class Author(models.Model):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    books = models.ManyToManyField(Book, related_name='authors')

