function whatsapp() {
  
    const telefone = "5571987244342";
    const mensagem = "Olá, Lane! Gostaria de saber mais sobre seus serviços e agendar um horário.";
    
    const msgFormatada = encodeURIComponent(mensagem);
    const link = `https://wa.me/${telefone}?text=${msgFormatada}`;
    
    window.open(link, '_blank');
}