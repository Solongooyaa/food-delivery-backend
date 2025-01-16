import { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-category";

export const foodOrderRouter = Router();

foodOrderRouter.get("/", async (req: Request, res: Response) => {
  const item = await FoodOrderModel.find();
  res.json(item);
});

foodOrderRouter.post("/", async (req: Request, res: Response) => {
  const newItem = await FoodOrderModel.create({
    foodName: req.body.foodName,
  });
  res.json(newItem);
});

foodOrderRouter.get("/:id", async (req: Request, res: Response) => {
  //Create Food Category
  const id = req.params.id;
  const item = await FoodOrderModel.findById(id);
  res.json(item);
});

foodOrderRouter.put("/:id", async (req: Request, res: Response) => {
  const updatedItem = await FoodOrderModel.findByIdAndUpdate(
    req.params.id,
    {
      user: req.body.user,
      totalPrice: req.body.totalPrice,
    },
    { new: true }
  );
  res.json(updatedItem);
});
foodOrderRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedItem = await FoodOrderModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
});
