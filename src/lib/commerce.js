
import Commerce from '@chec/commerce.js';


const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;


export default new Commerce(
  checAPIKey
  
);