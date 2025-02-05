const scapper = require('./scrapper');
const express = require('express');
const { env } = require('process');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send(`
        <h1>👋 Hello world🌍, Welcome to 🦄 GogoAnime API 🧬</h1>
        <h2>Available routes:</h2>
        <ul>
			<li>/Popular/:page</li>
			<li>/NewSeasons/:page</li>
			<li>/getAnime/:anime_id</li>
			<li>/getEpisode/:episode_id</li>
			<li>/search/:search_query</li>
			<li>/getEpisodes/:episode_id</li>
			<li>/allAnime/:page</li>
			<li>/genre</li>
			<li>/genre/:genre/:page</li>
		</ul>
    `);
});

app.get('/Popular/:page', async (req, res) => {
	const result = await scapper.popular(req.params.page);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

app.get('/PopularNoDescription/:page', async (req, res) => {
	const result = await scapper.simplePopular(req.params.page);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

/** MODIFIED */
app.get('/genre', async (req, res) => {
	const result = await scapper.genre();
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

/** MODIFIED */
app.get('/allAnime/:page', async (req, res) => {
	const result = await scapper.allAnime(req.params.page);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

app.get('/genre/:genre/:page', async (req, res) => {
	const result = await scapper.byGenre(req.params.genre, req.params.page);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

app.get('/NewSeasons/:page', async (req, res) => {
	const result = await scapper.newSeason(req.params.page);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

app.get('/search/:query', async (req, res) => {
	const result = await scapper.search(req.params.query);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

app.get('/getAnime/:query', async (req, res) => {
	const result = await scapper.anime(req.params.query);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

app.get('/getEpisode/:query', async (req, res) => {
	const result = await scapper.watchAnime(req.params.query);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

/** MODIFIED */
app.get('/getEpisodes/:query', async (req, res) => {
	console.log(req.params.query);
	const result = await scapper.listOfEpisodes(req.params.query);
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

port = env.PORT ||3000;
app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
