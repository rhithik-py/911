from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import datetime

router = APIRouter(prefix="/cars", tags=["cars"])

# Temporary in-memory car list (like fake database)
cars_db = []

# Pydantic schema for car data
class Car(BaseModel):
    id: int | None = None
    title: str
    brand: str
    description: str
    price: float
    stock: int
    image: str
    created_at: datetime.datetime | None = None


@router.get("/", response_model=List[Car])
def list_cars():
    return cars_db


@router.post("/", response_model=Car)
def add_car(car: Car):
    car.id = len(cars_db) + 1
    car.created_at = datetime.datetime.utcnow()
    cars_db.append(car)
    return car
