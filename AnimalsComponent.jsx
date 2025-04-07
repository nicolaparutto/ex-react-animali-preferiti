const animalsChoices = ["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"];
const { useState } = React;

function AnimalsComponent() {
	const [animals, setAnimals] = useState([]);

	const addAnimal = () => {
		const numRandom = Math.floor(Math.random() * 5);
		const animalToAdd = animalsChoices[numRandom];
		console.log(animalToAdd);
		if (animals.includes(animalToAdd)) {
			alert(`
				Non ho inserito nessun animale, perche 
				la lista conteneva già l'animale generato 
				casualmente: ${animalToAdd}
				`)
		} else {
			setAnimals([...animals, animalToAdd])
		}
	}

	return (
		<>
			<button onClick={addAnimal}>Aggiungi animale</button>
			<details>
				<summary>
					<span>Animali</span>
				</summary>
				<ul>
					{animals.length ?
						animals.map((animal, index) => (
							<li key={index}>{animal}</li>
						))
						:
						<p>Nessun animale presente</p>
					}
				</ul>
			</details>
		</>
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



