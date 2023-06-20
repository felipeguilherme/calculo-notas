// const app = document.getElementById('app');

// function calcularNota() {
//   const v1 = parseFloat(document.getElementById('v1').value);
//   const v2 = parseFloat(document.getElementById('v2').value);
//   const v3 = parseFloat(document.getElementById('v3').value);

//   if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
//     app.innerHTML = '<p>Preencha todas as notas corretamente.</p>';
//     return;
//   }

//   const mediaFinal = (((v1 + v2) / 2) + v3) / 2;

//   if (v3 < 4) {
//     app.innerHTML = `<p>Infelizmente você não foi aprovado na disciplina. Sua nota da v3 é menor do que 4.0. (Nota V3: ${v3.toFixed(2)})</p>`;
//   } else if (mediaFinal < 5) {
//     app.innerHTML = `<p>Infelizmente você não foi aprovado na disciplina. Sua média final é menor do que 5.0. (Média Final: ${mediaFinal.toFixed(2)})</p>`;
//   } else {
//     app.innerHTML = `<p>Parabéns! Sua média final foi ${mediaFinal.toFixed(2)} e você passou!!!</p>`;
//   }
// }

// app.innerHTML = `
//   <label for="v1">Nota V1:</label>
//   <input type="text" id="v1">
//   <br>
//   <label for="v2">Nota V2:</label>
//   <input type="text" id="v2">
//   <br>
//   <label for="v3">Nota V3:</label>
//   <input type="text" id="v3">
//   <br>
//   <button onclick="calcularNota()">Calcular</button>
// `;
