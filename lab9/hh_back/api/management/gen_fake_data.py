from django.core.management.base import BaseCommand
from faker import Faker
from api.models import Company, Vacancy
import random

class Command(BaseCommand):
    help = 'Generate fake data for testing'

    def handle(self, *args, **options):
        fake = Faker()

        # Create companies
        cities = ['New York', 'London', 'Paris', 'Tokyo', 'Berlin']
        for _ in range(10):  # Create 10 companies
            city = random.choice(cities)
            company, created = Company.objects.get_or_create(
                name=fake.company(),
                description=fake.text(),
                city=city,
                address=fake.address()
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created company: {company.name}'))

        # Create vacancies
        for _ in range(20):  # Create 20 vacancies
            random_company = random.choice(Company.objects.all())
            vacancy = Vacancy.objects.create(
                name=fake.job(),
                description=fake.text(),
                salary=random.uniform(20000, 100000),  # Random salary between 20000 and 100000
                company=random_company
            )
            self.stdout.write(self.style.SUCCESS(f'Created vacancy: {vacancy.name}'))

        self.stdout.write(self.style.SUCCESS('Fake data generation complete.'))
