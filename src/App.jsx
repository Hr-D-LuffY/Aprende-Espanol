import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext.jsx";

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
import TimePage from "./pages/A1Pages/Usage/TimePage.jsx";
import DaysMonthsPage from "./pages/A1Pages/Usage/DaysMonthPage.jsx";
import VocabPage from "./pages/VocabPage.jsx";
import RegularVerbsPage from "./pages/A1Pages/Grammar/RegularVerbPage.jsx";
import IrregularVerbsPage from "./pages/A1Pages/Grammar/IrregularVerbPage.jsx";
import LocationPage from "./pages/A1Pages/Usage/LocationPage.jsx";
import DailyPhrasesPage from "./pages/PharasesPage.jsx";

export const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

const App = () => (
	<ThemeProvider>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/vocabulary" element={<VocabPage />} />
				<Route path="/grammar" element={<Navigate to="/a1/grammar" />} />
				<Route path="/phrases" element={<DailyPhrasesPage />} />
				<Route path="a1">
					<Route index element={<A1Page />} />
					<Route path="alphabet" element={<AlphabetPage />} />
					<Route path="pronunciation" element={<PronunciationPage />} />
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
						<Route
							path="possessive-adjectives"
							element={<PossessiveAdjPage />}
						/>
						<Route path="ser" element={<SerPage />} />
						<Route path="estar" element={<EstarPage />} />
						<Route path="tener" element={<TenerPage />} />
						<Route path="gustar" element={<GustarPage />} />
						<Route path="negation" element={<NegationPage />} />
						<Route path="contraction" element={<ContractionPage />} />
						<Route path="prepositions" element={<PrepositionPage />} />
						<Route path="regular-verbs" element={<RegularVerbsPage />} />
						<Route path="irregular-verbs" element={<IrregularVerbsPage />} />
					</Route>
					<Route path="usage">
						<Route path="numbers" element={<NumbersPage />} />
						<Route path="time" element={<TimePage />} />
						<Route path="days-months" element={<DaysMonthsPage />} />
						<Route path="location" element={<LocationPage />} />
					</Route>
				</Route>
			</Routes>
			<FootBar />
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
