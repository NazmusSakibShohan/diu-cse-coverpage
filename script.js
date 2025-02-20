function formatDate(dateString) {
    if (!dateString) return ""; // Return blank if no date provided
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ""; // Check for invalid date
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return ` ${day}-${month}-${year}`; // MM-DD-YYYY
}

function documentResize() {
    const resize = (document.getElementById('document') || document.getElementById('index-document'));
    resize.style.width = "780px";
}

// Prevent right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Form submission handler
document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let documentContent = '';
        const formId = event.target.id;

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
        else if (formId === 'lab-index-form') {
            documentContent += `<div class="index-left-bottom" id="index-header"><strong>Expt. No.</strong></div>`;
            documentContent += `<div class="index-border-header" id="index-header"><strong>Date</strong></div>`;
            documentContent += `<div class="index-border-header" id="index-header"><strong>Name of the Experiment</strong></div>`;
            documentContent += `<div class="index-border-header" id="index-header"><strong>Page No.</strong></div>`;
            documentContent += `<div class="index-right-bottom" id="index-header"><strong>Remarks</strong></div>`;

            // Repeat for all 10 entries
            for (let i = 1; i <= 10; i++) {
                documentContent += `
                    <div class="${i === 10 ? 'index-left-footer' : 'index-left-bottom'}" id="index-experiment-no"><strong>${i}</strong></div>
                    <div class="${i === 10 ? 'index-border-footer' : 'index-border'}" id="dateSubmission"><strong>${formatDate(formData.get(`submissionDate${i}`))}</strong></div>
                    <div class="${i === 10 ? 'index-border-footer' : 'index-border'}" style="font-size: 15px;">${formData.get(`experimentName${i}`)}</div>
                    <div class="${i === 10 ? 'index-border-footer' : 'index-border'}" id="pageLimit"><strong>${formData.get(`pageToPage${i}`)}</strong></div>
                    <div class="${i === 10 ? 'index-right-footer' : 'index-right-bottom'}"><strong></strong></div>
                `;
            }

            document.getElementById('documentContentIndex').innerHTML = documentContent;
            document.querySelector('.form').style.display = 'none';
            document.getElementById('index-document').style.display = 'block';
        }
    });
});

const inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const nextInput = inputs[index + 1];
            nextInput ? nextInput.focus() : document.querySelector('.submit').focus();
        }
    });
});

document.getElementById('downloadPdf').addEventListener('click', function() {
    documentResize();
    const { jsPDF } = window.jspdf;
    html2canvas(document.getElementById('document') || document.getElementById('index-document'), {
        scale: 4,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [780, 1102.92],
            compress: true
        });
        doc.addImage(canvas, 'JPEG', 0, 0, 780, (canvas.height * 780) / canvas.width);
        doc.save('cover-page.pdf');
    });
});

document.getElementById('downloadImage').addEventListener('click', function() {
    html2canvas(document.getElementById('document') || document.getElementById('index-document'), {
        scale: 4,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 0.75);
        link.download = 'cover-page.jpeg';
        link.click();
    });
});