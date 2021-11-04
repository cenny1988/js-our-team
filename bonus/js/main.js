/* 
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

// costruiamo un array di obj con 5 elementi
const teams = [
    {
        'imgCard': 'img/angela-caroll-chief-editor.jpg', 
        'nameCard': 'Angela Carrol',
        'roleCard': 'Chief Editor'
    },
    {
        'imgCard': 'img/angela-lopez-social-media-manager.jpg', 
        'nameCard': 'Angela Lopez',
        'roleCard': 'Social Media Manager'
    },
    {
        'imgCard': 'img/barbara-ramos-graphic-designer.jpg', 
        'nameCard': 'Barbara Ramos',
        'roleCard': 'Graphic Designer'
    },
    {
        'imgCard': 'img/scott-estrada-developer.jpg', 
        'nameCard': 'Scott Estrada',
        'roleCard': 'Developer'
    },
    {
        'imgCard': 'img/walter-gordon-office-manager.jpg', 
        'nameCard': 'Walter Gordon',
        'roleCard': 'Office Manager'
    }
];

const teamContainer = document.querySelector('.team-container');
const nameForm = document.getElementById('name');
const roleForm = document.getElementById('role');
const imageForm = document.getElementById('image');
const addMemberButton = document.getElementById('addMemberButton');

// for (let key in teams){
//     console.log(teams[key]);
// }

// aggiungiamo tutte le card all'inteno dell html con un for sull array di ogj
let newCard = '';
for (let i=0; i<teams.length; i++){
    newCard +=`
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${teams[i].imgCard}"
                    alt="${teams[i].nameCard}"
            />
            </div>
            <div class="card-text">
                <h3>${teams[i].nameCard}</h3>
                <p>${teams[i].roleCard}</p>
            </div>
        </div>
    `;
}
teamContainer.innerHTML += newCard;

// estrapoliamo gli input dal form per creare una nuova card ed inserirla nell html
addMemberButton.addEventListener('click',
    function(){
        console.log(nameForm);
    }
);

