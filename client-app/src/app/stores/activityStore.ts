import { makeAutoObservable } from "mobx";

export default class ActivityStore{
     
     //observables
     title = 'Hello from MobX!'


     contructor(){
          makeAutoObservable(this); 
     }
     
     //actions
     setTitle = () =>{
          this.title = this.title + '!';

     }
   
}







