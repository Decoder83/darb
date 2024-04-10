// Darbuotojų masyvas
let darbuotojai = [];

// Funkcija, kuri atspausdina visus darbuotojus
function atspausdintiDarbuotojus() {
    const container = document.getElementById('darbuotojai-container');
    container.innerHTML = '';

    darbuotojai.forEach((darbuotojas, index) => {
        const darbuotojoElementas = document.createElement('div');
        darbuotojoElementas.classList.add('darbuotojas');
        darbuotojoElementas.innerHTML = `
            <p><strong>Vardas:</strong> ${darbuotojas.vardas}</p>
            <p><strong>Pavardė:</strong> ${darbuotojas.pavarde}</p>
            <p><strong>Atlyginimas:</strong> ${darbuotojas.atlyginimas} €</p>
            <p><strong>GPM:</strong> ${darbuotojas.gpm()} €</p>
            <p><strong>PSD:</strong> ${darbuotojas.psd()} €</p>
            <p><strong>VSD:</strong> ${darbuotojas.vsd()} €</p>
            <button onclick="istrintiDarbuotoja(${index})">Ištrinti</button>
        `;
        container.appendChild(darbuotojoElementas);
    });
}

// Funkcija, kuri prideda naują darbuotoją į masyvą ir atspausdina visus darbuotojus
function pridetiDarbuotoja(vardas, pavarde, atlyginimas) {
    darbuotojai.push({
        vardas: vardas,
        pavarde: pavarde,
        atlyginimas: parseFloat(atlyginimas),
        gpm: function () {
            return this.atlyginimas * 0.20;
        },
        psd: function () {
            return this.atlyginimas * 0.0698;
        },
        vsd: function () {
            return this.atlyginimas * 0.1252;
        }
    });
    atspausdintiDarbuotojus();
}

// Funkcija, kuri ištrina darbuotoją iš masyvo pagal indeksą ir atspausdina visus darbuotojus
function istrintiDarbuotoja(index) {
    darbuotojai.splice(index, 1);
    atspausdintiDarbuotojus();
}

// Formos submit funkcija
document.getElementById('darbuotojo-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const vardas = document.getElementById('vardas').value;
    const pavarde = document.getElementById('pavarde').value;
    const atlyginimas = document.getElementById('atlyginimas').value;
    pridetiDarbuotoja(vardas, pavarde, atlyginimas);
    // Išvalome formos laukus po pridėjimo
    document.getElementById('vardas').value = '';
    document.getElementById('pavarde').value = '';
    document.getElementById('atlyginimas').value = '';
});
