from rest_framework import serializers
from .models import Questionnaire, Question, Answer

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questionfields = ['id', 'text', 'order']


class QuestionnaireSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Questionnaire
        fields = ['id', 'title', 'description', 'questions']


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'question', 'score']

        