import $ from 'jquery';
import albumImg from '../assets/images/icon/albums.svg';
import albumWhiteImg from '../assets/images/icon/albums-white.svg';
import albumActiveImg from '../assets/images/icon/albums-active.svg';
import bulbImg from '../assets/images/icon/bulb.svg';
import bulbWhiteImg from '../assets/images/icon/bulb-white.svg';
import bulbActiveImg from '../assets/images/icon/bulb-active.svg';
import featureImg from '../assets/images/icon/features.svg';
import featureWhiteImg from '../assets/images/icon/features-white.svg';
import featureActiveImg from '../assets/images/icon/features-active.svg';
import talkImg from '../assets/images/icon/talk.svg';
import talkWhiteImg from '../assets/images/icon/talk-white.svg';
import talkActiveImg from '../assets/images/icon/talk-active.svg';
import thumbImg from '../assets/images/icon/thumb.svg';
import thumbWhiteImg from '../assets/images/icon/thumb-white.svg';
import thumbActiveImg from '../assets/images/icon/thumb-active.svg';
import menu5Icon from '../assets/images/icon/speaker.svg';
import menu5IconWhite from '../assets/images/icon/speaker-white.svg';
import menu5IconActive from '../assets/images/icon/speaker-active.svg';
import logo from '../assets/images/test/logo.png'
import defaultImage from '../assets/images/test/default-image.png'
import { EditorState } from "draft-js"
import theme from '../styles/theme';
import axios from 'axios';

const test = true;

//export const frontUrl = "http://localhost:3000";
export const backUrl = "https://purplevery13.cafe24.com:8443";
export const frontUrl = "https://1st-academy.kr";
//export const backUrl = "https://1st-academy.kr:8443";

export const logoSrc = logo;
export const defaultImageSrc = defaultImage;
//http://weare-first.com:8001
export const editorState = {
    editorState: EditorState.createEmpty()
}
export const KAKAO_CLIENT_ID = "5c686a9c9a72a12ef2ef700e07d03b31";
export const KAKAO_REDIRECT_URI = `${frontUrl}/oauth/callback/kakao`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const localization = {
    locale: 'ko',
}
export const zBottomMenu = [
    { name: `???????????????${window.innerWidth>=1000?' ???':''}`, link: '/masterlist', icon: <img src={localStorage.getItem('dark_mode') ? bulbWhiteImg : bulbImg} className='menu-icon' alt="#" />, activeIcon: <img src={bulbActiveImg} className='menu-icon' alt="#" />, className: 'master-dropdown-btn', allowList: ['/masterlist'] },
    { name: '?????????', link: '/academylist', icon: <img src={localStorage.getItem('dark_mode') ? featureWhiteImg : featureImg} className='menu-icon' alt="#" />, activeIcon: <img src={featureActiveImg} className='menu-icon' alt="#" />, className: '', allowList: ['/academylist'] },
    { name: '????????????', link: '/enrolmentlist', icon: <img src={localStorage.getItem('dark_mode') ? albumWhiteImg : albumImg} className='menu-icon' alt="#" />, activeIcon: <img src={albumActiveImg} className='menu-icon' alt="#" />, className: '', allowList: ['/enrolmentlist'] },
    { name: '????????????', link: '/reviewlist', icon: <img src={localStorage.getItem('dark_mode') ? thumbWhiteImg : thumbImg} className='menu-icon' alt="#" />, activeIcon: <img src={thumbActiveImg} className='menu-icon' alt="#" />, className: '', allowList: ['/reviewlist'] },
    { name: '????????????', link: '/servicecenter', icon: <img src={localStorage.getItem('dark_mode') ? talkWhiteImg : talkImg} className='menu-icon' alt="#" />, activeIcon: <img src={talkActiveImg} className='menu-icon' alt="#" />, className: 'service-dropdown-btn', allowList: ['/servicecenter'] },
    { name: '?????????', link: '/eventlist', icon: <img src={localStorage.getItem('dark_mode') ? menu5IconWhite : menu5Icon} className='menu-icon' alt="#" />, activeIcon: <img src={menu5IconActive} className='menu-icon' alt="#" />, className: '', allowList: ['/eventlist'] }
];

export const axiosInstance = axios.create({
    baseURL: `/`,
    timeout: 30000,
});

export const cardDefaultColor = {
    font: "#000",
    background: "#f4f4f4"
}
export const needTwoImage = ['issue', 'theme', 'feature'];

export const objManagerListContent = {
    user: {
        breadcrumb: '??????',
        schema: 'user',
        zColumn: [
            { name: '???????????????', width: '8', type: 'login_type', column: 'type' },
            { name: '?????????', width: '8', type: 'text', column: 'id' },
            { name: '?????????', width: '8', type: 'text', column: 'nickname' },
            { name: '??????', width: '8', type: 'text', column: 'name' },
            { name: '?????????', width: '10', type: 'text', column: 'phone' },
            { name: '??????', width: '8', type: 'level', column: 'user_level' },
            { name: '???????????????', width: '17', type: 'text', column: 'last_login' },
            { name: '?????????', width: '17', type: 'text', column: 'date' },
            { name: '??????', width: '8', type: 'edit', column: 'edit' },
            { name: '??????', width: '8', type: 'delete', column: 'delete' }
        ]
    },
    user_statistics: {
        breadcrumb: '????????????',
        schema: 'user_statistics',
        zColumn: [
            { name: '??????', width: 11, type: 'text', column: 'date' },
            { name: '??????', width: 11, type: 'number', column: 'user_count' },
            { name: '??????', width: 11, type: 'number', column: 'visit_count' },
            { name: '??????', width: 11, type: 'number', column: 'post_count' },
            { name: '??????', width: 11, type: 'number', column: 'comment_count' },
            { name: '????????????', width: 15, type: 'number', column: 'views_count' },
        ]
    },
    comment: {
        breadcrumb: '??????',
        schema: 'comment',
        zColumn: [
            { name: '????????????', width: 11, type: 'category_type', column: 'category_pk' },
            { name: '??????', width: 22, type: 'text', column: 'item_title' },
            { name: '?????????', width: 11, type: 'text', column: 'user_nickname' },
            { name: '?????????', width: 17, type: 'text', column: 'date' },
            { name: '??????', width: 28, type: 'text', column: 'note' },
            { name: '??????', width: 12, type: 'delete', column: 'delete' }
        ]
    },
    master: {
        breadcrumb: '?????????',
        schema: 'user',
        zColumn: [
            { name: '??????????????????', width: 12, type: 'img', column: 'profile_img' },
            { name: '???????????????', width: 12, type: 'img', column: 'channel_img' },
            { name: '?????????', width: 12, type: 'text', column: 'id' },
            { name: '??????', width: 8, type: 'text', column: 'name' },
            { name: '?????????', width: 12, type: 'text', column: 'nickname' },
            { name: '????????????', width: 12, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'master_edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    channel: {
        breadcrumb: '??????',
        schema: 'user',
        zColumn: [
            { name: '???????????????', width: 24, type: 'img', column: 'channel_img' },
            { name: '?????????', width: 24, type: 'text', column: 'nickname' },
            { name: '????????????', width: 28, type: 'text', column: 'date' },
            { name: '??????', width: 12, type: 'edit', column: 'edit' },
            { name: '??????', width: 12, type: 'delete', column: 'delete' }
        ],
    },
    all: {
        breadcrumb: '?????????',
        schema: 'all',
        zColumn: [
            { name: '????????????', width: 24, type: 'post_category', column: 'category' },
            { name: '??????', width: 24, type: 'text', column: 'title' },
            { name: '?????????', width: 14, type: 'text', column: 'nickname' },
            { name: '?????????', width: 12, type: 'text', column: 'date' },
            { name: '?????????', width: 12, type: 'number', column: 'views' },
            { name: '?????????', width: 12, type: 'number', column: 'comment_num' }
        ],
    },
    oneword: {
        breadcrumb: '??????1??????',
        schema: 'oneword',
        zColumn: [
            { name: '???????????????', width: 24, type: 'img', column: 'main_img' },
            { name: '??????', width: 24, type: 'text', column: 'title' },
            { name: '????????????', width: 20, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    oneevent: {
        breadcrumb: '??????1??????',
        schema: 'oneevent',
        zColumn: [
            { name: '???????????????', width: 24, type: 'img', column: 'main_img' },
            { name: '??????', width: 24, type: 'text', column: 'title' },
            { name: '????????????', width: 20, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    theme: {
        breadcrumb: '????????????',
        schema: 'theme',
        zColumn: [
            { name: '???????????????', width: 24, type: 'img', column: 'main_img' },
            { name: '??????', width: 24, type: 'text', column: 'title' },
            { name: '????????????', width: 20, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    strategy: {
        breadcrumb: '???????????????',
        schema: 'strategy',
        zColumn: [
            { name: '???????????????', width: 24, type: 'img', column: 'main_img' },
            { name: '??????', width: 24, type: 'text', column: 'title' },
            { name: '????????????', width: 20, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    issue: {
        breadcrumb: '????????????&??????',
        schema: 'issue',
        zColumn: [
            { name: '???????????????', width: 24, type: 'img', column: 'main_img' },
            { name: '??????', width: 24, type: 'text', column: 'title' },
            { name: '????????????', width: 20, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    issue_category: {
        breadcrumb: '????????????&?????? ????????????',
        schema: 'issue_category',
        zColumn: [
            { name: '??????', width: 48, type: 'text', column: 'title' },
            { name: '????????????', width: 20, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    feature_category: {
        breadcrumb: '????????? ????????????',
        schema: 'feature_category',
        zColumn: [
            { name: '??????', width: 48, type: 'text', column: 'title' },
            { name: '????????????', width: 20, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    feature: {
        breadcrumb: '?????????',
        schema: 'feature',
        zColumn: [
            { name: '???????????????', width: 24, type: 'img', column: 'main_img' },
            { name: '??????', width: 24, type: 'text', column: 'title' },
            { name: '????????????', width: 20, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    video: {
        breadcrumb: '???????????????',
        schema: 'video',
        zColumn: [
            { name: '??????', width: 8, type: 'text', column: 'pk' },
            { name: '??????', width: 16, type: 'text', column: 'title' },
            { name: '??????', width: 20, type: 'link', column: 'link' },
            { name: '????????????', width: 16, type: 'text', column: 'date' },
            { name: '?????????', width: 8, type: 'top', column: '' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    notice: {
        breadcrumb: '??????',
        schema: 'notice',
        zColumn: [
            { name: '??????', width: 38, type: 'text', column: 'title' },
            { name: '????????????', width: 38, type: 'text', column: 'date' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    popup: {
        breadcrumb: '??????',
        schema: 'popup',
        zColumn: [
            { name: '?????????', width: 38, type: 'img', column: 'img_src' },
            { name: '????????????', width: 38, type: 'text', column: 'date' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    },
    alarm: {
        breadcrumb: '????????????',
        schema: 'alarm',
        zColumn: [
            { name: '??????', width: 25, type: 'text', column: 'title' },
            { name: '??????', width: 25, type: 'alarm_type', column: 'type' },
            { name: '????????????', width: 26, type: 'text', column: 'date' },
            { name: '????????????', width: 8, type: 'status', column: 'status' },
            { name: '??????', width: 8, type: 'edit', column: 'edit' },
            { name: '??????', width: 8, type: 'delete', column: 'delete' }
        ],
    }
}
export const getManagerListApi = (table, num) => {
    let str = "";
    return str;
}

export const slideSetting = (num) => {
    return {
        infinite: false,
        dots: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2500,
        slidesToShow: 1.15,
        slidesToScroll: 1,
        breakpoint: 480,
        beforeChange(oldIndex, newIndex) {
            $(`.slider${num} > ul.slick-dots > li:nth-child(${(oldIndex % 1 == 0 ? oldIndex : parseInt(oldIndex) + 1) + 1})`).removeClass('slick-active');
            $(`.slider${num} > ul.slick-dots > li:nth-child(${(newIndex % 1 == 0 ? newIndex : parseInt(newIndex) + 1) + 1})`).addClass('slick-active');
        }
    }

}