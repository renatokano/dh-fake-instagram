const Sequelize = require("sequelize");
const configDB = require("./configs/database");

const conexao = new Sequelize(configDB);
//veio do formulario
const nomeProduto = "(DROP TABLE PRODUTOS)";
const resultado = conexao
  .query(
    `INSERT INTO produto (nome, modelo, id_marca, descricao, id_categoria, preco, pontuacao) VALUES(:nome, 'teste', 1, 'teste', 1, 100, 3.5 )`,
    {
      type: Sequelize.QueryTypes.UPDA,
      replacements: {
        nome: nomeProduto,
      },
    }
  )
  .then((resultadoConsulta) => {
    console.log(resultadoConsulta);
  });
