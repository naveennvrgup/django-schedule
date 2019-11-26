# Django Schedule  

* This repo is meant to a take home assignment for a internship interview process.
* This is full stack application is built with django in backend and react.js in frontend.
* It shows the REST API functionality in the backend and state management with react in the frontend.

### Setup instructions

cd into backend  

    cd backend
    
create a virtual env    
  
    virtualenv env -p python3.5  

install all the dependencies in the requirements.txt    
 
    pip3 install requirements.txt

migrate the migrations
    
    ./manage.py migrate

start the django server

    ./manage.py runserver
  
you can install postgres by following:  [link](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04#creating-a-python-virtual-environment-for-your-project)
