import express from 'express';
import dotenv from 'dotenv';
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 9898;

try {
	(async () => {
		app.listen(PORT, () => {
			console.log(`Server started on: ${PORT}`);
		});
	})();
} catch (err) {
	console.error('[', new Date().toUTCString(), ']\n Something went wrong \n', err);
	return;
}