# from django.shortcuts import render
# from django.http import HttpResponse
# from django.views import View
from .models import Book
from rest_framework import viewsets
from .serializers import BookSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    # leave one ',' to let python recognize it as a tuple
    authentication_classes = (TokenAuthentication,)
    # If set it to allow any in settings, you can use IsAuthenticated to enable single authentication
    permission_classes = (IsAuthenticated, )


# class Another(View):
#     # all() - return all items in DB
#     # filter() - return selected result
#     # get() - return the item with condition
#     book = Book.objects.get(id=1)
#     output = f"We have {book.title} book with ID {book.id}.<br>"
#     # for book in books:
#     #     output += f"We have {book.title} book with ID {book.id}.<br>"

#     def get(self, request):
#         return HttpResponse(self.output)