import { useState } from "react";

export default ({}) => {
	const [text, setText] = useState("");
	const handleChange = (e) => {
		setText(e.key);
	};
	return (
		<>
			<input
				type="text"
				name=""
				id=""
				className="modal__search"
				placeholder={"Search Supplier"}
				value={text}
				onChange={handleChange}
			/>
		</>
	);
};
