import { db } from "../db.js";

export const getAllMotivos = (req, res) => {
    const q = "SELECT * FROM motivos INNER JOIN motivos_user ON motivos.id = motivos_user.id_motivos WHERE motivos_user.`id_vicio_user` = ? ";

    db.query(q, [req.params.id_vicio_user], (err, data) => {
        if (err) return res.json(err);
    
        return res.status(200).json(data);
      });
};

export const getMotivos = (req, res) => {
    const q = "SELECT * FROM motivos INNER JOIN motivos_user ON motivos.id = motivos_user.id_motivos WHERE motivos_user.`id_vicio_user` = ? AND motivos_user.`id_motivos` = ?";

    const values = [
        req.body.id_motivos,
    ];
  
    db.query(q, [req.params.id_vicio_user, ...values], (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };

export const addMotivos = (req, res) => {
    const q =
      "INSERT INTO motivos(`texto`) VALUES(?); SET @last_id_motivos = LAST_INSERT_ID(); INSERT INTO motivos_user (`id_vicio_user`, id_motivos) VALUES (?,@last_id_motivos)";
  
    const values = [
      req.body.texto
    ];
  
    db.query(q, [values, req.params.id_vicio_user], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Motivo registrado com sucesso.");
    });
  };
  
  export const updateMotivos = (req, res) => {
    const q =
      "UPDATE motivos SET `texto` = ? WHERE `id` = ?";
  
    const values = [
      req.body.texto,
      req.body.id
    ];
  
    db.query(q, [...values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Motivo atualizado com sucesso.");
    });
  };
  
  export const deleteMotivos = (req, res) => {
    const q = "DELETE FROM motivos WHERE `id` = ?";

    const values = [
      req.body.id
    ];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Motivo do usuário deletada com sucesso.");
    });
  };