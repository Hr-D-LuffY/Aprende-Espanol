import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

//landing

import LandingPage from "./pages/LandingPage.jsx";
import Navbar from "./components/NavBar.jsx";
import FootBar from "./components/FootBar.jsx";
import AlphabetPage from "./pages/Alphabet.jsx";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

const App = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			{/* Public landing page */}
			<Route path="/" element={<LandingPage />} />
			<Route path="/alphabet" element={<AlphabetPage />} />
		</Routes>
		<FootBar />
	</BrowserRouter>
);

export default App;
