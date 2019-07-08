let messages = [];               //resets at start of page
let id = 0;                      //resets at start of page

module.exports = {               //exports functions
  create: (req, res) => {
        const { text, time } = req.body;    //gets user input put into anonymous object
        messages.push({ id, text, time });   //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
        id++;
        res.status(200).send(messages);
  },
  read: (req, res) => {
        res.status(200).send(messages);      //sends message obj array
  },
  update: (req, res) => {
        const { text } = req.body; 
      //   const text = req.body.text
        console.log(text)         ; //gets user input from req.body
        const updateID = req.params.id;      //gets user input id  url/:id
        const messageIndex = messages.findIndex(message => message.id == updateID);  //find index where 
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send(messages);
  },
  delete: (req, res) => {
        const deleteID = req.params.id;    //url/:id user input
        messageIndex = messages.findIndex(message => message.id == deleteID); //messages.index returns objects index
        messages.splice(messageIndex, 1);       //delete from array
        res.status(200).send(messages);
  }
}


