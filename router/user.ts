import { Request, Response, Router } from "express";
import { UserModel } from "../models/food-category";

export const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
  const item = await UserModel.find();
  res.json(item);
});

userRouter.post("/", async (req: Request, res: Response) => {
  const newItem = await UserModel.create({
    foodName: req.body.foodName,
  });
  res.json(newItem);
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  //Create Food Category
  const id = req.params.id;
  const item = await UserModel.findById(id);
  res.json(item);
});

userRouter.put("/:id", async (req: Request, res: Response) => {
  const updatedItem = await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      user: req.body.user,
      totalPrice: req.body.totalPrice,
    },
    { new: true }
  );
  res.json(updatedItem);
});
userRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedItem = await UserModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
});
