// Base de dados: idades e número de atletas por idade
const idadesAtletas = {
    13: 2,
    14: 11,
    15: 23,
    16: 117,
    17: 183,
    18: 264,
    19: 501,
    20: 620,
    21: 802,
    22: 1023,
    23: 1071,
    24: 1092,
    25: 1085,
    26: 1020,
    27: 1050,
    28: 922,
    29: 767,
    30: 637,
    31: 523,
    32: 415,
    33: 350,
    34: 283,
    35: 200,
    36: 164,
    37: 119,
    38: 65,
    39: 55,
    40: 58,
    41: 40,
    42: 34,
    43: 32,
    44: 24,
    45: 11,
    46: 17,
    47: 23,
    48: 13,
    49: 8,
    50: 8,
    51: 16,
    52: 11,
    53: 6,
    54: 8,
    55: 1,
    56: 3,
    58: 2,
    60: 6,
    61: 2,
    62: 1
};

function compararIdade() {
    const idadeUsuario = document.getElementById('idade').value;

    if (idadeUsuario === '') {
        alert('Por favor, insira sua idade.');
        return;
    }

    const idade = parseInt(idadeUsuario);
    let maisNovos = 0;
    let maisVelhos = 0;
    let mesmaIdade = 0;

    // Contar atletas mais novos, mais velhos e da mesma idade
    for (const [idadeAtleta, numeroAtletas] of Object.entries(idadesAtletas)) {
        if (parseInt(idadeAtleta) < idade) {
            maisNovos += numeroAtletas;
        } else if (parseInt(idadeAtleta) > idade) {
            maisVelhos += numeroAtletas;
        } else if (parseInt(idadeAtleta) === idade) {
            mesmaIdade = numeroAtletas;
        }
    }

    // Exibir resultado
    document.getElementById('resultado').innerHTML = `
        <p>Atletas mais novos que você: <strong>${maisNovos}</strong></p>
        <p>Atletas com a mesma idade que você: <strong>${mesmaIdade}</strong></p>
        <p>Atletas mais velhos que você: <strong>${maisVelhos}</strong></p>
    `;
}
