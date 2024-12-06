// Template Data
const templates = {
    template1: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; }
                h1 { text-align: center; color: #444; }
            </style>
        </head>
        <body>
            <h1>Welcome to Template 1</h1>
            <p>This is a simple starter template.</p>
        </body>
        </html>
    `,
    template2: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Georgia, serif; background-color: #fff5f5; color: #900; }
                h1 { text-align: center; color: #900; }
            </style>
        </head>
        <body>
            <h1>Welcome to Template 2</h1>
            <p>This template has a red theme.</p>
        </body>
        </html>
    `,
    template3: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Tahoma, sans-serif; background-color: #e0f7fa; color: #00796b; }
                h1 { text-align: center; color: #00796b; }
            </style>
        </head>
        <body>
            <h1>Welcome to Template 3</h1>
            <p>This is a blue-green template.</p>
        </body>
        </html>
    `
};

// Select elements
const templateButtons = document.querySelectorAll('.template-btn');
const codeEditor = document.getElementById('code-editor');
const applyButton = document.getElementById('apply-btn');
const previewFrame = document.getElementById('preview-frame');

// Function to load the selected template into the editor
templateButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const templateName = event.target.getAttribute('data-template');
        codeEditor.value = templates[templateName]; // Load the selected template into the editor
    });
});

// Function to update the live preview based on the editor's content
applyButton.addEventListener('click', () => {
    const code = codeEditor.value;
    previewFrame.srcdoc = code; // Update iframe's content with the editor's code
});

// Enable real-time preview as you type (optional)
codeEditor.addEventListener('input', () => {
    const code = codeEditor.value;
    previewFrame.srcdoc = code; // Update iframe's content immediately when text changes
});