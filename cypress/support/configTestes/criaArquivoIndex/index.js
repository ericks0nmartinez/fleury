const el = require('./elements').ELEMENTS;

class CriaArquivoIndex {
  configurandoClasses(nomePastaPrincipal, classe, acessaSupport) {

    const nomeClasse = 0;
    const nomeMetedo= 1;
    let novoCaminho = '';

    const voltarAteSupport = acessaSupport.split('/');
    for (var i = 0; i <= voltarAteSupport.length - 1; i++){
      novoCaminho += '../';
    }
    const importArquivosPage = `import ${classe[nomeClasse]} from '${novoCaminho}support/${nomePastaPrincipal}/${classe[nomeClasse]}';\n`;;


    const indexPart0 = "const el = require(\'./elements\').ELEMENTS;\n\n";
    const indexPart1 = `class ${classe[nomeClasse].charAt(0).toUpperCase() + classe[nomeClasse].slice(1)} {\n`;
    const indexPart2 = `  ${classe[nomeMetedo].replaceAll('();', ' ()')} {\n    cy.get(el.exemplo).click();\n  }\n}\n\n`;
    const indexPart3 = `export default new ${classe[nomeClasse].charAt(0).toUpperCase() + classe[nomeClasse].slice(1)}();`;
    cy.writeFile(`cypress/support/${nomePastaPrincipal}/${classe[nomeClasse]}/index.js`,
      `${indexPart0}${indexPart1}${indexPart2}${indexPart3}`);
    return importArquivosPage;
  }
}

export default new CriaArquivoIndex();
