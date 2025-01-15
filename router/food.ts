import { Request, Response, Router } from "express";
import { FoodModel } from "../models/food-category";

export const foodRouter = Router();

foodRouter.get("/", async (req: Request, res: Response) => {
  const item = await FoodModel.find();
  res.json(item);
});

foodRouter.post("/:id", async (req: Request, res: Response) => {
  const updatedItem = await FoodModel.findByIdAndUpdate({
    foodName: req.body.foodName,
    // category: req.body.category
  });
  res.json(updatedItem);
});

foodRouter.put("/:id", async (req: Request, res: Response) => {
  const updatedItem = await FoodModel.findByIdAndUpdate({
    foodName: req.body.foodName,
  });
  res.json(updatedItem);
});

foodRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedItem = await FoodModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
});
