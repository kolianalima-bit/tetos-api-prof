const { buscar, criar, editar, deletar } = require("../controllers/historicoImovelController");
const { validarDados } = require("../middlewares/historicoimovelMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /* 
    #swagger.tags = ['historico_imovel']
    #swagger.summary = 'Buscar'
    #swagger.description = 'Retorna um array de históricos de imóveis cadastrados'
    #swagger.responses[200] = {
        description: 'Lista de histórico de imóveis retornada com sucesso',
        schema: [{ 
            id: 1,
            descricao: 'troca de torneira',
            data_entrada: '2026-11-10',
            data_saida: '2026-11-30',
            valor_aluguel: 700,
            valor_iptu: 800,
            valor_condominio: 300,
            imovel_id: 'cccc-123-12asda',
            locatario_id: 'bbbb-456-78efg',
            createdAt: '2026-11-09T00:00:00.000Z',
            updatedAt: '2026-11-09T00:00:00.000Z'
        }]
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    buscar);

rotas.post("/",
    /* 
    #swagger.tags = ['historico_imovel']
    #swagger.summary = 'Criar'
    #swagger.description = 'Cria um novo histórico de imóvel'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        description: 'Dados para criação do histórico do imóvel',
        schema: {
            $descricao: 'troca de torneira',
            $data_entrada: '2026-11-10',
            $data_saida: '2026-11-30',
            $valor_aluguel: 700,
            $valor_iptu: 800,
            $valor_condominio: 300,
            $imovel_id: 'asdf-qqwer-xcvb',
            $locatario_id: 'bbbb-456-78efg'
        }
    }
    #swagger.responses[201] = {
        description: 'Registro criado com sucesso'
    }
    #swagger.responses[400] = {
        description: 'Dados inválidos ou faltando'
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    validarDados, criar);

rotas.put("/:id",
    /* 
    #swagger.tags = ['historico_imovel']
    #swagger.summary = 'Editar'
    #swagger.description = 'Edita um histórico de imóvel existente pelo ID'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'string',
        description: 'ID do histórico de imóvel'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        description: 'Novos dados do histórico do imóvel',
        schema: {
            $descricao: 'troca de torneira',
            $data_entrada: '2026-11-10',
            $data_saida: '2026-11-30',
            $valor_aluguel: 700,
            $valor_iptu: 800,
            $valor_condominio: 300,
            $imovel_id: 'asdf-qqwer-xcvb',
            $locatario_id: 'bbbb-456-78efg'
        }
    }
    #swagger.responses[200] = {
        description: 'Registro atualizado com sucesso'
    }
    #swagger.responses[400] = {
        description: 'Dados inválidos'
    }
    #swagger.responses[404] = {
        description: 'Registro não encontrado'
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    validarDados, editar);

rotas.delete("/:id",
    /* 
    #swagger.tags = ['historico_imovel']
    #swagger.summary = 'Deletar'
    #swagger.description = 'Remove um histórico de imóvel pelo ID'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'string',
        description: 'ID do histórico de imóvel que será deletado'
    }
    #swagger.responses[204] = {
        description: 'Registro deletado com sucesso'
    }
    #swagger.responses[404] = {
        description: 'Registro não encontrado'
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    deletar);

module.exports = rotas;