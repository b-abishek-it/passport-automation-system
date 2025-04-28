import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PassportApplication } from "./types";
import jsPDF from "jspdf";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to convert file to base64
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

// Update PDF generation function to include more details
export function generatePassportPDF(application: PassportApplication): void {
  const doc = new jsPDF();

  // Add header
  doc.setFillColor(155, 135, 245);
  doc.rect(0, 0, 210, 20, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text("PASSPORT", 105, 12, { align: "center" });

  // Reset text color
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);

  // Add passport details
  const startY = 30;
  let currentY = startY;
  const lineHeight = 8;

  // Add photo if available
  if (application.photoUrl) {
    try {
      doc.addImage(application.photoUrl, "JPEG", 150, startY, 40, 40);
    } catch (e) {
      console.error("Error adding photo to PDF:", e);
    }
  }

  // Add basic details
  doc.setFontSize(14);
  doc.text("Passport Details", 20, currentY);
  currentY += lineHeight * 2;

  doc.setFontSize(11);
  const details = [
    `Passport Number: ${application.id.substring(0, 8).toUpperCase()}`,
    `Full Name: ${application.fullName}`,
    `Father's Name: ${application.fatherName}`,
    `Mother's Name: ${application.motherName}`,
    `Date of Birth: ${application.dob}`,
    `Gender: ${application.gender}`,
    `Marital Status: ${application.maritalStatus}`,
    `Nationality: ${application.nationality}`,
  ];

  details.forEach((detail) => {
    doc.text(detail, 20, currentY);
    currentY += lineHeight;
  });

  currentY += lineHeight;

  // Add Contact Information
  doc.setFontSize(14);
  doc.text("Contact Information", 20, currentY);
  currentY += lineHeight * 2;

  doc.setFontSize(11);
  [
    `Email: ${application.email}`,
    `Phone: ${application.phoneNumber}`,
    `Current Address: ${application.currentAddress}`,
    `Permanent Address: ${application.permanentAddress}`,
  ].forEach((info) => {
    doc.text(info, 20, currentY);
    currentY += lineHeight;
  });

  currentY += lineHeight;

  // Add verification details
  doc.setFontSize(14);
  doc.text("Verification Status", 20, currentY);
  currentY += lineHeight * 2;

  doc.setFontSize(11);
  doc.text(`Police Verification: Completed`, 20, currentY);
  currentY += lineHeight;
  doc.text(`Officer Verification: Completed`, 20, currentY);
  currentY += lineHeight * 2;

  // Add signature if available
  if (application.signatureUrl) {
    doc.text("Applicant's Signature:", 20, currentY);
    try {
      doc.addImage(application.signatureUrl, "JPEG", 60, currentY - 5, 40, 10);
    } catch (e) {
      console.error("Error adding signature to PDF:", e);
    }
  }

  // Add footer
  doc.setFillColor(155, 135, 245);
  doc.rect(0, 280, 210, 15, "F");
  doc.setTextColor(255, 255, 255);
  doc.text("This is an officially verified passport document", 105, 287, {
    align: "center",
  });

  // Save PDF
  doc.save(`passport_${application.fullName.replace(/\s+/g, "_")}.pdf`);
}
