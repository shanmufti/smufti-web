from app.database import get_db
from app.models import personal_info as models
from app.schemas import personal_info as schemas
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/personal-info", response_model=schemas.PersonalInfo)
def read_personal_info(db: Session = Depends(get_db)):
    info = db.query(models.PersonalInfo).first()
    if info is None:
        raise HTTPException(status_code=404, detail="Personal info not found")
    return info
