from django.urls import path
from .views import QuestionnaireListView, SubmitAnswersView

urlpatterns = [
    path('', QuestionnaireListView.as_view(), name='questionnaire'),
    path('submit/', SubmitAnswersView.as_view(), name='submit-answers' ),
]



