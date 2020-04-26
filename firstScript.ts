import { browser, ProtractorExpectedConditions ,element ,by } from "protractor";
import{Given , When , Then} from "cucumber";
import { URLhit } from "../Pages/URLhit";


let urlhit = new URLhit();

Given ('URL Launched', async () =>  {

   urlhit.getUrl();
  
    
    
}); 