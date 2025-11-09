from sqlalchemy import Column, Integer, String, Boolean, Float, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base
import datetime


class User(Base):
__tablename__ = 'users'
id = Column(Integer, primary_key=True, index=True)
email = Column(String, unique=True, index=True, nullable=False)
hashed_password = Column(String, nullable=False)
is_admin = Column(Boolean, default=False)
created_at = Column(DateTime, default=datetime.datetime.utcnow)


orders = relationship('Order', back_populates='user')


class Car(Base):
__tablename__ = 'cars'
id = Column(Integer, primary_key=True, index=True)
title = Column(String, index=True)
brand = Column(String, index=True)
description = Column(Text)
price = Column(Float)
image = Column(String) # path or URL
stock = Column(Integer, default=1)
created_at = Column(DateTime, default=datetime.datetime.utcnow)


class Order(Base):
__tablename__ = 'orders'
id = Column(Integer, primary_key=True, index=True)
user_id = Column(Integer, ForeignKey('users.id'))
total = Column(Float)
created_at = Column(DateTime, default=datetime.datetime.utcnow)


user = relationship('User', back_populates='orders')


class CommunityPost(Base):
__tablename__ = 'posts'
id = Column(Integer, primary_key=True, index=True)
user_id = Column(Integer, ForeignKey('users.id'))
title = Column(String)
body = Column(Text)
created_at = Column(DateTime, default=datetime.datetime.utcnow)


# comments relationship could be added