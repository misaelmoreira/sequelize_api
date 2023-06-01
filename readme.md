# Comando pra iniciar o projeto com o sequelize
npx sequelize-cli init

# Configurar o path
.sequelizerc

# Criando migrations
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# rodar migrations
npx sequelize-cli db:migrate

