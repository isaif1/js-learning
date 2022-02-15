import { age } from "./utils/age";
import { firstname as fname} from "./utils/firstname";
//jo default export hai, usse kisi bhi name se import kr skte hain
import Pesonio,{Person2} from "./utils/person";



console.log(fname,age);

const person = new Pesonio('john','dow',33);
