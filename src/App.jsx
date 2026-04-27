import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

//landing

import LandingPage from "./pages/LandingPage.jsx";
import Navbar from "./components/NavBar.jsx";
import FootBar from "./components/FootBar.jsx";
import AlphabetPage from "./pages/Alphabet.jsx";
import PronunciationPage from "./pages/Pronunciation.jsx";
import GrammarPage from "./pages/GrammarPage.jsx";

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
			<Route path="/pronunciation" element={<PronunciationPage />} />
			<Route path="/grammar" element={<GrammarPage />} />
		</Routes>
		<FootBar />
	</BrowserRouter>
);

export default App;
