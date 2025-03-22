import express from 'express';

type Request = express.Request;
type Response = express.Response;
import connection from '../db.ts';

export const getAll = (req: Request, res: Response) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
};

export const insertar = (req: Request, res: Response) => {
    const {nombre,descripcion,precio,categoria} = req.body;
    
    connection.query('Insert into productos(nombre,descripcion,precio,categoria) values (?, ?, ?, ?);',
        [nombre, descripcion, precio, categoria], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
};
export const modificar = (req: Request, res: Response) => {
    const { id } = req.params; 
    const { nombre, descripcion, precio, categoria } = req.body;

    connection.query(
        "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria = ? WHERE id = ?",
        [nombre, descripcion, precio, categoria, id],
        (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: "Producto actualizado correctamente", results });
        }
    );
};

// Eliminar un producto
export const eliminar = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query(
        "DELETE FROM productos WHERE id = ?",
        [id],
        (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: "Producto eliminado correctamente", results });
        }
    );
};