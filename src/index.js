import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Playlist from "./pages/Playlist/Playlist";
import PlaylistElements from "./pages/Playlist/PlaylistElements/PlaylistElements";
import AuthContextProvider from "./utils/Context/AuthContext";

import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/playlist",
        element: <Playlist />,
        children: [
            {
                path: "/playlist/:id",
                element: <PlaylistElements />
            }
        ]
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
        <RouterProvider router={router} />
    </AuthContextProvider>
);