
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
    reader.onerror = error => reject(error);
  });
}

// Utility to generate PDF passport
export function generatePassportPDF(application: PassportApplication): void {
  const doc = new jsPDF();
  
  // Add header
  doc.setFillColor(155, 135, 245); // Purple color
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
  doc.text(`Passport Number: ${application.id.substring(0, 8).toUpperCase()}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Full Name: ${application.fullName}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Father's Name: ${application.fatherName}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Mother's Name: ${application.motherName}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Date of Birth: ${application.dob}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Gender: ${application.gender}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Marital Status: ${application.maritalStatus}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Nationality: ${application.nationality}`, 20, currentY);
  currentY += lineHeight * 2;
  
  // Contact details
  doc.setFontSize(14);
  doc.text("Contact Details", 20, currentY);
  currentY += lineHeight * 2;
  
  doc.setFontSize(11);
  doc.text(`Email: ${application.email}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Phone: ${application.phoneNumber}`, 20, currentY);
  currentY += lineHeight * 2;
  
  // Address details
  doc.setFontSize(14);
  doc.text("Address Information", 20, currentY);
  currentY += lineHeight * 2;
  
  doc.setFontSize(11);
  doc.text(`Current Address: ${application.currentAddress}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Permanent Address: ${application.permanentAddress}`, 20, currentY);
  currentY += lineHeight * 2;
  
  // ID details
  doc.setFontSize(14);
  doc.text("Identification Details", 20, currentY);
  currentY += lineHeight * 2;
  
  doc.setFontSize(11);
  doc.text(`Aadhar Number: ${application.aadharNumber}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`PAN Number: ${application.panNumber}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Educational Qualification: ${application.educationalQualification}`, 20, currentY);
  currentY += lineHeight;
  
  doc.text(`Police Station: ${application.policeStation}`, 20, currentY);
  currentY += lineHeight * 2;
  
  // Add signature if available
  if (application.signatureUrl) {
    doc.text("Signature:", 20, currentY);
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
  doc.text("This passport is electronically generated", 105, 287, { align: "center" });
  
  // Save PDF with user's name
  doc.save(`passport_${application.fullName.replace(/\s+/g, '_')}.pdf`);
}
