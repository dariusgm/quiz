from typing import List

class Quiz():
    branch: str = ''
    question: str = ''
    answers: List[str] = None
    correct_answer: int = 0

    def __init__(self, 
        branch:   str  = '',
        question: str  = '', 
        answers:  list = None, 
        correct:  int  = 0
        ):
        self.branch = branch
        self.question = question
        self.answers = answers
        self.correct = correct

    def correct(self, index: int) -> bool:
        return correct_answer == index

    def __repr__(self):
        return f"Quiz({self.branch},{self.question},{self.correct},{self.answers})"