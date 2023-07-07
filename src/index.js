import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App';
import Playlist from "./pages/Playlist/Playlist";
import PlaylistElements from "./pages/Playlist/PlaylistElements/PlaylistElements";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
    <RouterProvider router={router} />
);