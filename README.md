# toolbox-challenge
A fullstack challenge from the Toolbox company

## REQUIRIMENTS
- Have ```docker``` installed on your computer


## INSTALLATION

- Clone repository ```git clone https://github.com/GabrielLaTorre/toolbox-challenge.git```
- Go to toolbox-challenge downloaded folder
- In the main folder run  ```docker-compose build```
- Then run  ```docker-compose start```


## SERVER

#### Endpoints
- ```GET /files/data```  => get all files (formatted)
- ```GET /files/data?fileName={filename}``` => get a specific ific file (formatted)
- ```GET /files/list```  => get all available files from external api (no-formatted)
