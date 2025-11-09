from pydantic import BaseModel, EmailStr
from typing import Optional, List
import datetime


class UserCreate(BaseModel):
email: EmailStr
password: str


class UserOut(BaseModel):
id: int
email: EmailStr
is_admin: bool
class Config:
orm_mode = True


class Token(BaseModel):
access_token: str
token_type: str


class CarBase(BaseModel):
title: str
brand: Optional[str]
description: Optional[str]
price: float
stock: int = 1
image: Optional[str] = None


class CarCreate(CarBase):
pass


class CarOut(CarBase):
id: int
created_at: datetime.datetime
class Config:
orm_mode = True


class PostCreate(BaseModel):
title: str
body: str


class PostOut(PostCreate):
id: int
user_id: int
created_at: datetime.datetime
class Config:
orm_mode = True