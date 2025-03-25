import express from "express";
import sqlite3 from "better-sqlite3";

const db = new sqlite3("./db/inventory.db");

const port = 8000;

const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  const products = db.prepare("SELECT id, name, brand, description, image, price, type, sku, slug FROM products").all();
  res.json(products);
});

app.get("/api/products/:slug", (req, res) => {
  const { slug } = req.params;
  const product = db.prepare("SELECT id, name, brand, description, image, price, type, sku, slug FROM products WHERE slug = ?").get(slug);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.post("/api/products", (req, res) => {
  const { name, brand, description, image, price, type, sku, slug } = req.body;
  const insert = db.prepare("INSERT INTO products (name, brand, description, image, price, type, sku, slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
  const result = insert.run(name, brand, description, image, price, type, sku, slug);
  res.json(result);
});

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const deleteStmt = db.prepare("DELETE FROM products WHERE id = ?");
  const result = deleteStmt.run(id);
  if (result.changes > 0) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
