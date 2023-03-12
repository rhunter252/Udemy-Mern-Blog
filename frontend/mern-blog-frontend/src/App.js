import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewCategory from "./components/Categories/AddNewCategory";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navigation/Navbar";
import Login from "./components/Users/Login/Login";
import Register from "./components/Users/Register/Register";
import CategoryList from "./components/Categories/CategoryList";
import UpdateCategory from "./components/Categories/UpdateCategory";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
import AdminRoute from "./components/Navigation/ProtectedRoutes/AdminRoute";
import CreatePost from "./components/Posts/CreatePost";
import PostsList from "./components/Posts/PostsList";
import PostDetails from "./components/Posts/PostDetails";
import UpdatePost from "./components/Posts/UpdatePost";
import UpdateComment from "./components/Comments/UpdateComment";
import Profile from "./components/Users/Profile/Profile";
import UploadProfilePhoto from "./components/Users/Profile/UploadProfilePhoto";
import UpdateProfileForm from "./components/Users/Profile/UpdateProfileForm";
import SendEmail from "./components/Users/Emailing/SendEmail";
import AccountVerified from "./components/Users/AccountVerification/AccountVerified";
import UsersList from "./components/Users/UsersList/UsersList";
import UpdatePassword from "./components/Users/PasswordManagement/UpdatePassword";
import ResetPasswordForm from "./components/Users/PasswordManagement/ResetPasswordForm";
import ResetPassword from "./components/Users/PasswordManagement/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/update-category/:id"
          element={
            <AdminRoute>
              <UpdateCategory />
            </AdminRoute>
          }
        />
        <Route path="/password-reset-token" element={<ResetPasswordForm />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/users"
          element={
            <AdminRoute>
              <UsersList />
            </AdminRoute>
          }
        />
        <Route
          path="/upload-profile-photo"
          element={
            <PrivateProtectRoute>
              <UploadProfilePhoto />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/update-password"
          element={
            <PrivateProtectRoute>
              <UpdatePassword />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/verify-account/:token"
          element={
            <PrivateProtectRoute>
              <AccountVerified />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/send-mail"
          element={
            <PrivateProtectRoute>
              <SendEmail />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/update-profile/:id"
          element={
            <PrivateProtectRoute>
              <UpdateProfileForm />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/update-post/:id"
          element={
            <PrivateProtectRoute>
              <UpdatePost />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <PrivateProtectRoute>
              <Profile />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/create-post"
          element={
            <PrivateProtectRoute>
              <CreatePost />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/update-comment/:id"
          element={
            <PrivateProtectRoute>
              <UpdateComment />
            </PrivateProtectRoute>
          }
        />
        <Route
          path="/add-category"
          element={
            <AdminRoute>
              <AddNewCategory />
            </AdminRoute>
          }
        />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route
          path="/category-list"
          element={
            <AdminRoute>
              <CategoryList />
            </AdminRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
