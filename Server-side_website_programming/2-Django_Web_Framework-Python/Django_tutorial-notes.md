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

see []()

---

Tutorial_4-django_admin_site.md

see []()

---

Tutorial_5-home_page.md

see []()

---

Tutorial_6-generic_list_detail_views.md

see []()

---

Tutorial_7-sessions_framework.md

see []()

---

Tutorial_8-user_authentication_permissions.md

see []()

---

Tutorial_9-forms.md

see []()

---

Tutorial_10-testing.md

see []()

---

Tutorial_11-deploy_production.md

---

Web_application_security.md