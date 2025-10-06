from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import date


class LoanApplication(BaseModel):
    first_name: str = Field(..., min_length=1)
    last_name: str = Field(..., min_length=1)
    dob: date
    gender: str
    email: EmailStr
    phone: str

    annual_income: float
    business_income: float
    profit: float
    loss: float
    business_debt: float

    loan_amount: float
    loan_purpose: str
    collateral: Optional[str] = None
    notes: Optional[str] = None

    consent: bool
