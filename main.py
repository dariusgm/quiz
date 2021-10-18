# generate template

import json
import os
import pandas as pd

def length(k, s):
    if len(s) > 35:
        print(f"WARN: {k} to long")

def process(row):
    result = {"s": row['source'], "q": row['question'], "a": [row['answer'], ]}

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

    with open('questions2.js', 'wt') as question_handler:
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
    
    print("Yes: ", stats['Yes'])
    print("No:  ", stats['No'])
    
if __name__ == '__main__':
    main()
