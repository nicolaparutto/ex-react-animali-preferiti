const animalsChoices = ["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"];
const { useState } = React;

function AnimalsComponent() {

	const [animals, setAnimals] = useState([]);
	const [show, setShow] = useState(false);
	const [animalAdded, setAnimalAdded] = useState('');

	const addAnimal = () => {
		setAnimals(curr => [...animals, animalAdded]);
		setAnimalAdded('');
		setShow(false)
	}

	function Modal({
		title,
		content,
		show = false,
		onClose = () => { },
		onConfirm = () => { }
	}) {
		return show && ReactDOM.createPortal(
			<div className="modal-container">
				<div className="modal">
					<h2>{title}</h2>
					{content}
					<div>
						<button onClick={onClose}>Annulla</button>
						<button onClick={onConfirm}>Conferma</button>
					</div>
				</div>
			</div>,
			document.body
		)
	}

	return (
		<>
			<button onClick={() => setShow(true)}>Aggiungi animale</button>
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
			<Modal
				show={show}
				onClose={() => setShow(false)}
				onConfirm={addAnimal}
				title="Aggiungi un animale"
				content={
					<input type="text" value={animalAdded} onChange={e => setAnimalAdded(e.target.value)} />
				}
			/>
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