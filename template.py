# generate template

import json
import os
from string import Template
from quiz import Quiz
from questions import datascience

header = Template('<html><head><title>DS Quiz '
                  '</title>'
                  '\n'
                  '<script src="js/quiz.js"></script>\n'
                  '</head>'
                  '<body>Welcome to the quiz<br />')



def main():
    for e in datascience.questions:
        print(e)

    # html = header.substitute()
    # with open("index.html", "wt") as html_file:
    #     html_file.write(html + "</body>")


if __name__ == '__main__':
    main()
