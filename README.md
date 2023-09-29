# Quiz

# Installation
## Native


Install `pyenv` on your platform, see: https://github.com/pyenv/pyenv


```bash
pyenv install 3.11.1
pyenv local 3.11.1
python3 -m pip install --upgrade pip
pip install poetry 
pyenv rehash
echo "installing, this may take some time..."
poetry install

# for generating new questions.js
# Download from spreadsheet, than:
mv ~/Downloads/"Data Science Questions - Tabellenblatt1.csv" data.csv
pipenv run python3 main.py
```

# Serving
## Native

In case you want to just serve the quiz locally, use the build-in python webserver:
`pipenv run python3 -m http.server 8080 --bind localhost`
[http://localhost:8080](http://localhost:8080)



