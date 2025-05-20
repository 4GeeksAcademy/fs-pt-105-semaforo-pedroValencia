import React,{useState} from "react";

const Home = () => {
	const [color, setColor] = useState ()
	const [newColor, setNewColor] = useState (false)
	return (
		<div className="d-flex justify-content-center">
		<div className="semaforo">
            
			<button onClick={() => setColor("red") } className={`rojo ${color == "red" && "brillo"}`}></button>
			<button onClick={() => setColor("yellow") } className={`amarillo ${color == "yellow" && "brillo"}`}></button>
			<button onClick={() => setColor("green") } className={`verde ${color == "green" && "brillo"}`}></button>
			{newColor == true && (
				<button onClick={() => setColor("purple") } className={`morado ${color == "purple" && "brillo"}`}></button>
			)}
		</div>
		<div>
			<button onClick={() => setNewColor (true)} type="button" className="btn btn-warning">Add new color</button>
		</div>		
		</div>
	);
};

export default Home;