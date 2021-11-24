const BASE_URL = "http://localhost:4000";
const JOBOFFER = `${BASE_URL}/joboffer`;
const CREATE_JOBOFFER = `${JOBOFFER}/create`;
const JOBOFFER_ID = `${JOBOFFER}/:id`;
const CANDIDATE = `${BASE_URL}/candidates`;
const CANDIDATE_ID = `${CANDIDATE}/:id`;
const USERS = `${BASE_URL}/users`;
const LOGIN = `${USERS}/login`;

export {
    JOBOFFER ,
    CANDIDATE,
    USERS,
    LOGIN,
    CREATE_JOBOFFER,
    JOBOFFER_ID,
    CANDIDATE_ID
};