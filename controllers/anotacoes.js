import { db } from "../db.js";

export const getAllAnotacoes = (req, res) => {
    const q = "SELECT * FROM anotacoes INNER JOIN anotacoes_user ON anotacoes.id = anotacoes_user.id_anotacoes WHERE anotacoes_user.`id_vicio_user` = ? ";

    db.query(q, [req.params.id_vicio_user], (err, data) => {
        if (err) return res.json(err);
    
        return res.status(200).json(data);
      });
};

export const getAnotacoes = (req, res) => {
    const q = "SELECT * FROM anotacoes INNER JOIN anotacoes_user ON anotacoes.id = anotacoes_user.id_anotacoes WHERE anotacoes_user.`id_vicio_user` = ? AND anotacoes_user.`id_anotacoes` = ?";

    const values = [
        req.body.id_anotacoes,
    ];
  
    db.query(q, [req.params.id_vicio_user, ...values], (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };

export const addAnotacoes = (req, res) => {
    const q =
      "INSERT INTO anotacoes(`texto`,`data_anot`) VALUES(?); SET @last_id_anotacoes = LAST_INSERT_ID(); INSERT INTO anotacoes_user (`id_vicio_user`, id_anotacoes) VALUES (?,@last_id_anotacoes)";
  
    const values = [
      req.body.texto,
      req.body.data_anot
    ];
  
    db.query(q, [values, req.params.id_vicio_user], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Anotacação registrada com sucesso.");
    });
  };
  
  export const updateAnotacoes = (req, res) => {
    const q =
      "UPDATE anotacoes SET `texto` = ?, `data_anot` = ? WHERE `id` = ?";
  
    const values = [
      req.body.texto,
      req.body.data_anot,
      req.body.id
    ];
  
    db.query(q, [...values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Anotacação atualizada com sucesso.");
    });
  };
  
  export const deleteAnotacoes = (req, res) => {
    const q = "DELETE FROM anotacoes WHERE `id` = ?";

    const values = [
      req.body.id
    ];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Anotacação do usuário deletada com sucesso.");
    });
  };