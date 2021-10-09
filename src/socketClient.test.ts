jest.setTimeout(50000);
var server = require("../client"),
  io = require("socket.io-client"),
  ioOptions = {
    transports: ["websocket"],
    forceNew: true,
    reconnection: false
  },
  testMsg = "HelloWorld",
  sender

describe("client connection to server", function() {
  beforeEach(function(done) {
    sender = io("http://localhost:3000/", ioOptions);
    done();
  });
  afterEach(function(done) {
    sender.disconnect();
    done();
  });

  describe("Message Events", function() {
    it("client emit the message", function(done) {
      sender.emit("message", testMsg);
    });
  });
});