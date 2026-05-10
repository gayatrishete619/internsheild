document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
        });
    }

    // Mode Selector
    const modeBtns = document.querySelectorAll('.mode-btn');
    const inputModes = document.querySelectorAll('.input-mode');
    
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            inputModes.forEach(mode => mode.classList.remove('active'));
            btn.classList.add('active');
            const mode = btn.getAttribute('data-mode');
            document.getElementById(`${mode}-mode`).classList.add('active');
        });
    });

    // File Upload Handler
    const fileUpload = document.getElementById('file-upload');
    const fileUploadArea = document.querySelector('.file-upload-area');
    const filePreview = document.getElementById('file-preview');

    if (fileUploadArea) {
        fileUploadArea.addEventListener('click', () => fileUpload.click());
        
        fileUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileUploadArea.style.borderColor = 'var(--primary-orange)';
        });
        
        fileUploadArea.addEventListener('dragleave', () => {
            fileUploadArea.style.borderColor = '';
        });
        
        fileUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files.length) handleFileUpload(files[0]);
        });
    }

    if (fileUpload) {
        fileUpload.addEventListener('change', (e) => {
            if (e.target.files.length) handleFileUpload(e.target.files[0]);
        });
    }

    const handleFileUpload = (file) => {
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            alert('File size exceeds 5MB limit');
            return;
        }

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                filePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                filePreview.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        } else {
            filePreview.innerHTML = `<p>✓ File: ${file.name}</p><small>${(file.size / 1024).toFixed(2)} KB</small>`;
            filePreview.classList.remove('hidden');
        }
    };

    // Tips Section
    const tipsData = [
        {
            icon: '🔍',
            title: 'Verify Company',
            description: 'Always verify the company on official platforms like LinkedIn, their official website, and company databases.'
        },
        {
            icon: '💰',
            title: 'Never Pay Upfront',
            description: 'Legitimate internships never ask for registration fees, security deposits, or equipment costs.'
        },
        {
            icon: '📧',
            title: 'Official Communication',
            description: 'Legitimate companies communicate through official email addresses and verified portals, not just WhatsApp.'
        },
        {
            icon: '🤝',
            title: 'Proper Interview',
            description: 'All legitimate internships involve proper interviews and screening processes with HR or hiring managers.'
        },
        {
            icon: '⏰',
            title: 'No Urgency Pressure',
            description: 'Be wary of extreme urgency or pressure to decide quickly. Legitimate companies allow reasonable consideration time.'
        },
        {
            icon: '📋',
            title: 'Check References',
            description: 'Ask for references from previous interns or employees. Verify their claims independently.'
        }
    ];

    const tipsContainer = document.getElementById('tips-container');
    if (tipsContainer) {
        tipsData.forEach(tip => {
            const tipCard = document.createElement('div');
            tipCard.className = 'tip-card';
            tipCard.innerHTML = `
                <div class="tip-icon">${tip.icon}</div>
                <h3>${tip.title}</h3>
                <p>${tip.description}</p>
            `;
            tipsContainer.appendChild(tipCard);
        });
    }

    // Tips Modal Handling
    const tipsModal = document.getElementById('tips-modal');
    const closeTipsBtn = document.getElementById('close-tips-modal');
    const safetyTipsLink = document.querySelector('a[href="#tips-section"]');

    if (safetyTipsLink) {
        safetyTipsLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (tipsModal) {
                tipsModal.classList.remove('hidden');
            }
        });
    }

    if (closeTipsBtn) {
        closeTipsBtn.addEventListener('click', () => {
            if (tipsModal) {
                tipsModal.classList.add('hidden');
            }
        });
    }

    // Close modal when clicking outside the modal content
    if (tipsModal) {
        tipsModal.addEventListener('click', (e) => {
            if (e.target === tipsModal) {
                tipsModal.classList.add('hidden');
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tipsModal && !tipsModal.classList.contains('hidden')) {
            tipsModal.classList.add('hidden');
        }
    });

    // Existing code for index.html
    const checkBtn = document.getElementById('check-btn');
    const resetBtn = document.getElementById('reset-btn');
    const inputArea = document.getElementById('internship-input');
    const linkInput = document.getElementById('link-input');
    const resultSection = document.getElementById('result-section');
    const resultCard = document.getElementById('result-card');
    const statusText = document.getElementById('status-text');
    const resultSummary = document.getElementById('result-summary');
    const reasonsList = document.getElementById('reasons-list');

    if (checkBtn && resetBtn) {
        // Only run if elements exist (index.html)
        const scamKeywords = [
            { word: 'registration fee', reason: 'Legitimate internships never ask for a registration fee.' },
            { word: 'payment required', reason: 'You should never have to pay to get an internship.' },
            { word: 'security deposit', reason: 'Asking for a security deposit is a classic scam tactic.' },
            { word: 'processing fee', reason: 'Companies cover their own administrative costs.' },
            { word: 'buy equipment', reason: 'Scammers often ask you to buy equipment from their "vendor".' },
            { word: 'bank details', reason: 'Never share bank details before a formal contract and interview.' },
            { word: 'western union', reason: 'Legitimate companies never ask for Western Union or money transfer services.' },
            { word: 'bitcoin', reason: 'Scams often request cryptocurrency payments.' },
            { word: 'upfront investment', reason: 'Never invest money upfront for internship opportunities.' }
        ];

        const suspiciousKeywords = [
            { word: 'urgent hiring', reason: 'Extreme urgency is often used to bypass critical thinking.' },
            { word: 'limited seats', reason: 'Artificial scarcity is a common marketing/scam tactic.' },
            { word: 'immediate joining', reason: 'While possible, scammers use this to rush the process.' },
            { word: 'whatsapp only', reason: 'Professional companies use official email or portals, not just WhatsApp.' },
            { word: 'no interview', reason: 'Legitimate roles always involve some form of professional vetting.' },
            { word: 'high salary', reason: 'Unusually high pay for minimal work is a major red flag.' },
            { word: 'work from home', reason: 'While legitimate, scammers misuse this to avoid verification.' },
            { word: 'easy money', reason: 'Legitimate internships involve work - nothing is easy money.' },
            { word: 'no experience needed', reason: 'Most legitimate internships require some minimum qualifications.' }
        ];

        const analyzeText = (text) => {
            const lowerText = text.toLowerCase();
            let detectedScams = [];
            let detectedSuspicious = [];

            scamKeywords.forEach(item => {
                if (lowerText.includes(item.word)) {
                    detectedScams.push(item);
                }
            });

            suspiciousKeywords.forEach(item => {
                if (lowerText.includes(item.word)) {
                    detectedSuspicious.push(item);
                }
            });

            return { detectedScams, detectedSuspicious };
        };

        const showResult = () => {
            let textToAnalyze = '';
            const activeMode = document.querySelector('.input-mode.active');
            const modeId = activeMode.id;

            if (modeId === 'text-mode') {
                textToAnalyze = inputArea.value.trim();
                if (!textToAnalyze) {
                    alert('Please paste some text or a link to analyze.');
                    return;
                }
            } else if (modeId === 'file-mode') {
                const filePreview = document.getElementById('file-preview');
                if (filePreview.classList.contains('hidden')) {
                    alert('Please upload a file first.');
                    return;
                }
                textToAnalyze = filePreview.innerText || 'File uploaded for analysis';
            } else if (modeId === 'link-mode') {
                textToAnalyze = linkInput.value.trim();
                if (!textToAnalyze) {
                    alert('Please enter a URL to scan.');
                    return;
                }
            }

            const { detectedScams, detectedSuspicious } = analyzeText(textToAnalyze);
            
            resultSection.classList.remove('hidden');
            resultCard.className = 'result-card'; // Reset classes
            reasonsList.innerHTML = '';
            
            if (detectedScams.length > 0) {
                resultCard.classList.add('scam');
                statusText.innerText = '⚠️ Highly Likely a Scam';
                resultSummary.innerText = 'This internship post contains major red flags associated with fraudulent activity.';
                
                detectedScams.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>"${item.word}"</strong> - ${item.reason}`;
                    reasonsList.appendChild(li);
                });
                
                detectedSuspicious.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>"${item.word}"</strong> - ${item.reason}`;
                    reasonsList.appendChild(li);
                });

            } else if (detectedSuspicious.length > 0) {
                resultCard.classList.add('suspicious');
                statusText.innerText = '⚠️ Suspicious Activity';
                resultSummary.innerText = 'We found some concerning patterns. Proceed with extreme caution.';
                
                detectedSuspicious.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>"${item.word}"</strong> - ${item.reason}`;
                    reasonsList.appendChild(li);
                });
            } else {
                resultCard.classList.add('safe');
                statusText.innerText = '✅ Looks Safe';
                resultSummary.innerText = 'No common scam patterns were detected in the provided text.';
                
                const li = document.createElement('li');
                li.innerText = 'Always verify the company on official platforms like LinkedIn or their official website.';
                reasonsList.appendChild(li);
            }

            // Smooth scroll to results
            resultSection.scrollIntoView({ behavior: 'smooth' });
        };

        const resetApp = () => {
            inputArea.value = '';
            linkInput.value = '';
            document.getElementById('file-preview').classList.add('hidden');
            document.getElementById('file-upload').value = '';
            resultSection.classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        checkBtn.addEventListener('click', showResult);
        resetBtn.addEventListener('click', resetApp);
    }

    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                alert('Login successful! (This is a demo - no actual authentication)');
                // In a real app, you'd send this to a server
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Signup form handling
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (name && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    alert('Sign up successful! (This is a demo - no actual registration)');
                    // In a real app, you'd send this to a server
                } else {
                    alert('Passwords do not match.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
