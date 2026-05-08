document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    const resetBtn = document.getElementById('reset-btn');
    const inputArea = document.getElementById('internship-input');
    const resultSection = document.getElementById('result-section');
    const resultCard = document.getElementById('result-card');
    const statusText = document.getElementById('status-text');
    const resultSummary = document.getElementById('result-summary');
    const reasonsList = document.getElementById('reasons-list');

    const scamKeywords = [
        { word: 'registration fee', reason: 'Legitimate internships never ask for a registration fee.' },
        { word: 'payment required', reason: 'You should never have to pay to get an internship.' },
        { word: 'security deposit', reason: 'Asking for a security deposit is a classic scam tactic.' },
        { word: 'processing fee', reason: 'Companies cover their own administrative costs.' },
        { word: 'buy equipment', reason: 'Scammers often ask you to buy equipment from their "vendor".' },
        { word: 'bank details', reason: 'Never share bank details before a formal contract and interview.' }
    ];

    const suspiciousKeywords = [
        { word: 'urgent hiring', reason: 'Extreme urgency is often used to bypass critical thinking.' },
        { word: 'limited seats', reason: 'Artificial scarcity is a common marketing/scam tactic.' },
        { word: 'immediate joining', reason: 'While possible, scammers use this to rush the process.' },
        { word: 'whatsapp only', reason: 'Professional companies use official email or portals, not just WhatsApp.' },
        { word: 'no interview', reason: 'Legitimate roles always involve some form of professional vetting.' },
        { word: 'high salary', reason: 'Unusually high pay for minimal work is a major red flag.' }
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
        const text = inputArea.value.trim();
        if (!text) {
            alert('Please paste some text or a link to analyze.');
            return;
        }

        const { detectedScams, detectedSuspicious } = analyzeText(text);
        
        resultSection.classList.remove('hidden');
        resultCard.className = 'result-card'; // Reset classes
        reasonsList.innerHTML = '';
        
        // Disable scroll on body while showing result (optional)
        // document.body.style.overflow = 'hidden';

        if (detectedScams.length > 0) {
            resultCard.classList.add('scam');
            statusText.innerText = 'Highly Likely a Scam';
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
            statusText.innerText = 'Suspicious Activity';
            resultSummary.innerText = 'We found some concerning patterns. Proceed with extreme caution.';
            
            detectedSuspicious.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>"${item.word}"</strong> - ${item.reason}`;
                reasonsList.appendChild(li);
            });
        } else {
            resultCard.classList.add('safe');
            statusText.innerText = 'Looks Safe';
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
        resultSection.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    checkBtn.addEventListener('click', showResult);
    resetBtn.addEventListener('click', resetApp);
});
