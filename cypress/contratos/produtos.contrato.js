const joi = require('joi')

const produtosSchema = joi.object({
    produtos: joi.array().items({
        nome: joi.string(),
        preco: joi.number(),
        descricao: joi.string(),
        quantidade: joi.number(),
        _id: joi.string()     
    }),
    quantidade: joi.number()
})

export default produtosSchema;