import { useEffect, useState } from 'react';
import { getAllData } from '../../lib/utils/api';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<>
			{users.map(user => (
				<div key={user.userId}>
					<img src={user.profilePicture} alt='' />
					<div>
						<span>{user.fullName}</span>
						<span>{user.email}</span>
						<span>@{user.username}</span>
						<div>
							<p>{user.active}</p>
						</div>
					</div>
					<button>DETAILS</button>
				</div>
			))}
		</>
	);
};

const getAllUsers = async setUsers => {
	const users = await getAllData(); //solicito los usarios, pero esepro a que esten disponibles
	setUsers(users);
};
export default Home;
