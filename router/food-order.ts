import { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-order";
import { auth, CustomRequest, isAdmin } from "../middleware/auth";

export const foodOrderRouter = Router();

foodOrderRouter.get(
  "/",
  auth,
  isAdmin,
  async (req: CustomRequest, res: Response) => {
    const allFoodOrder = await FoodOrderModel.find({});
    res.json(allFoodOrder);
  }
);

foodOrderRouter.post("/", async (req: Request, res: Response) => {
  // const user = req?.userId;
  // const { foodOrderItems, totalPrice } = req.body;
  // const order = { user: "dfg", foodOrderItems: , totalPrice: };
  // const newOrder = await FoodOrderModel.create(order);

  const newFoodOrder = await FoodOrderModel.create({
    foodName: req.body.foodName,
  });
  res.json(newFoodOrder);
});

foodOrderRouter.get("/my-order", auth, async (req: Request, res: Response) => {
  try {
    const user = req.userId;
    const myOrders = await FoodOrderModel.find({
      user: user,
    });

    res.json(myOrders);
  } catch (error) {
    res.send(error);
  }
});

foodOrderRouter.put("/orders/:id", async (req: Request, res: Response) => {
  const updatedFoodOrder = await FoodOrderModel.findByIdAndUpdate(
    req.params.id,
    {
      user: req.body.user,
      totalPrice: req.body.totalPrice,
    },
    { new: true }
  );
  res.json(updatedFoodOrder);
});
foodOrderRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedFoodOrder = await FoodOrderModel.findByIdAndDelete(
    req.params.id
  );
  res.json(deletedFoodOrder);
});
