import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";
import icon from "../../public/gapshap.svg";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
	const signUserOut = async () => {
		await signOut(auth);
		cookies.remove("auth-token");
		setIsAuth(false);
		setIsInChat(false);
	};

	return (
		<div className="App">
			<div className="app-header">
				<img src={icon} className="header-icon" />
				<h1>Gapshap</h1>
			</div>

			<div className="app-container">{children}</div>
			{isAuth && (
				<div className="sign-out">
					<button onClick={signUserOut}> Sign Out</button>
				</div>
			)}
		</div>
	);
};

export default AppWrapper;
