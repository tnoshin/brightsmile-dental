function toggleMenu() {
    const restMenu = document.querySelector('.rest');
    restMenu.classList.toggle('active');
}
 
// Close menu when a link is clicked
document.querySelectorAll('.rest a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.rest').classList.remove('active');
    });
});
 
// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const restMenu = document.querySelector('.rest');
    
    if (!nav.contains(e.target)) {
        restMenu.classList.remove('active');
    }
});

function toggleDark(button) {
    document.body.classList.toggle('dark');
    button.textContent = document.body.classList.contains('dark') ? '🌙' : '🔆';
}

document.getElementById('darkToggle').addEventListener('click', function() { toggleDark(this); });
document.getElementById('moonphn').addEventListener('click', function() { toggleDark(this); });

const BACKEND_URL = 'https://dentalsite-backend.onrender.com';

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('open');
    
    if (chatWindow.classList.contains('open')) {
        loadHistory();
    }
}


function addMessage(role, content) {
    const chatMessages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `chat-msg ${role}`;
    div.textContent = content;   
    chatMessages.appendChild(div);
    

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function loadHistory() {
    try {
        const res = await fetch(`${BACKEND_URL}/history`, {
        credentials: 'include'
        });
        const data = await res.json();
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';
        
        if (data.messages.length === 0) {
            addMessage('assistant', "Welcome to BrightSmile! I'm here to make things easy for you. Ask me about our services, hours, or booking! What can I help you with today? "); //customise message with their assistant name
        } else {
            data.messages.forEach(msg => addMessage(msg.role, msg.content)); 
        }
    } catch (err) {
        console.error('Could not load history:', err);
        addMessage('assistant', 'Could not load previous messages.');
    }
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    

    addMessage('user', text);
    input.value = '';
    
    try {
        const res = await fetch(`${BACKEND_URL}/chat`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({message: text})
        });
        const data = await res.json();
        

        if (!res.ok || data.error) {
            addMessage('assistant', data.error || 'Something went wrong. Please try again.');
            return;
        }
        

        addMessage('assistant', data.response);
        
    } catch (err) {

        console.error('Send failed:', err);
        addMessage('assistant', 'Could not reach the server. Please check your connection.');
    }
}

function handleKey(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

