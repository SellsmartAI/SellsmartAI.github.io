openai_test()

console.log = function() {}
window.onload = function() {       
  setTimeout(function(){
    createAIBlock("Hey, it's great to see you! 👋'")
    setTimeout(function(){
      createAIBlock("Let me convince you, you will be impressed. Ask me anything 😁")
    },2000); 
  },2000); 
}



function createHumanBlock(humanMessage){
  var newElement = document.createElement('div');
  newElement.innerHTML = humanMessage;
  newElement.id = 'chatboxHuman'
  document.getElementById('ChatArea').appendChild(newElement);
  var elem = document.getElementById('ChatArea');
  elem.scrollTop = elem.scrollHeight;
}
function createAIBlock(AIMessage){
  var newElement = document.createElement('div');
  newElement.innerHTML = AIMessage;
  newElement.id = 'chatboxAI'
  document.getElementById('ChatArea').appendChild(newElement);
  var elem = document.getElementById('ChatArea');
  elem.scrollTop = elem.scrollHeight;
}
async function sendChatMessage() {
  const message = document.getElementById('inputtext').value;

  if (message !== "") {
    createHumanBlock(message);

    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });

    const responseData = await response.json();
    const reply = responseData.reply;
    createAIBlock(reply);
  }
}