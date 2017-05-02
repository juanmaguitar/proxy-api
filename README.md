## API GiantBomb

This repo contains the code for a proxy built to simplify the access to the API: https://comicvine.gamespot.com

### Instructions

To use this API you must use this URL 

```
https://api-comic-vine.herokuapp.com
```

instead of the original one

```
https://comicvine.gamespot.com/api
```

For example:

Instead of: 

```
https://comicvine.gamespot.com/api/characters/?api_key=<%API-KEY%>&format=json
```

You must use

```
https://api-comic-vine.herokuapp.com/characters/?api_key=<%API-KEY%>&format=json
```

Being `<%API-KEY%>` your own API Key needed to access this API (you must register first in the website https://comicvine.gamespot.com/)

#### More examples

```
https://api-comic-vine.herokuapp.com/search/?api_key=<%API-KEY%>&format=json&query=superman

https://api-comic-vine.herokuapp.com/teams/?api_key=<%API-KEY%>&format=json

