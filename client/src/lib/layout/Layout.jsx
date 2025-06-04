import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header';

const Layout = () => {
	const location = useLocation();
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
export default Layout;
