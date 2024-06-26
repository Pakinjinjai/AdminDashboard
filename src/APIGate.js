///Production///
const baseURL = "https://health-backend-kp6f.onrender.com/api" 

///Development///
// const baseURL = "http://localhost:8080/api" 
const LOGIN_API = "/user-login";
const GETALLUSERS_API = "/all-data-user";
const EDITUSERS_API = "/upload-image"; //parameter {userId} ต่อหลัง URL ex./upload-image/{userId}
/** 'Authorization': `Bearer Include accessToken in the header'Content-Type': 'application/json' **/ 
const UPDATEUSER = '/user-update'
/** 'Authorization': `Bearer Include accessToken in the header'Content-Type': 'application/json' add /{userId} parameter diasTolic , oxyGen, pulse, sysTolic **/ 
const ADDHEALTHUSER_API = '/insert-data-health'

export {
    baseURL,
    LOGIN_API,
    GETALLUSERS_API,
    EDITUSERS_API,
    UPDATEUSER,
    ADDHEALTHUSER_API
}