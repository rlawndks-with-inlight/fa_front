import Home from '../pages/User/Home';

import Search from '../pages/User/Search';
import MasterList from '../pages/User/MasterList';

import AppSetting from '../pages/User/AppSetting';

import Login from '../pages/User/Auth/Login';
import MyPage from '../pages/User/Auth/MyPage';
import EditMyInfo from '../pages/User/Auth/EditMyInfo';
import FindMyInfo from '../pages/User/Auth/FindMyInfo';
import SignUp from '../pages/User/Auth/SignUp';
import Resign from '../pages/User/Auth/Resign';
import KakaoRedirectHandler from '../pages/User/Auth/KakaoRedirectHandler';

import NoticeList from '../pages/User/Notice/NoticeList';
import Master from '../pages/User/Master/Master';

import Post from '../pages/User/Posts/Post';

import Policy from '../pages/User/Policy/Policy';

import MLogin from '../pages/Manager/MLogin';
import MUserEdit from '../pages/Manager/MUserEdit';
import MIssueCategoryEdit from '../pages/Manager/MIssueCategoryEdit';
import MFeatureCategoryEdit from '../pages/Manager/MFeatureCategoryEdit';
import MVideoEdit from '../pages/Manager/MVideoEdit';
import MSettingEdit from '../pages/Manager/MSettingEdit';

import MItemEdit from '../pages/Manager/MItemEdit';
import MItemList from '../pages/Manager/MItemList';
import Notice from '../pages/User/Notice/Notice';
import MAlarmEdit from '../pages/Manager/MAlarmEdit';
import MAcademyEdit from '../pages/Manager/MAcademyEdit';
import EnrolmentList from '../pages/User/EnrolmentList';
import AcademyList from '../pages/User/AcademyList';
import Academy from '../pages/User/Academy/Academy';
import ReviewList from '../pages/User/ReviewList';
import ServiceCenter from '../pages/User/ServiceCenter';
import EventList from '../pages/User/EventList';
import Request from '../pages/User/Auth/Request';
import MyAcademy from '../pages/User/Academy/MyAcademy';
import AuthPay from '../pages/User/Pay/AuthPay';
import AddReview from '../pages/User/Auth/AddReview';
import KeyRecieve from '../pages/User/Pay/KeyRecieve';
import PayReady from '../pages/User/Pay/PayReady';
import PayResult from '../pages/User/Pay/PayResult';
import MSubscribeEdit from '../pages/Manager/MSubscribeEdit';
import MPayEdit from '../pages/Manager/MPayEdit';
import MPayCancelEdit from '../pages/Manager/MPayCancelEdit';
import AuthPayV2 from '../pages/User/Pay/AuthPay-v2';
import MPayExcelEdit from '../pages/Manager/MPayExcelEdit';

const zManagerRoute = [
    { link: '/manager', element: <MLogin />, title: "??????????????????" },
    { link: '/manager/login', element: <MLogin />, title: "??????????????????" },
    { link: '/manager/edit/user/:pk', element: <MUserEdit />, title: "????????????" },
    { link: '/manager/edit/video/:pk', element: <MVideoEdit />, title: "?????????????????????" },
    { link: '/manager/edit/alarm/:pk', element: <MAlarmEdit />, title: "????????????" },
    { link: '/manager/edit/academy/:pk', element: <MAcademyEdit />, title: "????????????" },
    { link: '/manager/edit/subscribe/:pk', element: <MSubscribeEdit />, title: "?????? ?????? ??????" },
    { link: '/manager/edit/pay_edit/:pk', element: <MPayEdit />, title: "?????? ?????? ??????" },
    { link: '/manager/edit/pay_cancel/:pk', element: <MPayCancelEdit />, title: "?????? ?????? ?????? ??????" },
    { link: '/manager/edit/issue_category/:pk', element: <MIssueCategoryEdit />, title: "??????????????????????????????" },
    { link: '/manager/edit/feature_category/:pk', element: <MFeatureCategoryEdit />, title: "???????????????????????????" },
    { link: '/manager/edit/setting', element: <MSettingEdit />, title: "????????????" },
    { link: '/manager/edit/pay_excel', element: <MPayExcelEdit />, title: "" },
    
    { link: '/manager/edit/:table/:pk', element: <MItemEdit />, title: "" },
    { link: '/manager/list/:table/:pk', element: <MItemList />, title: "" },
    { link: '/manager/list/:table', element: <MItemList />, title: "" },
];
const zUserRoute = [
    { link: '/', element: <Home />, title: "???" },
    { link: '/home', element: <Home />, title: "???" },
    { link: '/search', element: <Search />, title: "??????" },
    { link: '/enrolmentlist', element: <EnrolmentList />, title: "????????????" },
    { link: '/academylist', element: <AcademyList />, title: "?????????" },
    { link: '/academy/:pk', element: <Academy />, title: "?????????" },
    { link: '/myacademy/:pk', element: <MyAcademy />, title: "?????????" },
    { link: '/reviewlist', element: <ReviewList />, title: "????????????" },
    { link: '/servicecenter', element: <ServiceCenter />, title: "????????????" },
    { link: '/servicecenter/:type_num', element: <ServiceCenter />, title: "????????????" },
    { link: '/eventlist', element: <EventList />, title: "?????????" },
    { link: '/masterlist', element: <MasterList />, title: "?????????" },
    { link: '/master/:pk', element: <Master />, title: "?????????" },
    { link: '/post/:table/:pk', element: <Post />, title: "?????????" },

    //{ link: '/payready/:pk', element: <PayReady />, title: "????????????" },
    //{ link: '/authpay/:pk', element: <AuthPay />, title: "??????" },
    //{ link: '/authpay', element: <AuthPay />, title: "??????" },
    //{ link: '/authpay-v2/:pk', element: <AuthPayV2 />, title: "?????? v2" },
    { link: '/payresult/:class_pk/:status', element: <PayResult />, title: "" },
   // { link: '/keyrecieve', element: <KeyRecieve />, title: "??????" },

    { link: '/appsetting', element: <AppSetting />, title: "??? ??????" },

    // { link: '/selectissuecategory', element: <SelectIssueCategory />, title: "????????????" },
    // { link: '/selectfeaturecategory', element: <SelectFeatureCategory />, title: "?????????" },
    // { link: '/themelist', element: <ThemeList />, title: "????????????" },
    // { link: '/videolist', element: <VideoList />, title: "???????????????" },
    // { link: '/issuelist/:pk', element: <IssueList />, title: "????????????" },
    // { link: '/featurelist/:pk', element: <FeatureList />, title: "?????????" },
    // { link: '/onewordlist', element: <OneWordList />, title: "??????1??????" },
    // { link: '/oneeventlist', element: <OneEventList />, title: "??????1??????" },
    // { link: '/noticelist', element: <NoticeList />, title: "????????????" },

    { link: '/login', element: <Login />, title: "?????????" },
    { link: '/mypage', element: <MyPage />, title: "???????????????" },
    { link: '/editmyinfo', element: <EditMyInfo />, title: "????????????" },
    { link: '/findmyinfo', element: <FindMyInfo />, title: "?????????/???????????? ??????" },
    { link: '/signup', element: <SignUp />, title: "????????????" },
    { link: '/resign', element: <Resign />, title: "????????????" },
    { link: '/request', element: <Request />, title: "????????????" },
    { link: '/addreview', element: <AddReview />, title: "????????????" },
    { link: '/request/:pk', element: <Request />, title: "????????????" },
    { link: '/oauth/callback/kakao', element: <KakaoRedirectHandler />, title: "" },

    // { link: '/post/notice/:pk', element: <Notice />, title: "????????????" },
    // { link: '/video/:pk', element: <Video />, title: "???????????????" },

    { link: '/policy/:pk', element: <Policy />, title: "" },
];
let str = "";
for(var i = 0;i<zUserRoute.length;i++){
    str += `<`
}
export { zUserRoute, zManagerRoute }