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
        'imgCard': 'img/wayne-barnett-founder-ceo.jpg', 
        'nameCard': 'Angela Carrol',
        'roleCard': 'Chief Editor'
    },
    {
        'imgCard': '', 
        'nameCard': 'Angela Lopez',
        'roleCard': 'Social Media Manager'
    },
    {
        'imgCard': '', 
        'nameCard': 'Barbara Ramos',
        'roleCard': 'Graphic Designer'
    },
    {
        'imgCard': '', 
        'nameCard': 'Scott Estrada',
        'roleCard': 'Developer'
    },
    {
        'imgCard': '', 
        'nameCard': 'Walter Gordon',
        'roleCard': 'Office Manager'
    }
];

const teamCard = document.querySelector('.team-container');
console.log(teams);

const cardText = document.querySelector('.card-text');
const cardTeamName = document.querySelector(cardText>'h3');
const cardTeamRole = document.querySelector(cardText>'p');

//console.log(cardText);

// aggiungiamo una card all'inteno dell html
let newCard = '';

newCard +=`
    <div class="team-card">
        <div class="card-image">
            <img
                src="img/wayne-barnett-founder-ceo.jpg"
                alt="Wayne Barnett"
        />
        </div>
        <div class="card-text">
            <h3>Wayne Barnett</h3>
            <p>Founder & CEO</p>
        </div>
    </div>
`;

teamCard.innerHTML += newCard;