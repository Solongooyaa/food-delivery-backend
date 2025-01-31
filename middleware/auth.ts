export type CustomRequest = Request & {
  userId: string;
  role: string;
};

export const auth = async (req: Request, res: Response, next: () => void) => {
  const token = req.get("authentication");

  try {
    const verified = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });
    const userId = verified?.sub;
    const role = verified.metadata.role;
    req.userId = userId;
    next();
  } catch {
    res.sendStatus(401);
  }
};

function verifyToken(token: any, arg1: { secretKey: string | undefined }) {
  throw new Error("Function not implemented.");
}

export const isAdmin = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  if (req.role !== "admin") {
    res.sendStatus(403);
    return;
  }
  next();
};
