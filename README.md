## API GiantBomb

This repo contains the code for a proxy built to simplify the access to the API: https://comicvine.gamespot.com

### Instructions

To use this API you must use this URL 

```
https://immense-bastion-93722.herokuapp.com/
```

instead of the original one

```
https://comicvine.gamespot.com/api
```

For example:

Instead of: 

```
http://api.giantbomb.com/search/?api_key=<%API-KEY%>&format=json&query=mario&resources=game
```

You must use

```
https://immense-bastion-93722.herokuapp.com//search/?api_key=<%API-KEY%>&format=json&query=mario&resources=game
```

Being `<%API-KEY%>` your own API Key needed to access this API (you must register first in the website https://www.giantbomb.com/)