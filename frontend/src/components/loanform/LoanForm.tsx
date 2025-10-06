import { useState } from "react";
import styles from "./LoanForm.module.scss";

type LoanFormData = {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  annualIncome: number;
  businessIncome: number;
  profit: number;
  loss: number;
  businessDebt: number;
  loanAmount: number;
  loanPurpose: string;
  collateral?: string;
  notes?: string;
  consent: boolean;
};

const initialFormState: LoanFormData = {
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  email: "",
  phone: "",
  annualIncome: 0,
  businessIncome: 0,
  profit: 0,
  loss: 0,
  businessDebt: 0,
  loanAmount: 0,
  loanPurpose: "",
  collateral: "",
  notes: "",
  consent: false,
};

export default function LoanForm() {
  const [form, setForm] = useState<LoanFormData>(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/loan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(`✅ Application submitted for ${data.applicant}`);
      setForm(initialFormState);
    } catch {
      alert("❌ Submission failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loanForm}>
      <h2>Loan Application</h2>
      <p className={styles.subtitle}>
        Please fill in your details below. Fields marked * are required.
      </p>

      {/* Personal Info */}
      <fieldset>
        <legend>Personal Information</legend>
        <div className={styles.fieldGroup}>
          <label>
            First Name *
            <input name="firstName" value={form.firstName} onChange={handleChange} required />
          </label>
          <label>
            Last Name *
            <input name="lastName" value={form.lastName} onChange={handleChange} required />
          </label>
        </div>
        <div className={styles.fieldGroup}>
          <label>
            Date of Birth *
            <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
          </label>
          <label>
            Gender *
            <select name="gender" value={form.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>
        </div>
        <div className={styles.fieldGroup}>
          <label>
            Email *
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number *
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </label>
        </div>
      </fieldset>

      {/* Financial Info */}
      <fieldset>
        <legend>Financial Information</legend>
        <div className={styles.fieldGroup}>
          <label>
            Personal Income
            <input type="number" name="annualIncome" value={form.annualIncome} onChange={handleChange} />
          </label>
          <label>
            Business Income
            <input type="number" name="businessIncome" value={form.businessIncome} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.fieldGroup}>
          <label>
            Profit
            <input type="number" name="profit" value={form.profit} onChange={handleChange} />
          </label>
          <label>
            Loss
            <input type="number" name="loss" value={form.loss} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.fieldGroup}>
          <label>
            Business Debt
            <input type="number" name="businessDebt" value={form.businessDebt} onChange={handleChange} />
          </label>
        </div>
      </fieldset>

      {/* Loan Details */}
      <fieldset>
        <legend>Loan Details</legend>
        <div className={styles.fieldGroup}>
          <label>
            Loan Amount Requested *
            <input
              type="number"
              name="loanAmount"
              value={form.loanAmount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Loan Purpose *
            <input
              name="loanPurpose"
              value={form.loanPurpose}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Improved Collateral */}
        <div className={styles.fullWidthField}>
          <label>
            Collateral Offered (optional)
            <input
              name="collateral"
              placeholder="e.g. Property, Equipment, Inventory"
              value={form.collateral}
              onChange={handleChange}
            />
            <small className={styles.helperText}>
              Providing collateral may improve loan terms.
            </small>
          </label>
        </div>

        {/* Improved Notes */}
        <div className={styles.fullWidthField}>
          <label>
            Additional Notes
            <textarea
              name="notes"
              placeholder="Add any details about your business or loan needs..."
              value={form.notes}
              onChange={handleChange}
            />
            <small className={styles.helperText}>
              Optional: Share context that helps us understand your application better.
            </small>
          </label>
        </div>
      </fieldset>

      {/* Consent */}
      <label className={styles.checkbox}>
        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
        I consent to submit this loan application.
      </label>

      <button type="submit" className={styles.submitButton}>
        Submit Application
      </button>
    </form>
  );
}