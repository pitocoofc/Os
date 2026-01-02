let openApps = [];
let ram = 0.0;
let isDev = false;

function openApp(file, name) {
    document.getElementById('multitask-screen').style.display = 'none';
    let app = openApps.find(a => a.file === file);
    
    if (!app) {
        ram += 0.5;
        if(ram >= 4.0) { document.getElementById('crash-screen').style.display = 'flex'; return; }
        openApps.push({file, name});
        const iframe = document.createElement('iframe');
        iframe.id = `win-${file}`;
        iframe.src = file;
        iframe.className = 'app-window';
        document.getElementById('app-container').appendChild(iframe);
    }
    
    document.querySelectorAll('.app-window').forEach(w => w.style.display = 'none');
    document.getElementById(`win-${file}`).style.display = 'block';
    document.getElementById('home-screen').style.display = 'none';
}

function goHome() {
    document.getElementById('multitask-screen').style.display = 'none';
    document.querySelectorAll('.app-window').forEach(w => w.style.display = 'none');
    document.getElementById('home-screen').style.display = 'grid';
}

function toggleMultitask() {
    const m = document.getElementById('multitask-screen');
    const list = document.getElementById('task-list');
    if(m.style.display === 'flex') { m.style.display = 'none'; } 
    else {
        list.innerHTML = '';
        openApps.forEach(app => {
            let card = document.createElement('div');
            card.style = "background:white; width:150px; height:200px; margin:10px; border-radius:10px; padding:10px;";
            card.innerHTML = `<b>${app.name}</b><br><button onclick="openApp('${app.file}', '${app.name}')">Abrir</button>`;
            list.appendChild(card);
        });
        m.style.display = 'flex';
    }
}

function toggleDevPanel() { document.getElementById('dev-panel').classList.toggle('active'); }
function ramLock() { ram = 4.1; document.getElementById('crash-screen').style.display = 'flex'; }
