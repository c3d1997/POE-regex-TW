// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Maps from './components/MapsController.js/Maps';
import Items from './components/ItemController/Items';
import Exchange from './components/ExchangeController/Exchange';
import './style/global.css';

const App = () => (
	<Router>
		<div className="container">
			<div className="sidebar">
				<h2>POE regex TW</h2>
				<ul>
					<li><Link to="/maps">地圖詞綴</Link></li>
					<li><Link to="/items">物品詞綴</Link></li>
					<li><Link to="/exchange">神聖混沌即時比值</Link></li>
				</ul>
			</div>
			<div className="main">
				<Routes>
					<Route path="/maps" element={<Maps/>}/>
					<Route path="/items" element={<Items/>}/>
					<Route path="/exchange" element={<Exchange/>}/>
					<Route exact path="/" element={<Home/>}/>
				</Routes>
			</div>
		</div>
	</Router>
);

const Home = () => (
	<div>
		<h2>歡迎使用 POE regex TW</h2>
		<p>請選擇左側功能開始使用。</p>
	</div>
);

export default App;
