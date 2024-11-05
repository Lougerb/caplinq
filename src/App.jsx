import ModalName from "./components/ModalName";
import ModalSearchBar from "./components/ModalSearchBar";
import ModalSupplierList from "./components/ModalSupplierList";
import ModalProductList from "./components/ModalProductList";
import { useState, createContext } from "react";

export const NameContext = createContext();

// Create a Context Provider
const NameContextProvider = ({ children }) => {
	const [name, setName] = useState(undefined);
	const [sData, setSData] = useState(undefined);
	const [pData, setpData] = useState(undefined);

	return (
		<NameContext.Provider
			value={{ name, setName, sData, setSData, pData, setpData }}
		>
			{children}
		</NameContext.Provider>
	);
};

function App() {
	const [suppName, setSuppName] = useState("Supplier Name");

	const handleSupplierName = () => {
		// setSuppName();
		console.log(document.getElementById("tab").dataset.suppliername);
	};
	return (
		<>
			<div className="main">
				<div className="modal">
					<NameContextProvider>
						<div
							className="modal__wrapper"
							id="tab"
							data-tab="supplier"
							data-suppliername=""
							onChange={handleSupplierName}
						>
							<div className="modal__column" id="supplier_tab">
								<ModalSupplierList />
							</div>
							<div className="modal__column" id="product_tab">
								<ModalProductList />
							</div>
						</div>
					</NameContextProvider>
				</div>
			</div>
		</>
	);
}

export default App;
