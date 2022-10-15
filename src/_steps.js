/**
 * //INITIAL SETUP
 * 1. visit: console.firebase.google.com
 * 2.create a new firebase projects
 * 3. visit doc ( go to docs): Build > Authentication > web > Getting started 
 * 4. register web app > firebase project home > click web > give name and register 
 * 5. install firebse for your project: npm inistall firebase
 * 6. DANGEROUS: get firebse config and put it in firebase.init.js
 * 7. export app from firebase.init.js
 ----------------------------
  
     SETUP THE PROVIDER

 --------------------------------
 * 8. create auth using getAuth form firebse by using app from firebse.init.js
 * 9. create a google auth provider. do not forget to use new. like new googleAuthProvider();
 * 10. go to firebse > Build > Authentication > Sign in method 
 * 11. Enable google sign in method 
 * 12. Create a button google sign in method with a click handler
 * 13. inside the event handler, call singInWithPopup with auth, provider 
 * 14. after singInWithPopup .then result , error
 *  
 * -----------------------------
 * 
 *        DISPLAY DATA
 * 
 * --------------------------------
 * ADD A NEW SIGN IN METHOD
 * 
 * -------------------------
 * 1. enable the sign in method 
 * 2. Create github, twitter, fb, etc.. app create
 * 3. git clientId and secret 
 * 
 */