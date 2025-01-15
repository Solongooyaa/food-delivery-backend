import { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-category";

export const foodOrderRouter = Router();

foodOrderRouter.get("/", async (req: Request, res: Response) => {
  const item = await FoodOrderModel.find();
  res.json(item);
});

foodOrderRouter.put("/:id", async (req: Request, res: Response) => {
  const updatedItem = await FoodOrderModel.findByIdAndUpdate(
    req.params.id,
    {
      food: req.body.food,
    },
    { new: true }
  );
  res.json(updatedItem);
});
