const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
		},

		actions: {
			saluda: () => {
				console.log("Hola!");
			},
			addContact: (contact) => {
				const store = getStore();
				setStore({ contactList: [...store.contactList, contact] });
			},
			deleteContact: (id) => {
				const store = getStore();
				const filteredList = store.contactList.filter(
					(contact, index) => id !== index
				);
				setStore({
					contactList: filteredList,
				});
			},
			edit: (id, contact) => {
				const store = getStore();
				let newList = store.contactList.filter(
					(contact, index) => index !== id
				);
			},
		},
	};
};
export default getState
