import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import GrammarPage from "./pages/GrammarPage.jsx";
import Navbar from "./components/NavBar.jsx";
import FootBar from "./components/FootBar.jsx";

import A1Page from "./pages/A1Pages/A1Page.jsx";

import AlphabetPage from "./pages/A1Pages/Foundation/Alphabet.jsx";
import PronunciationPage from "./pages/A1Pages/Foundation/Pronunciation.jsx";

import AdjectivePage from "./pages/A1Pages/Grammar/AdjectivePage.jsx";

import NumbersPage from "./pages/A1Pages/Usage/NumbersPage.jsx";
import NounGenderPage from "./pages/A1Pages/Grammar/NounGenderPage.jsx";
import ArticlesPage from "./pages/A1Pages/Grammar/Article.jsx";
import SingularPluralPage from "./pages/A1Pages/Grammar/SingularPlural.jsx";

import PronounsPage from "./pages/A1Pages/Grammar/Pronoun.jsx";
import DemonstrativePage from "./pages/A1Pages/Grammar/Demonstrativepage.jsx";
import QuestionWordsPage from "./pages/A1Pages/Grammar/Questionwordspage.jsx";
import SentenceStructurePage from "./pages/A1Pages/Grammar/SentenceStructurepage.jsx";
import PossessiveAdjPage from "./pages/A1Pages/Grammar/PossesiveAdj.jsx";
import SerPage from "./pages/A1Pages/Grammar/SerPage.jsx";
import EstarPage from "./pages/A1Pages/Grammar/EstarPage.jsx";
import TenerPage from "./pages/A1Pages/Grammar/TenerPage.jsx";
import GustarPage from "./pages/A1Pages/Grammar/GustarPage.jsx";
import NegationPage from "./pages/A1Pages/Grammar/Negation.jsx";
import ContractionPage from "./pages/A1Pages/Grammar/Contractionpage.jsx";
import PrepositionPage from "./pages/A1Pages/Grammar/Prepositionpage.jsx";

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
					<Route path="ser" element={<SerPage />} />
					<Route path="estar" element={<EstarPage />} />
					<Route path="tener" element={<TenerPage />} />
				</Route>
			</Route>
		</Routes>
		<FootBar />
	</BrowserRouter>
);

export default App;
