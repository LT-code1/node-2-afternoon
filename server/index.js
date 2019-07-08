const express = require("express");
const app = express();
const mc = require("./controllers/messages_controller");   //filepath to the functions
const messagesBaseUrl = "/api/messages";                    //url of the front end could be "hot dog" anything just start of endpint
app.use(express.static(__dirname + '/../public/build'));    
const port = 3001;
app.use(express.json());

app.post(messagesBaseUrl, mc.create);            //url calls create
app.get(messagesBaseUrl, mc.read);               //url calls read, displays whole message object array
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete); //url calls delete from mc passes in id


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});






