import React from 'react'
import Home from '../page/Home'
import SpinAndWin from '../page/SpinAndWin'
import { Route, Routes } from 'react-router-dom'
import RewardPoints from '../page/RewardPoints'
import TopGames from '../page/TopGames'
import Recommended from '../page/Recommended'
import Sport from '../page/Sport'
import MegaWin from '../page/MegaWin'
 import VipPage from '../page/VipPage'
 import Casino from '../page/Casino'
 import Crash from '../page/Crash'
import Bingo from '../page/Bingo'
import Slots from '../page/Slots'
import Fishing from '../page/Fishing'
import Table from '../page/Table'
import Arcade from '../page/Arcade'
import Lottery from '../page/Lottery'
import CockFight from '../page/CockFight'
import Racing from '../page/Racing'
import Promotion from '../page/Promotion'
import AffiliateProgram from '../page/AffiliateProgram'


const AllRoute = () => {
  return (
  
    <Routes >
      <Route path="/"  element={<Home/>}/>
      <Route path="spin-and-win"  element={<SpinAndWin/>}/>
      <Route path="Reward-Points"  element={<RewardPoints/>}/>
      <Route path="Top-Games"  element={<TopGames/>}/>
      <Route path="Recommended"  element={<Recommended/>}/>
      <Route path="Sports"  element={<Sport/>}/>
      <Route path="Mega-Win"  element={<MegaWin/>}/>
      <Route path="vip-page"  element={<VipPage/>}/>
      <Route path="casino"  element={<Casino/>}/>
      <Route path="crash"  element={<Crash/>}/>
      <Route path="Bingo"  element={<Bingo/>}/>
      <Route path="Slots"  element={<Slots/>}/>
      <Route path="fishing"  element={<Fishing/>}/>
      <Route path="Table"  element={<Table/>}/>
      <Route path="Arcade"  element={<Arcade/>}/>
      <Route path="Lottery"  element={<Lottery/>}/>
      <Route path="Cock-fight"  element={<CockFight/>}/>
      <Route path="Racing"  element={<Racing/>}/>
      <Route path="Promotion"  element={<Promotion/>}/>
      <Route path="VIP"  element={<VipPage/>}/>
      <Route path="AffiliateProgram"  element={<AffiliateProgram/>}/>
    </Routes>
  )
}

export default AllRoute