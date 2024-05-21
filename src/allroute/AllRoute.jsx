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
import Faq from '../page/Faq'
import PrivacyPolicy from '../page/PrivacyPolicy'
import TermConditions from '../page/TermsCondition'
import DisconnectionPolicy from '../page/DisconnectionPolicy'
import Responsible from '../page/Responsible'
import InfoAndPayment from '../page/InfoAndPayment';
import Account from '../page/Account'
import MobileLeftSideBar from '../modal/MobileLeftSideBar'
import Deposit from '../page/Deposit'
import Upi from '../component/deposit-component/Upi'
import Usdt from '../component/deposit-component/Usdt'
import InfoMobileHeader from '../component/InfoMobileHeader'
import ChangePassword from '../component/All-Page-Tabs/Account-component/ChangePassword'
import ContactUs from '../page/ContactUs'
import Ambassador from '../page/Ambassador'
import Sport9Wicket from '../component/sport/Sport9Wicket'
import Wallet from '../page/Wallet';
import Inbox from '../page/Inbox';
import  BankAccountForm from '../page/BankAccountForm' 
import WithDraw from '../page/WithDraw'
import Records from '../page/Records'


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
      <Route path="faq"  element={<Faq/>}/>
      <Route path="PrivacyPolicy"  element={<PrivacyPolicy/>}/>
      <Route path="terms-and-conditions"  element={<TermConditions/>}/>
      <Route path="Disconnection-Policy"  element={<DisconnectionPolicy/>}/>
      <Route path="Responsible-Gambling"  element={<Responsible/>}/>
      <Route path="InfoAndPayment"  element={<InfoAndPayment/>}/>
      <Route path="Account"  element={<Account/>}/>
      <Route path="ChangePassword"  element={<ChangePassword/>}/>
      <Route path="MobileLeftSideBar"  element={<MobileLeftSideBar/>}/>
      <Route path="Deposit"  element={<Deposit/>}/>
      <Route path="upi"  element={<Upi/>}/>
      <Route path="usdt"  element={<Usdt/>}/>
      <Route path="InfoMobileHeader"  element={<InfoMobileHeader/>}/>
      <Route path="contact-us"  element={<ContactUs/>}/>
      <Route path="Brand-Ambassador"  element={<Ambassador/>}/>
      <Route path="Wallet"  element={<Wallet/>}/>
      <Route path="Inbox"  element={<Inbox/>}/>
      <Route path="Bank"  element={<BankAccountForm/>}/>
      <Route path="WithDraw"  element={<WithDraw/>}/>
      <Route path="Records"  element={<Records/>}/>

      {/* Sport page Routing */}
      <Route path="9wickets"  element={<Sport9Wicket/>}/>
      {/* Sport page Routing */}
    </Routes>
  )
}

export default AllRoute