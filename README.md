# Gogoanime-API v.1🧬

## API Information

This API is hosted on a server provided by Render. If the server becomes inactive or experiences issues, please contact the repository owners for assistance.

## Contact

For any issues or questions, please reach out to:

- Daniela Magrì
- Alessandro Scicolone

# API Documentation 📑

## Usage

To use this API, make requests to the following endpoints based on your needs.

**Available routes**
	
	/Popular/:page
	
	/NewSeasons/:page
	
	/getAnime/:anime_id
	
	/getEpisode/:episode_id
	
	/search/:search_query
 	
  	/getEpisodes/:episode_id

   	/allAnime/:page

	/genre

	/genre/:genre/:page
	

**GET | Popular Anime 🍿**
```
https://server-1-otakutube.onrender.com/Popular/:page
```
 >this will return all the popular anime
```
[
    {
        "name": "anime name",
        "img_url": "url",
        "anime_id": "anime id"
    }
    ...
]
```

**GET | New Seasons 🆕**
```
https://server-1-otakutube.onrender.com/NewSeasons/:page
```
 >this will return all anime with new seasons available
```
[
    {
        "name": "anime name",
        "img_url": "url",
        "anime_id": "anime id"
    }
    ...
]
```
**GET | Anime 🕵️‍♂️**
```
https://server-1-otakutube.onrender.com/getAnime/:anime_id
```
 >this will return the anime **name ,thumbnail image ,about  ?** and **episode_id** for all the episodes available for that anime
```
[
	{
	    "name": "anime name",
	    "img_url": "url",
	    "about": "Plot Summary: about the anime",
	    "episode_id": 
		    [
		        "some-anime-episode-1",
		        "some-anime-episode-2",
		        "some-anime-episode-3"
		         ...
		    ]
	}
]
```
**GET  | Anime Episode 📽**
```
https://server-1-otakutube.onrender.com/getEpisode/:episode_id
```
 >this will return the downloadable  🔻 link for the episode
```
[
	    {
	        "quality": "watch(360P-mp4)",
	        "ep_link": "episode url"
	    }
	    
	    ...
]
```

**GET  | Search Anime 📽**
```
https://server-1-otakutube.onrender.com/search/:search-query
```
 >this will return all the anime related to the search
```
[
    	  {
        	"name": "anime name",
        	"img_url": "url",
        	"anime_id": "anime id"
    	  }
	  
	  ...
	  
]	  
```
<br />
<br />

**💢 Troubleshootings**
<br />
This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may not be a good fit for your project(s).

<br />

**❤️ Show your support**
<br />
Please ⭐ this repository if you like it or this project helped you!
Feel free to open issues or submit pull-requests to help me improving my work.

<br />

**🤖 Author**
<br />
This project was created by Dhanush Suvarna and modified according to the needs of the application using it by Daniela Magrì and Alessandro Scicolone.

