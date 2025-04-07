const animals = ["Cane", "Gatto", "Mucca", "Asino", "Maiale"];
const animalsChoices = ["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"];
function AnimalsComponent() {
	return (
		<details>
			<summary>
				<span>Animali</span>
			</summary>
			<ul>
				{animals.map((animal, index) => (
					<li key={index}>{animal}</li>
				))}
			</ul>
		</details>
	)
}

// Importo la funzione createRoot:
const { createRoot } = ReactDOM;

// Seleziono l'elemento dal DOM in cui voglio inserire il componente:
const AnimalsList = document.querySelector(".lista-animali");

// Salvo l'oggetto restituito dalla funzione createRoot, a cui passo come parametro, 
// l'elemento del DOM interessato all'inserimento del componente:
const root = createRoot(AnimalsList);

// Tramite il metodo render, passo il componente all'elemento del DOM:
root.render(<AnimalsComponent />)