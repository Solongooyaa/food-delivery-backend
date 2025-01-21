import { Request, Response, Router } from "express";
import { FoodModel } from "../models/food-category";

export const foodRouter = Router();

foodRouter.get("/", async (req: Request, res: Response) => {
  const item = await FoodModel.find();
  res.json(item);
});

foodRouter.post("/", async (req: Request, res: Response) => {
  const { category, foodName, image, price, ingredients } = req.body;
  const newItem = await FoodModel.create({
    category,
    foodName,
    image,
    price,
    ingredients,
  });
  res.json(newItem);
});
foodRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const item = await FoodModel.findById(id);
  res.json(item);
});

foodRouter.put("/:id", async (req: Request, res: Response) => {
  const updatedItem = await FoodModel.findByIdAndUpdate(req.params.id, {
    foodName: req.body.foodName,
    category: req.body.category,
    price: req.body.price,
    ingredients: req.body.ingredients,
  });
  res.json(updatedItem);
});

foodRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedItem = await FoodModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
});
