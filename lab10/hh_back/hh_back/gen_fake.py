from faker import Faker
from api.models import Company, Vacancy
import random

fake = Faker()

# Create companies
cities = ['New York', 'London', 'Paris', 'Tokyo', 'Berlin']
for _ in range(10):  # Create 10 companies
    city = random.choice(cities)
    Company.objects.create(
        name=fake.company(),
        description=fake.text(),
        city=city,
        address=fake.address()
    )

# Create vacancies
for _ in range(20):  # Create 20 vacancies
    random_company = random.choice(Company.objects.all())
    Vacancy.objects.create(
        name=fake.job(),
        description=fake.text(),
        salary=random.uniform(20000, 100000),  # Random salary between 20000 and 100000
        company=random_company
    )

# Print confirmation message
print("Fake data generation complete.")
