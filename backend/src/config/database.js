const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O valor {VALUE} informado é menor que o limite mínimo de '{MIN}'";
mongoose.Error.messages.Number.max = "O valor {VALUE} informado é maior que o limite máximo de '{MAX}'";
mongoose.Error.messages.String.enum = "O valor {VALUE} não é válido para o atributo '{PATH}'";

module.exports == mongoose.connect('mongodb+srv://mymoney-app:123mudar@cluster-leandro-coxda.mongodb.net/mymoney-ap?retryWrites=true&w=majority', 
  {useNewUrlParser: true, useUnifiedTopology: true});