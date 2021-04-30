
class CriarEstrutura {
  LeituraArquivoModelo(args) {
    cy.readFile(`cypress/integration/${args}.feature`).then(res => {
      const BDD = ['Given', 'And', 'When', 'Then'];
      const linhas = res.split('\n');
      const metodos = [];

      linhas.map(linha => {
        const palavras = linha.split(' ');
        palavras.map(palavra => {
          BDD.map(bdd => {
            if (palavra == bdd) {
              const metodo = linha.split(bdd)[1].split(' ');
                  const funcao = metodo[1] + metodo[2].charAt(0).toUpperCase() + metodo[2].slice(1) +  metodo[3].charAt(0).toUpperCase() + metodo[3].slice(1);
                 
              metodos.push({
                bdd: bdd,
                metodo: funcao.split(',')[0],
                descricao: linha.split(bdd)[1]
              });
            }
          });
        });
      });
    this.criarPageObjects(args, metodos);
    this.criarArquivoStep(args, metodos);
    });
  }

  criarPageObjects(args, metodos) {
    const classe = `class ${args} {\n`;
    const exportarClasse = `}\nexport default new ${args}();`
    const funcoes = metodos.map(metodo => {
      return `  ${metodo['metodo']} () {\n    cy.get(el.exmplo).cick();\n  }\n`;
    });

    cy.writeFile(`cypress/support/pageObjects/${args}.js`, `${classe}${funcoes.toString().replaceAll(/,/g,'')}${exportarClasse}`);
  }

  criarArquivoStep(args, metodos){
    const importacao = `import ${args} from '../pageObjects/${args}'; \n`;
    
    const defini = [];    
    const definicao = metodos.map(metodo => {
      if(metodo['bdd'] == 'And'){
        metodo['bdd'] = 'When'
      }
        const texto = `${metodo['bdd']}(/^${metodo['descricao'].replaceAll(/"([^"]*)"/g, '"([^"]*)"')}$/, () =>{\n  ${args}.${metodo['metodo']}();\n\n})\n\n`;
          texto.split(' ').map(palavra =>{
          if(palavra == '"([^"]*)"'){
            defini.push(`${metodo['bdd']}(/^${metodo['descricao'].replaceAll(/"([^"]*)"/g, '"([^"]*)"')}$/, (args1) =>{\n  ${args}.${metodo['metodo']}(args1);\n\n})\n\n`);
          }
        })
     return texto;
  });

  for (let index = 0; index < definicao.length; index++) {
    for (let j = 0; j < defini.length; j++) {    
      if(defini[j].split(',')[0] == definicao[index].split(',')[0]){
        definicao[index] = defini[j];
      }
    }

    if(defini.indexOf(definicao[index]) == -1){
      defini.push(definicao[index]);
    }
  }
    cy.writeFile(`cypress/support/steps/${args}.js`, `${importacao}${definicao.toString().replaceAll('})\n\n,','})\n\n')}`);
  }
}

export default new CriarEstrutura();