const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const { userRegisterCtrl } = require("./controllers/users/usersCtrl");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
// const postRoute = require("./route/posts/postRoute");
// const commentRoutes = require("./route/comments/commentRoute");
// const emailMsgRoute = require("./route/emailMsg/emailMsgRoute");
// const categoryRoute = require("./route/category/categoryRoute");

const app = express();
//DB
dbConnect();

//Middleware
app.use(express.json());

app.use("/api/users", userRoutes);

// //comment routes
// app.use("/api/comments", commentRoutes);
// //email msg
// app.use("/api/email", emailMsgRoute);
// //category route
// app.use("/api/category", categoryRoute);

//err handler
app.use(notFound);
app.use(errorHandler);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));