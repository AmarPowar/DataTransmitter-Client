import readline from "readline";
import { createSocketInstance } from "./src/socketClient";
import { GenerateRandomIp } from "./src/util";

// create stdin instance to allow user to enter input in terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read input from user
rl.question("How many clients we want to create from this 1 Node client ? ",  (clientCount: any)=> {
  rl.question("How many X seconds we have to send data ? ",  (timeInterval: any) =>{

    console.log(`creates ${clientCount} socket client `)
    console.log(`data will send to server every ${timeInterval} seconds` );
    console.log("-----------------------------------------------------------") 
    for(let i =0 ;i < clientCount ; i++){
      // generate Random IPs
    var ipAddress:string = GenerateRandomIp();
    /**
     * create socket client   
     * passing IP address and timeinterval in seconds
     *  */ 
    try{
      createSocketInstance(ipAddress, timeInterval);
    } catch(err){
      console.log("Please enter valid input .")
      rl.close()
    }
   
    
  }

  });
});

rl.on("close", function () {
  console.log("\nTerminal Disconnected !!!");
  process.exit(0);
});





