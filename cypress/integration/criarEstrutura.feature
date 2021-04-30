Feature: Criar Estrutura Teste

    Automatizar a criação de pastas e arquivos de Teste

Scenario: Baseado no modelo criar Estrutura Modelo BDD
  Given Leitura Arquivo Modelo, "Login" 
  And Criar Arquivo Step,
  When Criar Page Objects,
  Then Criar Arquivo Elements, 