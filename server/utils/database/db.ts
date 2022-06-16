import {createPool} from "mysql2/promise";


export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'mega_ogloszenia',
    namedPlaceholders: true,
    decimalNumbers: true

})
