from pydantic import BaseModel


class PersonalInfoBase(BaseModel):
    name: str
    bio: str
    email: str


class PersonalInfoCreate(PersonalInfoBase):
    pass


class PersonalInfo(PersonalInfoBase):
    id: int

    class Config:
        orm_mode = True
