try { //é executado quando não há erros
    console.log('abri um arquivo');
    console.log('gerou erro');
    console.log("fechei o arquivo");
} catch (e) { //é execuatda quando há erros
    console.log('Tratando o erro');
} finally { //sempre
    console.log('sempre sou exeutado');
}