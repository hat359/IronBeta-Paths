const PDFDocument = require('pdfkit');
const fs = require('fs');

// Sample data
const courses = [
  {
    courseCategory: 'English',
    type: 7,
    grade: '11th',
    credits: 7
  },
  {
    courseCategory: 'Math',
    type: 7,
    grade: '12th',
    credits: 7
  },
  {
    courseCategory: 'Science',
    type: 7,
    grade: '9th',
    credits: 7
  },
  {
    courseCategory: 'History',
    type: 7,
    grade: '9th',
    credits: 7
  }
];

// Controller function to generate PDF
export const generatePDF = () => {
  const doc = new PDFDocument();
  const filename = 'courses.pdf'; // Output filename
  const tableWidth = 500;
  const tableHeight = 200;
  const startX = 50;
  const startY = 50;

  doc.pipe(fs.createWriteStream(filename));

  // Add content to the PDF
  doc.fontSize(12);
  doc.text('Courses Table', { align: 'center', underline: true });
  doc.moveDown();

  // Draw table headers
  doc.rect(startX, startY, tableWidth, 20).fillAndStroke('#cccccc', '#000000');
  doc.text('Course Category', startX + 5, startY + 5);
  doc.text('Type', startX + 120, startY + 5);
  doc.text('9th Grade', startX + 180, startY + 5);
  doc.text('10th Grade', startX + 260, startY + 5);
  doc.text('11th Grade', startX + 340, startY + 5);
  doc.text('12th Grade', startX + 420, startY + 5);
  doc.text('Credits', startX + 480, startY + 5);

  // Draw table rows
  let yPosition = startY + 25;
  courses.forEach((course) => {
    doc.rect(startX, yPosition, tableWidth, 20).stroke();
    doc.text(course.courseCategory, startX + 5, yPosition + 5);
    doc.text(course.type.toString(), startX + 125, yPosition + 5);
    doc.text(course.grade === '9th' ? `${course.credits}.00 (Cr)` : '0.00 (Cr)', startX + 185, yPosition + 5);
    doc.text(course.grade === '10th' ? `${course.credits}.00 (Cr)` : '0.00 (Cr)', startX + 265, yPosition + 5);
    doc.text(course.grade === '11th' ? `${course.credits}.00 (Cr)` : '0.00 (Cr)', startX + 345, yPosition + 5);
    doc.text(course.grade === '12th' ? `${course.credits}.00 (Cr)` : '0.00 (Cr)', startX + 425, yPosition + 5);
    doc.text(course.credits.toString(), startX + 485, yPosition + 5);
    yPosition += 20;
  });

  doc.end();
  console.log(`PDF generated: ${filename}`);
};

// Call the controller function with the sample data
generatePDF();
