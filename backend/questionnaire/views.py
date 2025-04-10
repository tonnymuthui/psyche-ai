from rest_framework import generics, permissions
from .models import Questionnaire, Answer
from .serializers import QuestionnaireSerializer, AnswerSerializer

class QuestionnaireListView(generics.ListAPIView):
    queryset = Questionnaire.objects.all()
    serializers_class = QuestionnaireSerializer
    permission_classes = [permissions.IsAuthenticated]


class SubmitAnswersView(generics.CreateAPIView):
    serializer_class = AnswerSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
