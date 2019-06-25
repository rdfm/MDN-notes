# Setting up a Django development environment

see [Setting up a Django development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment)

## Django development environment overview

### What is the Django development environment?

### What are the Django setup options?

#### What operating systems are supported?

#### What version of Python should be used?

*Recommended*: Python 3+

#### Where can we download Django?

*Recommended*: Python Package Repository (PyPi), using the *pip* tool

#### Which database?

Django supports four main databases (PostgreSQL, MySQL, Oracle, and SQLite)

**Recommended**: SQLite

**NOTE**: Django is configured to use SQLite by default when you start your website project using the standard tools (django-admin).

#### Installing system-wide or in a Python virtual environment?

## Installing Python 3

### macOS

Check if python installed:

```
$ python3 -V
```

If NOT: [Download latest version of Python](https://www.python.org/downloads/)

Check if *pip* installed:

```
$ pip3 list
// OR 
$ pip --version

```

## Using Django inside a Python virtual environment

- Creating virtual environments, use libraries:
  - [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux and macOS)
  - [virtualenv](https://developer.mozilla.org/en-US/docs/Python/Virtualenv) tool
  - the wrapper tools creates a consistent interface for managing interfaces on all platforms

### macOS virtual environment setup

#### Setting up *virtualenvwrapper* on macOS

```
$ sudo pip3 install virtualenvwrapper
```

#### Go to .bash_profile

```
cd ~  # Navigate to my home directory
ls -la # List the content of the directory. YOu should see .bash_profile
nano .bash_profile # Open the file in the nano text editor, within the terminal
# Scroll to the end of the file, and copy in the lines above
# Use Ctrl+X to exit nano, Choose Y to save the file.
```

#### Then add to shell startup file

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
export PROJECT_HOME=$HOME/Devel
source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
```

**REFERENCE**: [virtualenvwrapper installation guide](https://virtualenvwrapper.readthedocs.io/en/latest/install.html#shell-startup-file), if issues with Shell Startup File

#### Then reload startup file

```
$ source ~/.bash_profile
```

### Creating a virtual environment

- Create a new virtual environment with the **mkvirtualenv** command

```
$ mkvirtualenv my_django_environment
```

**NOTE**: If error "ERROR: virtualenvwrapper could not find virtualenv in your path", reinstall virtualenv via pip

```
$ pip3 install virtualenv
```

### Using a virtual environment

Useful commands:

- **deactivate** — Exit out of the current Python virtual environment
- **workon** — List available virtual environments
- **workon name_of_environment** — Activate the specified Python virtual environment
- **rmvirtualenv name_of_environment** — Remove the specified environment.

## Installing Django

Install Django:

```
$ sudo pip3 install django
``` 

Test that Django is installed:

```
$ python3 -m django --version
```

## Testing your installation

```
$ cd desktop
$ mkdir django_test
$ cd django_test
```

```
$ django-admin startproject mytestsite
$ cd mytestsite
```

```
$ python3 manage.py runserver 
```

GO TO BROWSER: http://127.0.0.1:8000/

**NOTE**: CONTROL-C to quit server.
