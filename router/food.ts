import { Request, Response, Router } from "express";
import { FoodModel } from "../models/food";

export const foodRouter = Router();

foodRouter.get("/", async (req: Request, res: Response) => {
  const categoryId = req.query.categoryId as string;

  if (categoryId) {
    try {
      const categoryFoods = await FoodModel.find({
        category: categoryId,
      });
      res.json(categoryFoods);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    const allFoods = await FoodModel.find();
    res.json(allFoods);
  }
});

foodRouter.post("/", async (req: Request, res: Response) => {
  const { category, foodName, image, price, ingredients } = req.body;
  const newFood = await FoodModel.create({
    category,
    foodName,
    image,
    price,
    ingredients,
  });
  res.json(newFood);
});

foodRouter.get("/food/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const oneFood = await FoodModel.findById(id);
  res.json(oneFood);
});

foodRouter.put("/:id", async (req: Request, res: Response) => {
  const updatedFood = await FoodModel.findByIdAndUpdate(req.params.id, {
    foodName: req.body.foodName,
    category: req.body.category,
    price: req.body.price,
    ingredients: req.body.ingredients,
  });
  res.json(updatedFood);
});

foodRouter.delete("/:id", async (req: Request, res: Response) => {
  const deletedFood = await FoodModel.findByIdAndDelete(req.params.id, {
    foodName: req.body.foodName,
    category: req.body.category,
    price: req.body.price,
    ingredients: req.body.ingredients,
  });
  res.json(deletedFood);
});
