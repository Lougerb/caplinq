import React from "react";
import suppliers from "../json/suppliers.json";
import { useState, useContext } from "react";
import { NameContext } from "../App";
import ModalName from "./ModalName";
import ModalSearchBar from "./ModalSearchBar";

export default ({}) => {
	const [data, setData] = useState(suppliers);
	const { setName, setSData } = useContext(NameContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		document.getElementById("tab").setAttribute("data-tab", "product");
		const d = new FormData(e.target);
		const dataObject = Object.fromEntries(d.entries());
		// console.log();
		setName(dataObject["supplier_name"]);
		setSData(dataObject["supplier_id"]);
	};

	return (
		<>
			<ModalName title="Browse" />
			<ModalSearchBar />
			<div className="modal__list">
				{data.map((val, key) => {
					return (
						<React.Fragment key={key}>
							<form
								onSubmit={handleSubmit}
								className="modal__list__item__form"
							>
								<input
									type="hidden"
									name={`supplier_id`}
									value={val.id}
								/>
								<input
									type="hidden"
									name={`supplier_name`}
									value={val.name}
								/>
								<input
									type="submit"
									className="modal__list__item"
									// onClick={handleSwitchProduct}
									value={val.name}
								/>
							</form>
							{/* <button
							>
								{val.name}
							</button> */}
						</React.Fragment>
					);
				})}
			</div>
		</>
	);
};
