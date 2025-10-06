from fastapi import APIRouter, HTTPException
from app.models.loan import LoanApplication

router = APIRouter()


@router.post("/loan")
async def submit_loan_application(data: LoanApplication):
    if not data.consent:
        raise HTTPException(
            status_code=400, detail="Consent is required to submit the application.")

    # TODO: Save to DB or process the application
    return {"message": "Loan application received", "applicant": data.first_name}
