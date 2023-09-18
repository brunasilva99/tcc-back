import { db } from "../db.js";

export const getAllRecaidas = (req, res) => {
    const q = "SELECT * FROM recaidas INNER JOIN recaidas_user ON recaidas.id = recaidas_user.id_recaidas WHERE recaidas_user.`id_vicio_user` = ? ";

    db.query(q, [req.params.id_vicio_user], (err, data) => {
        if (err) return res.json(err);
    
        return res.status(200).json(data);
      });
};

export const getRecaidas = (req, res) => {
    const q = "SELECT * FROM recaidas INNER JOIN recaidas_user ON recaidas.id = recaidas_user.id_recaidas WHERE recaidas_user.`id_vicio_user` = ? AND recaidas_user.`id_recaidas` = ?";

    const values = [
        req.body.id_recaidas,
    ];
  
    db.query(q, [req.params.id_vicio_user, ...values], (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };

export const addRecaidas = (req, res) => {
    const q =
      "INSERT INTO recaidas(`data_rec`) VALUES(?); SET @last_id_recaidas = LAST_INSERT_ID(); INSERT INTO recaidas_user (`id_vicio_user`, id_recaidas) VALUES (?,@last_id_recaidas)";
  
    const values = [
      req.body.data_rec
    ];
  
    db.query(q, [values, req.params.id_vicio_user], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Recaída registrada com sucesso.");
    });
  };
  
  export const updateRecaidas = (req, res) => {
    const q =
      "UPDATE recaidas SET `data_rec` = ? WHERE `id` = ?";
  
    const values = [
      req.body.data_rec,
      req.body.id
    ];
  
    db.query(q, [...values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Recaída atualizada com sucesso.");
    });
  };
  
  export const deleteRecaidas = (req, res) => {
    const q = "DELETE FROM recaidas WHERE recaidas.`id` = ?";

    const values = [
      req.body.id
    ];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Recaída do usuário deletada com sucesso.");
    });
  };