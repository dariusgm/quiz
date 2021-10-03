# Quiz

# Installation
## Native


Install `pyenv` on your platform, see: https://github.com/pyenv/pyenv


```bash
pyenv install 3.9.2
pyenv local 3.9.2
python3 -m pip install --upgrade pip
pip install pipenv
pyenv rehash
echo "installing, this may take some time..."
pipenv install --dev --python 3.9.2 --skip-lock
```

# Serving
## Native

In case you want to just serve the model locally, use the build-in python webserver:
`pipenv run python3 -m http.server 8080 --bind localhost`
[http://localhost:8080](http://localhost:8080)



