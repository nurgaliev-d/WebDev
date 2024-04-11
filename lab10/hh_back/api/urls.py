from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyList.as_view(), name='company-list'),
    path('companies/<int:pk>/', views.CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:pk>/vacancies/', views.VacancyByCompanyList.as_view(), name='vacancies-by-company'),
    path('vacancies/', views.VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', views.VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.VacancyTopTen.as_view(), name='vacancy-top-ten'),
]
