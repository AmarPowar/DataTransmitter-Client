
var io = require('socket.io-client');

// import .env file data into global process object
import { config } from 'dotenv'
import { readRawJsonData } from './util';
config()

/**
 * @method createSocketInstance() This method will create instances of socket client
 * @param ipAddress 
 * @param timeInterval 
 */
export const createSocketInstance = (ipAddress: string, timeInterval: number) => {
    var socket = io.connect(`${process.env.HOST}:${process.env.PORT}`, {
        reconnect: true, query: {
            "clientIp": ipAddress
        }
    });

    // Add a connect listener
    socket.on('connect', function () {
       console.log("client connect to server----",ipAddress)
    });

    socket.on("disconnect", () => {
        console.log("client disconnect from server----",ipAddress)
        socket.connect();
      });

    // time interval to send data to sever
    setInterval(() => {
        socket.emit("data", { IP: ipAddress, data : readRawJsonData()})
    }, timeInterval * 1000);

}
