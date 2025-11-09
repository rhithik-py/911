from sqlalchemy.orm import Session
from . import models, auth


# Users
def get_user_by_email(db: Session, email: str):
return db.query(models.User).filter(models.User.email == email).first()


def create_user(db: Session, email: str, password: str, is_admin: bool = False):
hashed = auth.hash_password(password)
user = models.User(email=email, hashed_password=hashed, is_admin=is_admin)
db.add(user)
db.commit(); db.refresh(user)
return user


def authenticate_user(db: Session, email: str, password: str):
user = get_user_by_email(db, email)
if not user or not auth.verify_password(password, user.hashed_password):
return None
return user


# Cars
def create_car(db: Session, car_data):
car = models.Car(**car_data)
db.add(car); db.commit(); db.refresh(car)
return car


def get_cars(db: Session, skip: int = 0, limit: int = 50):
return db.query(models.Car).offset(skip).limit(limit).all()


def get_car(db: Session, car_id: int):
return db.query(models.Car).filter(models.Car.id == car_id).first()


# Community
def create_post(db: Session, user_id: int, title: str, body: str):
p = models.CommunityPost(user_id=user_id, title=title, body=body)
db.add(p); db.commit(); db.refresh(p)
return p


def list_posts(db: Session, skip