Tutorial_1-The_LocalLibrary_website.md

see [Django Tutorial: The Local Library website
](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website)

Name of the website/project: **LocalLibrary** 

**[Fully developed version on GitHub](https://github.com/mdn/django-locallibrary-tutorial)**

---

Tutorial_2-create_skeleton_site.md

see [Django Tutorial Part 2: Creating a skeleton website](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/skeleton_website)

## Creating the project

```
$ cd desktop
$ mkdir django_projects
$ cd django_projects

$ django-admin startproject locallibrary
$ cd locallibrary
```

**NOTE** (Folder/file structure should look like):

```vim
locallibrary/
    manage.py
    locallibrary/
        __init__.py
        settings.py
        urls.py
        wsgi.py
```

- **__init__.py** is an empty file that instructs Python to treat this directory as a Python package.
- **settings.py** contains all the website settings. This is where we register any applications we create, the location of our static files, database configuration details, etc.  
- **urls.py** defines the site url-to-view mappings. While this could contain all the url mapping code, it is more common to delegate some of the mapping to particular applications.
- **wsgi.py** is used to help your Django application communicate with the web server. Can treat this as boilerplate.

## Creating the catalog application

```vim
$ python3 manage.py startapp catalog
```
**NOTE** (Folder/file structure should look like):

```vim
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```

## Registering the catalog application

**Go to**: django_projects/locallibrary/locallibrary/settings.py

**Go to**: INSTALLED_APPS

Add ('catalog.apps.CatalogConfig') to the list:

```vim
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'catalog.apps.CatalogConfig', 
]
```

## Specifying the database

**Go to**: django_projects/locallibrary/locallibrary/settings.py

**Go to**: DATABASES

```vim
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

**NOTE**: [Django Documentation: DATABASES](https://docs.djangoproject.com/en/2.2/ref/settings/#databases)

## Other project settings

**Go to**: django_projects/locallibrary/locallibrary/settings.py

**Check out**:

- TIME_ZONE
  - [Django Documentation: TIME_ZONE](https://docs.djangoproject.com/en/2.2/ref/settings/#time-zone)
  - [List of time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
- SECRET_KEY
- DEBUG

## Hooking up the URL mapper

- Refer to: URL mapper file (urls.py) in the project folder

- URL mappings are managed through the urlpatterns variable
- which is a Python list of path() functions
- each path() function either associates a URL pattern to a specific view
- use a special view function (RedirectView)

**Go to**: locallibrary/locallibrary/urls.py

**Add to urls.py** (At the bottom of file, to add new list item):

```vim
# Use include() to add paths from the catalog application 
from django.urls import include
from django.urls import path

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]

# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/catalog/', permanent=True)),
]

# Use static() to add url mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Add additional patterns 
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testing the website framework

### Running database migrations

- Django uses an Object-Relational-Mapper (ORM) to map model definitions in the Django code to the data structure used by the underlying database.

**Django tracks changes in**: /locallibrary/catalog/migrations/

**Go to:**: locallibrary (in the directory that contains manage.py)

```vim
$ python3 manage.py makemigrations
$ python3 manage.py migrate
```

**Run the development web server**:

```vim
$ python3 manage.py runserver
```

**On browser, go to**: http://127.0.0.1:8000/

---
Tutorial_3-using_models.md

see [Django Tutorial Part 3: Using models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Models)


## Designing the LocalLibrary models
- separate models for every "object" (a group of related information)
- relationships:
  - one to one (OneToOneField)
  - one to many (ForeignKey)
  - many to many (ManyToManyField)

## Model primer

### Model definition

- Models are usually defined in an application's models.py file. 
- They are implemented as subclasses of django.db.models.Model, and can include fields, methods and metadata. 
- The code fragment below shows a "typical" model, named MyModelName

EXAMPLE :

```vim
from django.db import models

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    ...

    # Metadata
    class Meta: 
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
        """Returns the url to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])
    
    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.my_field_name
```

#### Fields

EXAMPLE:

```vim
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

**Common field arguments**:

- help_text
- verbose_name
- default
- null
- blank
- choices
- primary_key

[Full list of field options](https://docs.djangoproject.com/en/2.1/ref/models/fields/#field-options)

**Common field types**:

- CharField
- TextField
  - specify max_length
- IntegerField
- DateField and DateTimeField
- EmailField
- FileField and ImageField
- AutoField
- ForeignKey
- ManyToManyField

[Full list of field arguments](https://docs.djangoproject.com/en/2.1/ref/models/fields/#field-types)

#### Metadata

```vim
class Meta:
    ordering = ['-my_field_name']
```

```vim
ordering = ['title', '-pubdate']
```

```vim
verbose_name = 'BetterName'
```

#### Methods

**NOTE**: Minimally, in every model you should define the standard Python class method **__str__()** to return a human-readable string for each object.

```vim
def __str__(self):
    return self.field_name
```

```vim
def get_absolute_url(self):
    """Returns the url to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

### Model management

#### Creating and modifying records

```vim
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

```vim
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record. 
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Searching for records

```vim
all_books = Book.objects.all()
```

```vim
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

[Field lookups full list](https://docs.djangoproject.com/en/2.2/ref/models/querysets/#field-lookups)

```vim
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

[Making queries](https://docs.djangoproject.com/en/2.2/topics/db/queries/)

## Defining the LocalLibrary Models

**Go to**: /locallibrary/catalog/models.py

```
from django.db import models

# Create your models here.
```

### Genre model

```vim
Add to: models.py

class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(max_length=200, help_text='Enter a book genre (e.g. Science Fiction)')
    
    def __str__(self):
        """String for representing the Model object."""
        return self.name
```

### Book model

```vim
Add to: models.py

from django.urls import reverse # Used to generate URLs by reversing the URL patterns

class Book(models.Model):
    """Model representing a book (but not a specific copy of a book)."""
    title = models.CharField(max_length=200)

    # Foreign Key used because book can only have one author, but authors can have multiple books
    # Author as a string rather than object because it hasn't been declared yet in the file
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)
    
    summary = models.TextField(max_length=1000, help_text='Enter a brief description of the book')
    isbn = models.CharField('ISBN', max_length=13, help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>')
    
    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this book')
    
    def __str__(self):
        """String for representing the Model object."""
        return self.title
    
    def get_absolute_url(self):
        """Returns the url to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])
```

### BookInstance model

```vim
Add to: models.py

import uuid # Required for unique book instances

class BookInstance(models.Model):
    """Model representing a specific copy of a book (i.e. that can be borrowed from the library)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for this particular book across whole library')
    book = models.ForeignKey('Book', on_delete=models.SET_NULL, null=True) 
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.book.title})'
```

#### Author model

```vim 
Add to: models.py

class Author(models.Model):
    """Model representing an author."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the url to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'
```

## Re-run the database migrations

```vim
$ python3 manage.py makemigrations
$ python3 manage.py migrate
```

---

Tutorial_4-django_admin_site.md

see [Django Tutorial Part 4: Django admin site](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site)

---

Tutorial_5-home_page.md

see [Django Tutorial Part 5: Creating our home page](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Home_page)

---

Tutorial_6-generic_list_detail_views.md

see [Django Tutorial Part 6: Generic list and detail views](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Generic_views)

---

Tutorial_7-sessions_framework.md

see [Django Tutorial Part 7: Sessions framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Sessions)

---

Tutorial_8-user_authentication_permissions.md

see [Django Tutorial Part 8: User authentication and permissions](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication)

---

Tutorial_9-forms.md

see [Django Tutorial Part 9: Working with forms](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Forms)

---

Tutorial_10-testing.md

see [Django Tutorial Part 10: Testing a Django web application](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Testing)

## Types of testing

- Unit tests
- Regression tests
- Integration tests

---

Tutorial_11-deploy_production.md

see [Django Tutorial Part 11: Deploying Django to production](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment)

---

Django_web_app_security.md

see [Django web application security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/web_application_security)