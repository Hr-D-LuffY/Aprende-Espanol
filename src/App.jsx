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
import A1Page from "./pages/A1Page.jsx";
import NumbersPage from "./pages/NumbersPage.jsx";
import NounGenderPage from "./pages/NounGenderPage.jsx";
import ArticlesPage from "./pages/Article.jsx";
import SingularPluralPage from "./pages/SingularPlural.jsx";
import AdjectivePage from "./pages/AdjectivePage.jsx";
import PronounsPage from "./pages/Pronoun.jsx";
import DemonstrativePage from "./pages/Demonstrativepage.jsx";
import QuestionWordsPage from "./pages/Questionwordspage.jsx";
import SentenceStructurePage from "./pages/SentenceStructurepage.jsx";
import PossessiveAdjPage from "./pages/PossesiveAdj.jsx";

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

			{/* redirect default */}
			<Route path="/grammar" element={<Navigate to="/a1/grammar" />} />

			{/* A1 & its section Page */}
			<Route path="a1">
				<Route index element={<A1Page />} />
				<Route path="alphabet" element={<AlphabetPage />} />
				<Route path="pronunciation" element={<PronunciationPage />} />
				<Route path="numbers" element={<NumbersPage />} />
				<Route path="grammar">
					<Route index element={<GrammarPage level="A1" />} />
					<Route path="noun-gender" element={<NounGenderPage />} />
					<Route path="pronouns" element={<PronounsPage />} />
					<Route path="article" element={<ArticlesPage />} />
					<Route path="singular-plural" element={<SingularPluralPage />} />
					<Route path="adjective" element={<AdjectivePage />} />
					<Route path="demonstrative" element={<DemonstrativePage />} />
					<Route path="question-words" element={<QuestionWordsPage />} />
					<Route
						path="sentence-structure"
						element={<SentenceStructurePage />}
					/>
					<Route path="possessive-adjectives" element={<PossessiveAdjPage />} />
				</Route>
			</Route>
		</Routes>
		<FootBar />
	</BrowserRouter>
);

export default App;
