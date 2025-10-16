// ===============================
// 📅 Format Date Function
// ===============================
function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return ` ${day}-${month}-${year}`;
}

// ===============================
// 🧩 Document Resize
// ===============================
function documentResize() {
    const resize = (document.getElementById('document') || document.getElementById('index-document'));
    if (resize) resize.style.width = "780px";
}

// ===============================
// 🚫 Prevent Right-click
// ===============================
document.addEventListener('contextmenu', e => e.preventDefault());

// ===============================
// 📝 Form Submission Handler
// ===============================
document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let documentContent = '';
        const formId = event.target.id;

        // ✅ Assignment Form
        if (formId === 'assignment-form') {
            documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline">ASSIGNMENT</span></strong></p>`;
            documentContent += `<p><strong>Topic Name: </strong>${formData.get('topicName')}</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p><strong>Course Code: </strong>${formData.get('courseCode')}</p>`;
            documentContent += `<p><strong>Course Title: </strong>${formData.get('courseTitle')}</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submitted To: </span></strong></p>`;
            documentContent += `<p class="space">${formData.get('submittedToName')}</p>`;
            documentContent += `<p class="space">${formData.get('submittedToDesignation')}</p>`;
            documentContent += `<p class="space">Department of ${formData.get('submittedToDepartment')}</p>`;
            documentContent += `<p class="space">Dhaka International University</p>`;
            documentContent += `<p></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submitted By: </span></strong></p>`;
            documentContent += `<p class="space">Name: ${formData.get('submittedByName')}</p>`;
            documentContent += `<p class="space">Roll: ${formData.get('Roll')}</p>`;
            documentContent += `<p class="space">Batch: ${formData.get('Batch')}</p>`;
            documentContent += `<p class="space">Reg Code: ${formData.get('Reg Code')}</p>`;
            documentContent += `<p class="space">Contact: ${formData.get('Contact')}</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submission Date:</span></strong> <span class="dateColor">${formatDate(formData.get('submissionDate'))}</span></p>`;

            document.getElementById('documentContent').innerHTML = documentContent;
            document.querySelector('.form').style.display = 'none';
            document.getElementById('document').style.display = 'block';
        }

        // ✅ Lab Report Form
        else if (formId === 'lab-report-form') {
            documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline">LAB  REPORT</span></strong></p>`;
            documentContent += `<p><strong>Experiment No: </strong>${formData.get('experimentNo')}</p>`;
            documentContent += `<p><strong>Experiment Name: </strong>${formData.get('experimentName')}</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p><strong>Course Code: </strong>${formData.get('courseCode')}</p>`;
            documentContent += `<p><strong>Course Title: </strong>${formData.get('courseTitle')}</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submitted To: </span></strong></p>`;
            documentContent += `<p class="space">${formData.get('submittedToName')}</p>`;
            documentContent += `<p class="space">${formData.get('submittedToDesignation')}</p>`;
            documentContent += `<p class="space">Department of ${formData.get('submittedToDepartment')}</p>`;
            documentContent += `<p class="space">Dhaka International University</p>`;
            documentContent += `<p></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submitted By: </span></strong></p>`;
            documentContent += `<p class="space">Name: ${formData.get('submittedByName')}</p>`;
            documentContent += `<p class="space">Roll: ${formData.get('Roll')}</p>`;
            documentContent += `<p class="space">Batch: ${formData.get('Batch')}</p>`;
            documentContent += `<p class="space">Reg Code: ${formData.get('Reg Code')}</p>`;
            documentContent += `<p class="space">Contact: ${formData.get('Contact')}</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submission Date:</span></strong> <span class="dateColor">${formatDate(formData.get('submissionDate'))}</span></p>`;

            document.getElementById('documentContent').innerHTML = documentContent;
            document.querySelector('.form').style.display = 'none';
            document.getElementById('document').style.display = 'block';
        }

        // ✅ Final Lab Report Form
        else if (formId === 'final-lab-report-form') {
            documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline">FINAL  LAB  REPORT</span></strong></p>`;
            documentContent += `<p><strong>Course Code: </strong>${formData.get('courseCode')}</p>`;
            documentContent += `<p><strong>Course Title: </strong>${formData.get('courseTitle')}</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submitted To: </span></strong></p>`;
            documentContent += `<p class="space">${formData.get('submittedToName')}</p>`;
            documentContent += `<p class="space">${formData.get('submittedToDesignation')}</p>`;
            documentContent += `<p class="space">Department of ${formData.get('submittedToDepartment')}</p>`;
            documentContent += `<p class="space">Dhaka International University</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submitted By: </span></strong></p>`;
            documentContent += `<p class="space">Name: ${formData.get('submittedByName')}</p>`;
            documentContent += `<p class="space">Roll: ${formData.get('Roll')}</p>`;
            documentContent += `<p class="space">Batch: ${formData.get('Batch')}</p>`;
            documentContent += `<p class="space">Reg Code: ${formData.get('Reg Code')}</p>`;
            documentContent += `<p class="space">Contact: ${formData.get('Contact')}</p>`;
            documentContent += `<p><br></p>`;
            documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submission Date:</span></strong> <span class="dateColor">${formatDate(formData.get('submissionDate'))}</span></p>`;

            document.getElementById('documentContent').innerHTML = documentContent;
            document.querySelector('.form').style.display = 'none';
            document.getElementById('document').style.display = 'block';
        }

        // ✅ Lab Index Form
        else if (formId === 'lab-index-form') {
            documentContent += `<div class="index-left-bottom" id="index-header"><strong>Expt. No.</strong></div>`;
            documentContent += `<div class="index-border-header"><strong>Date</strong></div>`;
            documentContent += `<div class="index-border-header"><strong>Name of the Experiment</strong></div>`;
            documentContent += `<div class="index-border-header"><strong>Page No.</strong></div>`;
            documentContent += `<div class="index-right-bottom"><strong>Remarks</strong></div>`;
            for (let i = 1; i <= 10; i++) {
                documentContent += `
                    <div class="${i === 10 ? 'index-left-footer' : 'index-left-bottom'}"><strong>${i}</strong></div>
                    <div class="${i === 10 ? 'index-border-footer' : 'index-border'}"><strong>${formatDate(formData.get(`submissionDate${i}`))}</strong></div>
                    <div class="${i === 10 ? 'index-border-footer' : 'index-border'}" style="font-size: 15px;">${formData.get(`experimentName${i}`)}</div>
                    <div class="${i === 10 ? 'index-border-footer' : 'index-border'}"><strong>${formData.get(`pageToPage${i}`)}</strong></div>
                    <div class="${i === 10 ? 'index-right-footer' : 'index-right-bottom'}"></div>
                `;
            }
            document.getElementById('documentContentIndex').innerHTML = documentContent;
            document.querySelector('.form').style.display = 'none';
            document.getElementById('index-document').style.display = 'block';
        }
    });
});

// ===============================
// 🔁 Enter Key Navigation
// ===============================
const inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => {
    input.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const nextInput = inputs[index + 1];
            nextInput ? nextInput.focus() : document.querySelector('.submit').focus();
        }
    });
});

// ===============================
// 💾 Download PDF (Force Desktop Layout)
// ===============================
document.getElementById('downloadPdf').addEventListener('click', function () {
    const body = document.body;
    body.classList.add('desktop-layout');
    documentResize();

    const { jsPDF } = window.jspdf;
    const target = document.getElementById('document') || document.getElementById('index-document');

    html2canvas(target, {
        scale: 4,
        useCORS: true,
        backgroundColor: '#ffffff',
        windowWidth: 1024,
        windowHeight: 1366
    }).then(canvas => {
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [780, 1102.92],
            compress: true
        });

        const imgWidth = 780;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(canvas, 'JPEG', 0, 0, imgWidth, imgHeight);
        pdf.save('cover-page.pdf');

        body.classList.remove('desktop-layout');
    });
});

// ===============================
// 🖼️ Download Image (Also Desktop Layout)
// ===============================
document.getElementById('downloadImage').addEventListener('click', function () {
    const body = document.body;
    body.classList.add('desktop-layout');
    documentResize();

    const target = document.getElementById('document') || document.getElementById('index-document');

    html2canvas(target, {
        scale: 4,
        useCORS: true,
        backgroundColor: '#ffffff',
        windowWidth: 1024
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'cover-page.jpeg';
        link.href = canvas.toDataURL('image/jpeg', 1.0);
        link.click();
        body.classList.remove('desktop-layout');
    });
});
