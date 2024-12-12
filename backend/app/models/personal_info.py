from app.database import Base
from sqlalchemy import Column, Integer, String, Text


class PersonalInfo(Base):
    __tablename__ = "personal_info"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    bio = Column(Text)
    email = Column(String)
