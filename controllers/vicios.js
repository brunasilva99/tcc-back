import { db } from "../db.js";

export const getAllVicios = (_, res) => {
    const q = "SELECT * FROM vicios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const getVicios = (req, res) => {
    const q = "SELECT * FROM vicios WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Vicio do usuário visualizado com sucesso.");
    });
  };

export const addVicios = (req, res) => {
    const q =
      "INSERT INTO vicios(`nome`, `icone`) VALUES(?)";
  
    const values = [
      req.body.nome,
      req.body.icone,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json({ id: data.insertId });
    });
  };
  
  export const updateVicios = (req, res) => {
    const q =
      "UPDATE vicios SET `nome` = ?, `icone` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.icone
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Icone atualizado com sucesso.");
    });
  };

  export const deleteVicios = (req, res) => {
    const q = "DELETE FROM vicios WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Vicio deletado com sucesso.");
    });
  };
