const router = require("express").Router();
import { find, findById, add, edit, remove } from "./timeSlots-model.js";
import { validateItemId, validatePostReqBody } from "../api/middleware.js";

router.get("/", (req, res) => {
  find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving the items." });
      console.log(err);
    });
});

router.get("/:id", validateItemId, (req, res) => {
  const id = req.params.id;
  findById(id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving the item." });
      console.log(err);
    });
});

router.post("/", validatePostReqBody, (req, res) => {
  const item = req.body;
  add(item)
    .then((id) => {
      [newItemId] = id;
      return findById(newItemId);
    })
    .then((item) => {
      res.status(201).json({ message: "Successfully added the item.", item });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding the item." });
    });
});

router.put("/:id", validateItemId, (req, res) => {
  const id = req.params.id;
  const updated = req.body;
  edit(id, updated)
    .then((updatedItemId) => {
      return findById(updatedItemId);
    })
    .then((updated) => {
      res.status(201).json(updated);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating the item." });
    });
});

router.delete("/:id", validateItemId, (req, res) => {
  const id = req.params.id;
  remove(id)
    .then((deleted) => {
      res.status(200).json({ message: "Successfully removed the item." });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error removing the item." });
    });
});

export default router;
