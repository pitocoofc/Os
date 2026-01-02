// kernel.js
let openApps = [];
let ram = 0.0;

function openApp(file, name) {
    document.getElementById('multitask-screen').style.display = 'none';
    
    if (!openApps.find(a => a.file === file)) {
        ram += 0.5;
        if(ram >= 4.0) { alert("RAM CRITICAL!"); return; }
        
        openApps.push({file, name});
        const frame = document.createElement('iframe');
        frame.id = `win-${file}`;
        frame.src = file;
        frame.className = 'app-window';
        document.getElementById('app-container').appendChild(frame);
    }
    
    showWindow(file);
}

function showWindow(file) {
    document.querySelectorAll('.app-window').forEach(w => w.style.display = 'none');
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById(`win-${file}`).style.display = 'block';
}

function toggleMultitask() {
    const m = document.getElementById('multitask-screen');
    const list = document.getElementById('task-list');
    
    if(m.style.display === 'flex') {
        m.style.display = 'none';
    } else {
        list.innerHTML = '';
        document.getElementById('home-screen').style.display = 'none';
        document.querySelectorAll('.app-window').forEach(w => w.style.display = 'none');
        
        openApps.forEach(app => {
            const card = document.createElement('div');
            card.className = 'task-card';
            card.innerHTML = `
                <div class="task-header"><span>${app.name}</span></div>
                <div class="task-body" onclick="showWindow('${app.file}')">📱</div>`;
            list.appendChild(card);
        });
        m.style.display = 'flex';
    }
}

function goHome() {
    document.getElementById('multitask-screen').style.display = 'none';
    document.querySelectorAll('.app-window').forEach(w => w.style.display = 'none');
    document.getElementById('home-screen').style.display = 'grid';
      }
