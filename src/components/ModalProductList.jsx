import React from "react";
import products from "../json/products.json";
import { useState, useContext } from "react";
import ModalName from "./ModalName";
import { NameContext } from "../App";

export default ({}) => {
	const [data, setData] = useState(products.data);
	const { name, sData } = useContext(NameContext);

	const filterBySuppId = (id) => {
		return data.filter((item) => item.supplierId == id);
	};

	if (sData != undefined) {
		const filteredData = filterBySuppId(sData);

		return (
			<>
				<ModalName title={name} />
				<div className="modal__product-list">
					{filteredData.map((val, key) => {
						return (
							<React.Fragment key={key}>
								<button className="modal__product-list__item">
									{val.name}
								</button>
							</React.Fragment>
						);
					})}
				</div>
			</>
		);
	}
};
