export const configApi = {
    origin: '*',
    
      methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
      ],
    
      allowedHeaders: [
        'Content-Type',
      ]
}

/*
base de données : 
  user : 
    id:string,
    name:string,
    firstname:string,
    pseudo:string,
    email:string,
    mdp:string
   
  games:
    id:string,
    name:string,
    type:string,
    created_at:DateTime,
    updated_at:Datetime,
    participants:array

  sentences :
    id:string,
    modalities:array
    

*/