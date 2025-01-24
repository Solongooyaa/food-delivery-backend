import { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-category";

export const foodOrderRouter = Router();

foodOrderRouter.get("/", async (req: Request, res: Response) => {
  const item = await FoodOrderModel.find();
  res.json(item);
});

foodOrderRouter.post("/", auth, async (req: Request, res: Response) => {
  const user = req?.userId;
  const { foodOrderItems, totalPrice } = req.body;

  const order = { user, foodOrderItems, totalPrice };

  const newOrder = await FoodOrderModel.create(order);
  res.json(newOrder);
});

foodOrderRouter.get("/:id", async (req: Request, res: Response) => {
  //Create Food Category
  const id = req.params.id;
  const item = await FoodOrderModel.findById(id);
  res.json(item);
});

foodOrderRouter.patch("/:id", async (req: Request, res: Response) => {
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
