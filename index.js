function checkAge() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const messageElement = document.getElementById("message");
  
    if (name && age) {
      if (parseInt(age) >= 18) {
        messageElement.textContent = `Bem-vindo, ${name}! Você pode entrar.`;
      } else {
        messageElement.textContent = `Desculpe, ${name}. Você é menor de idade.`;
      }
    } else {
      messageElement.textContent = "Por favor, preencha todos os campos.";
    }
  }  