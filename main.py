# generate template

import json
import os
import pandas as pd
import glob
from shutil import copyfile


def length(k, s):
    if len(s) > 35:
        print(f"WARN: {k} to long")

def process(row):
    result = {"s": row['source'], "q": row['question'], "a": [row['answer'], row['wrong1']]}

    length("answer", row['answer'])
    length("wrong1", row['wrong1'])

    if not pd.isnull(row['wrong2']):
        result['a'].append(row['wrong2'])
        length("wrong2", row['wrong2'])

    if not pd.isnull(row['wrong3']):
        result['a'].append(row['wrong3'])
        length("wrong3", row['wrong3'])

    return result

def main():
    stats = {}

    with open('questions.js', 'wt') as question_handler:
        question_handler.write("""
// q = question, a = answer(s), s = source 
window.questions = [
""")
        df = pd.read_csv("data.csv", dtype=str)
        for i, row in df.iterrows():
            data = process(row)
            for answer in data['a']:
                answer = str(answer)
                if answer in stats:
                    stats[answer] += 1
                else:
                    stats[answer] = 1

            question_handler.write(json.dumps(data) + ",\n")
        question_handler.write("]")
    
    print("converting to blog format")
    with open("blog.html", "wt") as html_writer:
        with open("index.html", "rt") as html_reader:
            for line in html_reader:

                # Remove JS, as its loaded via the blog itself
                if "<script src=" in line:
                    continue

                # Remove CSS, as its loaded via the blg itself
                if "<link" in line:
                    continue

                html_writer.write(line)


    blog_base = os.path.join("..", "blog")

    if os.path.exists(blog_base):
        print("Copy JavaScript")
        for source_path in glob.glob("*.js"):
            target_path = os.path.join("..", "blog", "content", "js", source_path)
            print(f"{source_path} -> {target_path}")
            copyfile(source_path, target_path)

        print("Copy HTML")
        source_path = os.path.join("blog.html")
        target_path = os.path.join("..", "blog", "code", "quiz.html")
        print(f"{source_path} -> {target_path}")
        copyfile(source_path, target_path)

        print("Copy CSS")
        source_path = os.path.join("quiz.css")
        target_path = os.path.join("..", "blog", "content", "css", "quiz.css")
        print(f"{source_path} -> {target_path}")
        copyfile(source_path, target_path)


    print("Yes: ", stats['Yes'])
    print("No:  ", stats['No'])


if __name__ == '__main__':
    main()
