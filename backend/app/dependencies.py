from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from .database import SessionLocal
from . import crud, auth


oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/users/token')


# dependency to get DB session
def get_db():
db = SessionLocal()
try:
yield db
finally:
db.close()


# get current user from JWT
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
payload = auth.decode_token(token)
if not payload:
raise HTTPException(status_code=401, detail='Invalid authentication')
user = crud.get_user(db, payload.get('sub'))
if not user:
raise HTTPException(status_code=404, detail='User not found')
return user


# admin check
def get_admin_user(current_user = Depends(get_current_user)):
if not current_user.is_admin:
raise HTTPException(status_code=403, detail='Admin only')
return current_user