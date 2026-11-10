function validarDados(req, res, next) {
    const dados = req.body || {};
    const colunas = [
        "descricao",
        "data_entrada",
        "data_saida",
        "valor_aluguel",
        "valor_iptu",
        "valor_condominio",
        "imovel_id",
        "locatario_id"
    ];

    const campoAusentes = colunas.filter(
        (campo) => !(campo in dados) || dados[campo] === ""
    );

    if (campoAusentes.length > 0) {
        return res.status(400).json(
            campoAusentes.map((campo) => ({
                type: "warning",
                description: `Coluna ${campo} não informada`
            }))
        );
    }

    next();
}

module.exports = {
    validarDados
}