import { db } from "../db.js";

export const getAllViciosUser = (_, res) => {
    const q = "SELECT vicios_do_user.id, vicios_do_user.data_abs, vicios.nome, vicios.icone FROM vicios_do_user INNER JOIN vicios ON vicios_do_user.id_vicio = vicios.id";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const getViciosUser = (req, res) => {
    const q = "SELECT vicios_do_user.id, vicios_do_user.data_abs, vicios.nome, vicios.icone FROM vicios_do_user INNER JOIN vicios ON vicios_do_user.id_vicio = vicios.id WHERE vicios_do_user.`id` = ?";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };

export const addViciosUser = (req, res) => {
    const q =
      "INSERT INTO vicios_do_user(`id_vicio`, `data_abs`) VALUES(?)";
  
    const values = [
      req.body.id_vicio,
      req.body.data_abs,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json({ id: data.insertId });
    });
  };
  
  export const updateViciosUser = (req, res) => {
    const q =
      "UPDATE vicios_do_user SET `data_abs` = ? WHERE vicios_do_user.`id` = ?";
  
    const values = [
      req.body.data_abs,
      req.body.id
    ];
  
    db.query(q, [...values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Data atualizada com sucesso.");
    });
  };
  
  export const deleteViciosUser = (req, res) => {
    const q = "DELETE FROM vicios_do_user WHERE `id` = ?";

    const values = [
      req.body.id
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Vicio do usuÃ¡rio deletado com sucesso.");
    });
  };