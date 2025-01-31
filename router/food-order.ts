import { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-order";
import { error } from "console";
// import { auth, CustomRequest, isAdmin } from "../middleware/auth";

export const foodOrderRouter = Router();

foodOrderRouter.get("/orders", async (req: Request, res: Response) => {
  try {
    const allOrders = await FoodOrderModel.find({});
    res.json(allOrders);
  } catch (error) {
    res.send(error);
  }
});

foodOrderRouter.post("/", async (req: Request, res: Response) => {
  // const user = req?.userId;
  // const { foodOrderItems, totalPrice, address } = req.body;
  // const order = { user, foodOrderItems: , totalPrice, address};
  // const newOrder = await FoodOrderModel.create(order);

  const newOrder = await FoodOrderModel.create();
  res.json(newOrder);
  //order
});

foodOrderRouter.get("/my-order", async (req: Request, res: Response) => {
  try {
    // const user = req?.userId;
    const myOrders = await FoodOrderModel.find({
      // user: user,
    });

    res.json(myOrders);
  } catch (error) {
    res.send(error);
  }
});

foodOrderRouter.put("/:orderId", async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const allOrders = await FoodOrderModel.findByIdAndUpdate(
      req.params.orderId,
      {
        status,
      },
      { new: true }
    );
    res.json(allOrders);
  } catch (error) {
    res.send(error);
  }
});
foodOrderRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedFoodOrder = await FoodOrderModel.findByIdAndDelete(
    req.params.id
  );
  res.json(deletedFoodOrder);
});
