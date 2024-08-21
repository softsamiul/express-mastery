import express, { NextFunction, Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;

  console.log(user);

  res.json({
    success: true,
    message: "user created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;

  console.log(course);
  res.json({
    success: true,
    data: course,
  });
});

/*
--- normal get route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World stds!");
});
*/

/*
------params
app.get("/:userId/:subId", (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Hello World stds!");
});
*/

/*
----Query
app.get("/", (req: Request, res: Response) => {
  console.log(req.query);

  res.send({ message: "Succeesfully enpoint hitted!" });
});
*/

/*
// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.body);
  next();
};
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World stds!");
});
*/

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log(some);

    res.json({ msg: "Dummy testing api" });
  } catch (err) {
    next(err);
  }
});

// Post
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.send({ msg: "Hlw World!" });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "someting went wrong",
    });
  }
});

// catch all route not found err
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    sucess: false,
    message: "Route Not Found!",
  });
});

export default app;
