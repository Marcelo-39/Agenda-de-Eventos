function adicionarEvento() {
  const localSelect = document.getElementById('local');
  const audSelect = document.getElementById('Aud');
  const dateInput = document.getElementById('data');
  const timeInput = document.getElementById('hora');

  const local = localSelect.value;
  const aud = audSelect.value;
  const date = dateInput.value;
  const time = timeInput.value;

  if (local && aud && date && time) {
    const eventElement = document.createElement('div');
    eventElement.textContent = `Local: ${local} | Aud: ${aud} | Data: ${date} | Hora: ${time}`;
    eventElement.classList.add('selected');

    const eventoList = document.querySelector('.evento-list');
    eventoList.appendChild(eventElement);

    localSelect.value = '';
    audSelect.value = '';
    dateInput.value = '';
    timeInput.value = '';

    const resultElement = document.querySelector('.resultado');
    resultElement.textContent = `Evento adicionado: Local: ${local} | Aud: ${aud} | Data: ${date} | Hora: ${time}`;
  } else {
    alert('Preencha todos os campos obrigatórios');
  }
}

function alterarEvento() {
  const selectedEvent = document.querySelector('.evento-list div.selected');
  if (selectedEvent) {
    const novoLocal = prompt('Novo Local:', selectedEvent.dataset.local);
    const novoAud = prompt('Novo Auditório:', selectedEvent.dataset.aud);
    const novaData = prompt('Nova Data:', selectedEvent.dataset.date);
    const novaHora = prompt('Nova Hora:', selectedEvent.dataset.time);

    if (novoLocal !== null && novoAud !== null && novaData !== null && novaHora !== null) {
      selectedEvent.textContent = `Local: ${novoLocal} | Aud: ${novoAud} | Data: ${novaData} | Hora: ${novaHora}`;
      selectedEvent.dataset.local = novoLocal;
      selectedEvent.dataset.aud = novoAud;
      selectedEvent.dataset.date = novaData;
      selectedEvent.dataset.time = novaHora;

      const resultElement = document.querySelector('.resultado');
      resultElement.textContent = 'Evento alterado com sucesso';
    } else {
      alert('Operação cancelada ou dados inválidos');
    }
  } else {
    alert('Nenhum evento selecionado');
  }
}

function excluirEvento() {
  const selectedEvent = document.querySelector('.evento-list div.selected');
  if (selectedEvent) {
    selectedEvent.remove();

    const resultElement = document.querySelector('.resultado');
    resultElement.textContent = 'Evento excluído';
  } else {
    alert('Nenhum evento selecionado');
  }
}
