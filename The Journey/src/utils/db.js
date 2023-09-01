import mongoose from "mongoose";

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("DB Connected");
	} catch (error) {
		console.log(error);
		throw new Error("Connection failed!");
	}
};

export default connect;
