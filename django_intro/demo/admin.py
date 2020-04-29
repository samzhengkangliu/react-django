from django.contrib import admin
from .models import Book, BookNumber, Character, Author

#admin.site.register(Book)

# Another way of registering model with more customizations:
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    # limit fields in admin
    # fields = ['title', 'description']
    
    # enable headers of the table in admin
    list_display = ['title', 'description', 'price']

    # enable filter
    list_filter = ['published']

    # enable search by title and description
    search_fields = ['title', 'description']

admin.site.register(BookNumber)
admin.site.register(Character)
admin.site.register(Author)