# Django introduction

see[Django introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction)

## What is Django?

**Django**: a high-level Python web framework that enables rapid development of secure and maintainable websites.

[django - site](https://www.djangoproject.com/)

[django - documentation](https://docs.djangoproject.com/en/2.2/)

- Complete
- Versatile
- Secure
- Scalable
  - Django uses a component-based “shared-nothing” architecture (each part of the architecture is independent of the others, and can hence be replaced or changed if needed)
- Maintainable
- Portable

## Where did it come from?

> Django was initially developed between 2003 and 2005 by a web team who were responsible for creating and maintaining newspaper websites. After creating a number of sites, the team began to factor out and reuse lots of common code and design patterns. This common code evolved into a generic web development framework, which was open-sourced as the "Django" project in July 2005. 

## How popular is Django?

Refer to [Hot Frameworks](http://hotframeworks.com/)

## Is Django opinionated?

- Web frameworks often refer to themselves as "opinionated" or "unopinionated".
- Opinionated frameworks are those with opinions about the "right way" to handle any particular task.
- Unopinionated frameworks, by contrast, have far fewer restrictions on the best way to glue components together to achieve a goal, or even what components should be used.

## What does Django code look like?

- URLs
- View
- Models
- Templates

### Sending the request to the right view (urls.py)

- A URL mapper is typically stored in a file named **urls.py**

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

### Handling the request (views.py)

- Views are the heart of the web application, receiving HTTP requests from web clients and returning HTTP responses.

```python
# filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')
```

**NOTE**: Views are usually stored in a file called **views.py**

### Defining data models (models.py)

- Django web applications manage and query data through Python objects referred to as models. 
- Models define the structure of stored data, including the field types and possibly also their maximum size, default values, selection list options, help text for documentation, label text for forms, etc.

```python
# filename: models.py

from django.db import models 

class Team(models.Model): 
    team_name = models.CharField(max_length=40) 

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        ...  #list other team levels
    )
    team_level = models.CharField(max_length=3, choices=TEAM_LEVELS, default='U11')
```

### Querying data (views.py)

- The Django model provides a simple query API for searching the database.

```python
## filename: views.py

from django.shortcuts import render
from .models import Team 

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

### Rendering data (HTML templates)

- Template systems allow you to specify the structure of an output document, using placeholders for data that will be filled in when a page is generated.

```python
## filename: best/templates/best/index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Home page</title>
</head>
<body>
  {% if youngest_teams %}
    <ul>
      {% for team in youngest_teams %}
        <li>{{ team.team_name }}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No teams are available.</p>
  {% endif %}
</body>
</html>
```

## What else can you do?

- Forms
- User authentication and permissions
- Caching
- Administration site
- Serialising data
